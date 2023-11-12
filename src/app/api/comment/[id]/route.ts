import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../../auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
import prisma from "@/DB/db.config";

export const DELETE = async (request: NextRequest, { params }: { params: { id: number } }) => {
    try {
        const session: CustomSession | null = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ status: 401, message: "Un-Authorized" });
        }
        const findComment = await prisma.comment.findUnique({
            where: {
                id: Number(params.id),
                user_id: Number(session.user?.id)
            }
        })
        if (!findComment) {
            return NextResponse.json({ status: 400, message: 'Bad Request' })
        }

        await prisma.comment.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json({ status: 200, message: 'Deleted Succesfully' })
    } catch (error) {
        console.log(error);
    }
}