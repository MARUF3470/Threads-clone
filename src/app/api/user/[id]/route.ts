import prisma from "@/DB/db.config";
import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../../auth/[...nextauth]/option";
import { getServerSession } from "next-auth";

export const GET = async (request: NextRequest, { params }: { params: { id: number } }) => {
    const session: CustomSession | null = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ status: 401, message: "Un-Authorized" });
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(params.id)
            },
            select: {
                name: true,
                username: true,
                email: true,
                id: true,

                Post: {
                    include: {
                        user: {
                            select: {
                                name: true,
                                username: true,
                                id: true,
                            }
                        },
                        Likes: {
                            where: {
                                user_id: Number(session?.user?.id),
                            },
                        },
                    }
                },
                Comment: {
                    include: {
                        user: {
                            select: {
                                name: true,
                                username: true,
                                id: true,
                            }
                        }
                    }
                },
            }
        })
        return NextResponse.json({ status: 200, data: user })
    } catch (error) {
        console.log(error);
    }
}