import { NextRequest, NextResponse } from "next/server";
import vine, { errors } from '@vinejs/vine'
import { registrationSchema } from "@/validation/registrationSchema";
import { CustomErrorReporter } from "@/validation/customErrorReporter";
import { genSaltSync, hashSync } from 'bcryptjs'
import prisma from "@/DB/db.config";
export const POST = async (request: NextRequest) => {
    try {
        const data = await request.json()
        vine.errorReporter = () => new CustomErrorReporter()
        const validator = vine.compile(registrationSchema)
        const payload = await validator.validate(data)

        const IsEmailExist = await prisma.user.findUnique({
            where: {
                email: payload.email
            }
        })
        if (IsEmailExist) {
            return NextResponse.json({ status: 400, error: 'Email already taken please use another email' })
        }
        const IsUserNameExist = await prisma.user.findUnique({
            where: {
                username: payload.username
            }
        })
        if (IsUserNameExist) {
            return NextResponse.json({ status: 400, error: 'Username already taken please use another Username' })
        }
        // * To hash the password
        const salt = genSaltSync(10)
        payload.password = hashSync(payload.password, salt)
        // * Insert record in DB
        await prisma.user.create({
            data: payload
        })
        return NextResponse.json({ status: 200, message: "Account created successfully" })

    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {

            return NextResponse.json({ status: 400, error: error.messages })
        }
    }

}