'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import SignupScreen from '@/components/createAccount/SignupScreen';
import { useRouter } from 'next/navigation';
import AppBack from '@/components/common/AppBack';
import { callApi } from '@/lib/helpers/callApi';
import { ISignup } from '@/interfaces/FormInputs';
import { ENDPOINTS } from '@/lib/utils/endpoints';
import { ApiResponse } from '@/interfaces/ApiResponses';
import { useFetch } from '@/hooks/useFetch';

type Props = {}
type signUpStep = 'form' | 'otp' | 'success'
const Page = (props: Props) => {
    const router = useRouter()
    const { fetch, isLoading } = useFetch()

    const onSignup = async (data: ISignup) => {
        const body = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        }
        const response = await fetch('/auth/register', 'POST', body)
        console.log(response)
        if (!response) return
        router.push(`/verify-email?email=${data.email}`)
    }

    useEffect(() => {
        router.prefetch('/verify-email')
    }, [router])
    return (
        <>
            <SignupScreen onSubmit={onSignup} isLoading={isLoading} />
        </>
    )
}

export default Page