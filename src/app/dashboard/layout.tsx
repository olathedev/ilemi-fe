'use client'
import DashboardNavBar from '@/components/common/DashboardNavBar'
import DashboardSideBar from '@/components/common/DashboardSideBar'
import WelcomeModal from '@/components/dashboard/WelcomeModal'
import { useAuth } from '@/hooks/useAuth'
import { useUiStore } from '@/store/uiStore'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Outfit } from 'next/font/google'
import AddPropertyModal from '@/components/dashboard/addProperty/AddPropertyModal'

type Props = {
    children: React.ReactNode
}
const outfit = Outfit({
    subsets: ["latin"]
})

const Layout = ({ children }: Props) => {

    const { loading, user, logout } = useAuth()
    const { hasSeenWelcomeModal, setHasSeenWelcome } = useUiStore()
    const router = useRouter()

    if (loading) {
        return (
            <div className={`w-full h-screen flex items-center justify-center p-4`}>
                <h2>Validating Auth status... </h2>
            </div>
        )
    }

    return (
        <div className={`font-outfit flex relative h-screen min-h-screen`}>
            <DashboardSideBar />
            <div className="flex-1 h-full max-h-full overflow-y-auto bg-gray-50">
                <DashboardNavBar logout={logout} user={`${user && (user.firstName + ' ' + user.lastName)}`} />
                <main className="container mx-auto p-6">
                    {children}
                </main>
            </div>

        </div>
    )
}

export default Layout