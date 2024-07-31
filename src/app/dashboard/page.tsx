'use client'
import EyeIcon from '@/components/common/icons/eyeIcon'
import StatsCard from '@/components/dashboard/StatsCard'
import { useAuthSessionStore } from '@/store/sessionStore'
import React, { useState } from 'react'

type Props = {}

function Page({ }: Props) {
    const user: any = useAuthSessionStore((state) => state.user)

    const [balanceHidden, setBalanceHidden] = useState(true)
    return (
        <div className="w-full">
            <h1 className="text-xl font-semibold">Good morning, {`${user && user.firstname}👋`}</h1>
            <p className="text-grey-600">Welcome to your ilemi Dashboard</p>

                <StatsCard balanceHidden={balanceHidden} setBalanceHidden={setBalanceHidden} />

        </div>
    )
}

export default Page