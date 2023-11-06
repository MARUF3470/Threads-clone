import { NextResponse } from "next/server";
import vine, {errors} from '@vinejs/vine'
import { loginSchema } from "@/validation/registrationSchema";
import { CustomErrorReporter } from "@/validation/customErrorReporter";
import  { compareSync } from 'bcryptjs'
import prisma from "@/DB/db.config";
export const POST = async (request: NextResponse) => {
    try {
        const data = await request.json()
        vine.errorReporter = () => new CustomErrorReporter()
        const validator = vine.compile(loginSchema)
        const payload = await validator.validate(data)
        const findUser = await prisma.user.findUnique({
            where: {
                email: payload.email
            }
        })

        if (!findUser) {
            return NextResponse.json({ status: 400, error:{email: 'No account found with this email' }})
        }
        // * check password
        
        const checkPassword = compareSync(payload.password, findUser.password!)
        if (checkPassword) {
            return NextResponse.json({status: 200, message:"User login successfully"})  
        }
        return NextResponse.json({status: 400, error:{password:"Invalid Password"}})

    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
           
          return  NextResponse.json({status: 400, error: error.messages})
          }
    }
    
}