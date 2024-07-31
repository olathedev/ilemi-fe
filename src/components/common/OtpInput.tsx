'use client'
import React, { KeyboardEvent, useRef, useState } from 'react'

type Props = {
    onChange: (otp: string) => void;
}

const OtpInput = ({onChange}: Props) => {
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '', ''])
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (index: number, value: string) => {
        if (isNaN(Number(value))) return;
        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)

        if (value !== '' && index < otp.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
        onChange(newOtp.join(''));
    }

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className='w-full flex justify-between'>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                ref={(el) => inputRefs.current[index] = el}
                onKeyDown={(e) => handleKeyDown(index, e)}
                maxLength={1}
                className='h-[3rem] w-14 flex items-center justify-center text-xl text-gray-500 text-center border border-gray-400 rounded-md'
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)} 
              />
            ))}
        </div>
    )
}

export default OtpInput