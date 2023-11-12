import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
import prisma from "@/DB/db.config";

export const GET = async (request: NextRequest) => {
    const session: CustomSession | null = await getServerSession(authOptions)
    if (!session) {
        return NextResponse.json({ status: 201, message: "Un-authorized" })
    }
    const query = request.nextUrl.searchParams.get('query')
    const users = await prisma.user.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: query ?? '',
                        mode: 'insensitive' // to make case independent
                    }
                }, {
                    username: {
                        contains: query ?? '',
                        mode: 'insensitive'
                    }
                }
            ],
            NOT: {
                id: Number(session.user?.id)
            }
        },
        select: {
            id: true,
            name: true,
            username: true
        }
    })
    return NextResponse.json({ status: 200, data: users })
}