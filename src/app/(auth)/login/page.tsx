'use client'
import { loginSchema } from '@/app/lib/validators/zodValidations';
import RoundedButton from '@/components/reusables/RoundedButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type Props = {}
type FormData = z.infer<typeof loginSchema>;

const Page = (props: Props) => {

    const router = useRouter()

    const {register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
		reValidateMode: "onChange",
    })

    console.log(errors)
    const onSubmit = (data: any) => {
        console.log(data)
        toast.success("Login successful")
        setTimeout(() => {
            router.push("/")
        }, 2000)
    }
    return (
        <div className='container mx-auto'>
            <div className="lg:-mt-14 mt-20 h-screen max-h-screen w-full md:flex flex-col items-center justify-center">
                <div className='md:border border-[#B1B7D6] md:px-10 py-6 md:w-[30rem] w-full mt-4 rounded-xl'>
                    <h2 className='text-xl font-semibold text-center'>Welcome Back</h2>
                    <p className='my-2 text-center text-[15px] text-slate-700'>Sign into your Account account to continue</p>
                    <div className="border-t my-6"></div>

                    <form className='py-4' onSubmit={handleSubmit(onSubmit)}>

                        <div className='flex flex-col gap-1.5 mb-6'>
                            <label className="text-xs pl-4 font-semibold">EMAIL ADRESS</label>

                            <div className='relative w-full'>

                                <span className='absolute top-3.5 left-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>

                                </span>
                                <input type="text" className="py-3.5 px-14 w-full border border-primary-200 rounded-full text-sm bg-[#FAFAFE] focus:outline-none focus:border-primary-100 focus:border-2 focus:bg-[#F1F3FF]" placeholder='Enter your email' {...register('email')} />

                                {errors.email && <p className='text-red-500 text-xs pl-4 pt-1.5'>{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <label className="text-xs pl-4 font-semibold">PASSWORD</label>

                            <div className='relative w-full'>

                                <span className='absolute top-3 left-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>


                                </span>
                                <input type="text" className="py-3.5 px-14 w-full border border-primary-200 rounded-full text-sm bg-[#FAFAFE] focus:outline-none focus:border-primary-100 focus:border-2 focus:bg-[#F1F3FF]" placeholder='Enter your email' {...register('password')} />
                                {errors.password && <p className='text-red-500 text-xs pl-4 pt-1.5'>{errors.password.message}</p>}


                            </div>

                            <div className="text-right text-sm font-semibold text-gray-600">Forgoten Password?</div>

                            <div className="w-full my-3">
                                <RoundedButton variant='primary'>Sign in</RoundedButton>
                            </div>
                        </div>

                    </form>

                </div>

                <p className='text-sm text-center'>Dont have an account? <Link href="/signup" className='text-primary-100'>Create Account</Link></p>


            </div>
        </div>
    )
}

export default Page