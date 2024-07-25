'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import SignupScreen from '@/components/createAccount/SignupScreen';
import { useRouter } from 'next/navigation';
import AppBack from '@/components/common/AppBack';
import { callApi } from '@/lib/helpers/callApi';

type Props = {}
type signUpStep = 'form' | 'otp' | 'success'
const Page = (props: Props) => {

    const fetch = async () => {
        const response = await callApi('/health')
        console.log(response)
        toast.success(response.data.message)
    }

    useEffect(() => {
        fetch()
    }, [])
    const router = useRouter()

    const [step, setStep] = useState<signUpStep>('form')

    const onSignup = (data: any) => {
        console.log(data)
        toast.success('Success', {
            description: 'Signup sucessfully worked'
        })
        router.push('/verify-email')
    }

    return (
        <div className='w-full h-screen flex items-center justify-center p-4'>
            <div className='w-full md:w-[35%]'>
                <AppBack />
                <SignupScreen onSubmit={onSignup} />
            </div>
        </div>
    )
}

export default Page