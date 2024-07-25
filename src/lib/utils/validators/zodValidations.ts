import { ISignup, login } from "@/interfaces/FormInputs";
import { ZodType, z } from "zod";

export const loginSchema: ZodType<login> = z.object({
    email: z.string().min(2, { message: "Email is required" })
        .email({ message: "Invalid email address" }).transform((value) => {
            return value.toLowerCase().trim();
        }),

    password: z.string().min(6, { message: "invalid password input" }).max(50)
        .transform((value) => {
            return value.trim();
        }),
})


export const signupSchema: ZodType<ISignup> = z.object({
    firstName: z.string().min(2, { message: "firstname is required" }),
    lastName: z.string().min(2, { message: "lastname is required" }),
    email: z.string().min(2, { message: "Email is required" })
        .email({ message: "Invalid email address" }).transform((value) => {
            return value.toLowerCase().trim();
        }),
    password: z.string().min(6, { message: "Password must be atleast 6 characters long" }).max(30)
        .transform((value) => {
            return value.trim();
        })
})