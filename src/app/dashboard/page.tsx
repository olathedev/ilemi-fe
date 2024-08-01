'use client'
import ElipsisIcon from '@/components/common/icons/ElipsisIcon'
import EyeIcon from '@/components/common/icons/EyeIcon'
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

            <div className="mt-4 w-full bg-white rounded-md px-6 py-6">
                <div className='mb-6'>
                <h1 className="font-semibold text-grey-800">Recent Maintance requests</h1>
            <p className="text-grey-600 text-sm">Here's a breakdown of tenants with maintance requests</p>

                </div>
                <table className='min-w-full border border-gray-100 rounded-md'>
                    <thead>
                        <tr className="bg-primary-100 rounded-md">
                            <th className="py-2 px-4 border-b text-left">Tenant</th>
                            <th className="py-2 px-4 border-b text-left">Unit</th>
                            <th className="py-2 px-4 border-b text-left">Date Laid</th>
                            <th className="py-2 px-4 border-b text-left">Status</th>
                            <th className="py-2 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr

                            className='py-2'
                        >

                            <td className='py-3 px-4 border-b'>John Doe</td>
                            <td className='py-3 px-4 border-b'>200k shortlet</td>
                            <td className='py-3 px-4 border-b'>31st July 2023</td>
                            <td className='py-3 px-4 border-b'>pending</td>
                            <td className='py-3 px-4 border-b text-center'> <ElipsisIcon /></td>




                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Page