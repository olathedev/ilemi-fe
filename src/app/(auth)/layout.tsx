'use client'
import AppBack from '@/components/common/AppBack'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {
    children: React.ReactNode

}

function Layout({ children }: Props) {
    const { loading, user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && user) {
            router.push('/dashboard')
        }
    }, [loading, user, router])

    if (loading) {
        return (
            <div className='w-full h-screen flex items-center justify-center p-4'>
                <h2>Validating Auth status... </h2>
            </div>
        )
    }

    return (
        <div className='w-full h-screen flex items-center justify-center p-4'>
            <div className='w-full md:w-[35%]'>
                {/* <AppBack /> */}
                {children}
            </div>
        </div>
    )
}

export default Layout