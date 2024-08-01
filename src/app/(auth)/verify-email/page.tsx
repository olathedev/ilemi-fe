'use client'
import AppBack from '@/components/common/AppBack'
import OtpInput from '@/components/common/OtpInput'
import { Button } from '@/components/ui/button'
import { useFetch } from '@/hooks/useFetch'
import { callApi } from '@/lib/helpers/callApi'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { KeyboardEvent, useRef, useState } from 'react'
import { toast } from 'sonner'

type Props = {}

const OtpScreen = (props: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const { fetch, isLoading } = useFetch()

  const [otp, setOtp] = useState<string | null>(null)
  const handleOtpChnage = (otp: string) => {
    setOtp(otp)
  }

  const onVerify = async (e: any) => {
    e.preventDefault()
    const response = await fetch('/auth/verify-otp', 'POST', {
      email,
      otp
    })
    if(!response) return
    router.push('/login')
  }

  return (
    <>
      <h1 className="mt-4 text-lg font-semibold text-slate-800 ">Verify your email address</h1>
      <p className='text-base text-gray-500'>Enter the 6 digit code sent to {email}</p>

      <form className='w-full flex flex-col mt-4 gap-4 justify-center'>
        <div>
        <OtpInput onChange={handleOtpChnage} />
        </div>
        <Button size='xl' className='py-4 w-full' onClick={onVerify} disabled={isLoading}>
          Verify
        </Button>
      </form>

      <p className="text-center mt-3">Didn’t receive link? <span className="text-primary font-semibold">Resend</span> </p>

    </>
  )
}

export default OtpScreen