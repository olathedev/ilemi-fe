'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

type Props = {}

function AppBack({ }: Props) {

    const router = useRouter()

    return (
        <div className='flex items-center text-sm text-gray-600 cursor-pointer' onClick={() => router.back()}>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
            </span>
            Back
        </div>
    )
}

export default AppBack