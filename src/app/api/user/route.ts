import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
import prisma from "@/DB/db.config";

export const GET =async (request:NextRequest) => {
    const session: CustomSession | null = await getServerSession(authOptions)
    if (!session) {
        return NextResponse.json({status: 201, message: "Un-authorized"})
    }
    const user = await prisma.user.findMany({
        where: {
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
   return NextResponse.json({status: 200, data: user})
}