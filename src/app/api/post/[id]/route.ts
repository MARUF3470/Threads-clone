import prisma from "@/DB/db.config";
import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../../auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
import { join } from "path";
import { rmSync } from "fs";

export const GET = async (request: NextRequest, { params }: { params: { id: number } }) => {
    const session: CustomSession | null = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ status: 401, message: "Un-Authorized" });
    }
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: Number(params.id)
            },
            include: {
                user: {
                    select: {
                        name: true,
                        id: true,
                        username: true
                    }
                },
                Comment: {
                    include: {
                        user: {
                            select: {
                                name: true,
                                id: true,
                                username: true
                            }
                        }
                    }
                },
                Likes: {
                    take: 1,
                    where: {
                        user_id: Number(session?.user?.id),
                    },
                },
            }
        })
        return NextResponse.json({ status: 200, data: post })
    } catch (error) {
        console.log(error);
    }
}
export const DELETE = async (request: NextRequest, { params }: { params: { id: number } }) => {
    try {
        const session: CustomSession | null = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ status: 401, message: "Un-Authorized" });
        }
        const findPost = await prisma.post.findUnique({
            where: {
                id: Number(params.id),
                user_id: Number(session.user?.id)
            }
        })
        if (!findPost) {
            return NextResponse.json({ status: 400, message: 'Bad Request' })
        }
        if (findPost?.image?.length) {
            const dir = join(process.cwd(), "public", "/uploads");
            const path = dir + "/" + findPost?.image
            rmSync(path, { force: true })
        }
        await prisma.post.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json({ status: 200, message: 'Deleted Succesfully' })
    } catch (error) {
        console.log(error);
    }
}