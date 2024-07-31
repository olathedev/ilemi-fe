'use client'
import DashboardNavBar from '@/components/common/DashboardNavBar'
import DashboardSideBar from '@/components/common/DashboardSideBar'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {

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
    <div className="flex relative h-screen min-h-screen">
        <DashboardSideBar />
        <div className="flex-1 h-full bg-gray-50">
            <DashboardNavBar />
            <main className="container mx-auto pt-6">
               { children }
            </main>
        </div>


    </div>
  )
}

export default Layout