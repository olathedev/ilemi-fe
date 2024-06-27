import { login } from "@/interfaces/FormInputs";
import { ZodType, z } from "zod";

export const loginSchema: ZodType<login> = z.object({
    email: z.string().min(2, { message: "Email is required" })
    .email({ message: "Invalid email address" }).transform((value) => {
			return value.toLowerCase().trim();
		}),

    password: z.string().min(8, { message: "invalid password input" }).max(50)
    .transform((value) => {
        return value.trim();
    }),
})