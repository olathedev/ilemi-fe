'use client'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}

const Layout = (props: Props) => {

    const { loading, user, logout } = useAuth()
    const router = useRouter()
    
    useEffect(() => {
        if(!loading && !user) {
            router.push('/login') 
        }

    }, [loading, user, router])

    if(loading) {
        return (
            <div className='w-full h-screen flex items-center justify-center p-4'>
                <h2>Validating Auth status... </h2>
            </div>
        )
    }

  return (
    <div>
        layout
        <p onClick={logout}> logout </p>

    </div>
  )
}

export default Layout