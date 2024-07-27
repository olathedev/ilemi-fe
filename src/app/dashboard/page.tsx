'use client'
import StatsCard from '@/components/dashboard/StatsCard'
import { useAuthSessionStore } from '@/store/sessionStore'
import React from 'react'

type Props = {}

function Page({ }: Props) {
    const user: any = useAuthSessionStore((state) => state.user)
    return (
        <div className="w-full">
            <h1 className="text-xl font-semibold">Good morning, {`${user && user.firstname}👋`}</h1>
            <p className="text-grey-600">Welcome to your ilemi Dashboard</p>

            <div className="w-full flex gap-4 mt-4">
                    <StatsCard />

                <div className='flex-1 bg-white border p-4 rounded-md flex flex-col'>
                    <div className="">
                        <h3 className="font-semibold">Rent Wallet</h3>
                        <div className="border w-full p-3 rounded-md">
                            <p className='text-sm text-grey-600 flex'>Total Balance </p>
                            <p className="text-3xl font-bold">$0.00</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page