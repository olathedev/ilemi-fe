import React from 'react'
import DashboardIcon from './icons/DashboardIcon'

type Props = {}

const DashboardSideBar = (props: Props) => {
    const sidBarItems  = [
        { path: '/', title: 'Dashboard', icon: <DashboardIcon /> },
        { path: '/', title: 'Tenants', icon: <DashboardIcon /> },
        { path: '/', title: 'Wallet/Payments', icon: <DashboardIcon /> },
        { path: '/', title: 'Dashboard', icon: <DashboardIcon /> },
        { path: '/', title: 'Dashboard', icon: <DashboardIcon /> },

    ]
  return (
    <aside className="w-64 h-full border border-r-grey-300">
        <div className="px-6 py-4">
            <h3 className=" text-2xl font-semibold opacity-90">ilemi<span className='text-primary'>.ng</span> </h3>
            <nav className="mt-12 flex flex-col space-y-8">
                <p className="text-lg font-semibold "> Quick access </p>
                {sidBarItems.map((item, index) => (
                    <div className="flex items-center gap-2" key={index}>
                        {item.icon}
                        {item.title}
                    </div>

                ))}
            </nav>
        </div>
    </aside>

  )
}

export default DashboardSideBar