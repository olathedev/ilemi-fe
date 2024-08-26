import React from 'react'
import DashboardIcon from './icons/DashboardIcon'
import UsersIcon from './icons/UsersIcon'
import HouseIcon from './icons/HouseIcon'
import CubeIcon from './icons/CubeIcon'
import PaymentIcon from './icons/PaymentIcon'
import MoneyIcon from './icons/MoneyIcon'
import CheckIcon from './icons/CheckIcon'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const DashboardSideBar = (props: Props) => {
    const sidBarItems1 = [
        { path: '/dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
        { path: '/dashboard/tenants', title: 'Tenants', icon: <UsersIcon /> },
        { path: '/', title: 'Property', icon: <HouseIcon /> },
        { path: '/', title: 'Spaces', icon: <CubeIcon /> },
    ]

    const sidBarItems2 = [
        { path: '/', title: 'Payments', icon: <PaymentIcon /> },
        { path: '/', title: 'Rent Rates', icon: <MoneyIcon /> },
        { path: '/', title: 'Rent Payment status', icon: <CheckIcon /> },
    ]

    const sidBarItems3 = [
        { path: '/', title: 'Maintance requests', icon: <DashboardIcon /> },
        { path: '/', title: 'Funding campiagns', icon: <UsersIcon /> },
        { path: '/', title: 'Issue notices', icon: <HouseIcon /> },
    ]

    return (
        <aside className="hidden lg:block w-66 h-full max-h-full overflow-y-auto bg-white transform-x-0 transition-transform duration-300 ease-in-out text-gray-600 shadow-sm border border-gray-100">
            <div className="px-6 py-4">
                <h3 className=" text-2xl font-semibold opacity-90">ilemi<span className='text-primary-600'>.ng</span> </h3>

                <div className='mt-4 px-5 py-2 border rounded-xl text-sm'>
                    <div className="flex justify-between items-center text-gray-500">Two unit Duplex... <ChevronDown size={17} /></div>
                </div>
                <nav className="mt-8 flex flex-col space-y-4">
                    <p className="text-xl font-semibold "> Quick access </p>
                    <div className='mt-3 flex flex-col gap-1'>
                        <p className="font-semibold text-primary-700">Management</p>
                        {sidBarItems1.map((item, index) => (
                            <Link href={item.path} key={index}>
                                <div className="flex items-center cursor-pointer gap-2 px-2 py-1 hoverside" >
                                    {item.icon}
                                    {item.title}
                                </div>
                            </Link>
                        ))}

                    </div>

                    <div className='mt-5 flex flex-col gap-1'>
                        <p className="font-semibold text-primary-700">Financials</p>

                        {sidBarItems2.map((item, index) => (

                            <div className="flex items-center gap-2 px-2 py-1 hoverside" key={index}>
                                {item.icon}
                                {item.title}
                            </div>
                        ))}

                    </div>

                    <div className='mt-5 flex flex-col gap-1'>
                        <p className="font-semibold text-primary-700">Tenant Success</p>

                        {sidBarItems3.map((item, index) => (
                            <div className="flex items-center gap-2 px-2 py-1 hoverside" key={index}>
                                {item.icon}
                                {item.title}
                            </div>
                        ))}

                    </div>

                </nav>
            </div>
        </aside>

    )
}

export default DashboardSideBar