import React, { useState } from 'react'
import AppCheckbox from '../common/AppCheckbox'
import { Button } from '../ui/button'
import GoogleIcon from '../common/icons/GoogleIcon'
import { ISignup } from '@/interfaces/FormInputs'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema } from '@/lib/utils/validators/zodValidations'
import Link from 'next/link'

type Props = {
    onSubmit: (data: ISignup) => void,
    isLoading: boolean
}

const SignupScreen = ({ onSubmit, isLoading }: Props) => {
    const { register, handleSubmit, formState: {errors} } = useForm<ISignup>({
        resolver: zodResolver(signupSchema)
    })

    const [checked, setChecked] = useState(true)
    const handleChecked = () => {
        setChecked(!checked)
    }
    
    console.log(errors)

    return (
        <div className="mt-4 md:border md:p-5 rounded-md">
            <h1 className="text-lg font-semibold text-slate-600 ">Welcome to Ilemi, <span className=''>Onile(Landlord)</span></h1>
            <p className='text-base text-gray-500'>Lets sign you up in a few easy steps</p>

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
                <div className="flex gap-2">
                <div className="w-1/2">
                <input type="text" className='w-full py-3 px-3 border border-gray-300 rounded-lg' placeholder='Firstname' {...register('firstName')} />
                {errors.firstName && <p className="text-xs px-1 text-red-500">{errors.firstName.message}</p>}
                </div>

                <div className="w-1/2">
                <input type="text" className='w-full py-3 px-3 border border-gray-300 rounded-lg' placeholder='Lastname' {...register('lastName')} />
                {errors.lastName && <p className="text-xs px-1 text-red-500">{errors.lastName.message}</p>}
                </div>
                    
                </div>

                <div className="w-full">
                <input type="text" className='w-full py-3 px-3 border border-gray-300 rounded-lg' placeholder='Email Adress' {...register('email')} />
                {errors.email && <p className="text-xs px-1 text-red-500">{errors.email.message}</p>}
                
                </div>

                <div className="w-full relative">
                    <input type="password" className='w-full py-3 px-2 border border-gray-300 rounded-lg' placeholder='Password' {...register('password')} />
                    <span className="absolute right-6 top-3 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                    </span>
                {errors.password && <p className="text-xs px-1 text-red-500">{errors.password.message}</p>}

                </div>

                <div className="py-3 flex items-center text-sm text-gray-400">
                    <AppCheckbox checked={checked} onChange={handleChecked} label={''} size='lg' />
                    <p>I acknowledge that I have read and do hereby accept the terms and conditions in the <span className="text-primary font-semibold">Ilemi Terms of Use</span>, and <span className="text-primary font-semibold">Privacy policy</span>.</p>
                </div>

                <Button size='xl' className='py-4' disabled={isLoading}>
                     {isLoading ? 'loading...' : 'Continue'}
                </Button>
            </form>

            <div className='text-center mt-5 cursor-pointer flex'>
                Already have an account? <Link href="/login" className="text-primary font-semibold">Login</Link>
            </div>

        </div>
    )
}

export default SignupScreen