'use client'
import AppBack from '@/components/common/AppBack'
import OtpInput from '@/components/common/OtpInput'
import { Button } from '@/components/ui/button'
import React, { KeyboardEvent, useRef, useState } from 'react'
import { toast } from 'sonner'

type Props = {}

const OtpScreen = (props: Props) => {

  const [otp, setOtp] = useState<string | null>(null)

  const handleOtpChnage = (otp: string) => {
    setOtp(otp)
  }

  const onVerify = (e: any) => {
    e.preventDefault()
    toast.success("Email verified, you'll be redirected to signin.")
  }
 
  return (
    <div className='w-full h-screen flex items-center justify-center p-4'>
      <div className='w-full md:w-[35%]'>
        <AppBack />
        <h1 className="mt-4 text-lg font-semibold text-slate-800 ">Verify your email address</h1>
        <p className='text-base text-gray-500'>Enter the 6 digit code sent to joh****@example.com</p>

        <form className='w-[90%] flex flex-col mt-4 gap-4 justify-center'>
          <OtpInput onChange={handleOtpChnage} />
          <Button size='xl' className='py-4' onClick={onVerify}>
            Verify
          </Button>
        </form>
      </div>
    </div>
  )
}

export default OtpScreen