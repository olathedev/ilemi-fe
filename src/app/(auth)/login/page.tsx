'use client'
import { loginSchema } from '@/lib/utils/validators/zodValidations';
import RoundedButton from '@/components/reusables/RoundedButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import GoogleIcon from '@/components/common/icons/GoogleIcon';
import { useFetch } from '@/hooks/useFetch';
import { login } from '@/interfaces/FormInputs';

type Props = {}
type FormData = z.infer<typeof loginSchema>;

const Page = (props: Props) => {
    const router = useRouter()
    const {fetch, isLoading} = useFetch()

    const {register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
		reValidateMode: "onChange",
    })

    // console.log(errors)
    const onSubmit = (data: any) => {
        console.log(data)
        const body: login = {
            email: data.email,
            password: data.password
        }
        const response = fetch('/auth/login', 'POST', body)  
        if(!response) {
            reset()
            return
        }

        
    }
    return (
        <div className="mt-4 md:border border-gray-300 md:p-5 rounded-md">
            <h1 className="text-lg font-semibold text-slate-800 ">Welcome back, <span className=''>Onile(Landlord)</span></h1>
            <p className='text-base text-gray-600'>Sign in to catch up with your activities</p>

            <form action="" className='w-full flex flex-col gap-2 mt-3' onSubmit={handleSubmit(onSubmit)}>
                <div className="py-2.5 px-3 border border-gray-300 rounded-xl flex items-center gap-3 justify-center text-gray-500 ">
                    <GoogleIcon />
                    Continue with google
                </div>

                <div className="flex items-center my-2">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-600">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
               
                <div className="w-full">
                <input type="text" className='w-full text-[15px] text-gray-600 py-3 px-3 border border-gray-300 rounded-lg' placeholder='Email Adress' {...register('email')} />
                {errors.email && <p className="text-xs px-1 text-red-500">{errors.email.message}</p>}
                
                </div>

                <div className="w-full relative">
                    <input type="password" className='w-full text-[15px] text-gray-600 py-3 px-2 border border-gray-300 rounded-lg' placeholder='Password' {...register('password')} />
                    <span className="absolute right-6 top-3 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                    </span>
                {errors.password && <p className="text-xs px-1 text-red-500">{errors.password.message}</p>}

                </div>

                

                <Button size='xl' className='py-4' disabled={isLoading}>
                     {isLoading ? 'loading...' : 'Continue'}
                </Button>
            </form>

            <div className='text-center mt-5 cursor-pointer'>
                Already have an account? <span className="text-primary font-semibold">Login</span>
            </div>

        </div>
    )
}

export default Page