import { CustomErrorReporter } from "@/validation/customErrorReporter";
import vine, { errors } from "@vinejs/vine";
import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
import { commentSchema } from "@/validation/commentSchema";
import prisma from "@/DB/db.config";

export const POST = async (request: NextRequest) => {
  try {
    const session: CustomSession | null = await getServerSession(authOptions);
    console.log(session);
    if (!session) {
      return NextResponse.json({ status: 401, message: "Un-Authorized" });
    }
    const data = await request.json();
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(commentSchema);
    const payload = await validator.validate(data);

    // * Increase the post comment count
    await prisma.post.update({
      where: {
        id: Number(payload.post_id),
      },
      data: {
        comment_count: {
          increment: 1,
        },
      },
    });

    // * Add notification
    await prisma.notification.create({
      data: {
        user_id: Number(session.user?.id),
        toUser_id: Number(payload.toUserId),
        content: 'Commented to your post.'
      }
    })


    await prisma.comment.create({
      data: {
        post_id: Number(payload.post_id),
        content: payload.content,
        user_id: Number(session?.user?.id),
      },
    });

    return NextResponse.json({
      status: 200,
      message: "Comment added successfully!",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      // Validation error
      return NextResponse.json({ status: 400, errors: error.messages });
    } else {
      // Generic error
      console.error('Unexpected error:', error);
      return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
  }

};
