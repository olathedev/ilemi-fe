'use client'
import { ChevronDown, PlusCircle } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import NotificationBell from './icons/NotificationBell'

type Props = {
    user: string,
    logout: () => void
}

const DashboardNavBar = ({ user, logout }: Props) => {
    const [isOpen, setOpen] = useState(false)

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <nav className='sticky top-0 py-5 px-8 bg-white flex  items-center justify-between'>
            <div className=''>
                <h3 className='font-semibold'>Onile's Dashboard</h3>
            </div>

            <div className='flex items-center space-x-6'>
                <span className="bg-primary-100 py-2 px-4 rounded text-primary text-sm flex gap-2 items-center">Add new property <PlusCircle size={17} /> </span>

                <div>
                    <NotificationBell />
                </div>

                <div className='relative flex items-center gap-2 cursor-pointer' ref={dropdownRef}>
                    <span className="py-5 px-5 bg-gray-100 rounded-full"></span>
                    <span className='text-[15px] inline-flex items-center gap-1' onClick={() => setOpen(!isOpen)}>{user} <ChevronDown size={15} /> </span>

                    {isOpen && (
                        <div className="absolute flex bg-white border right-0 top-[66px] w-full rounded shadow-sm p-4  flex-col text-sm space-y-2 text-gray-500 ">
                            <span className='hover:text-primary'>Profile</span>
                            <span className='hover:text-primary'>Settings</span>
                            <span className='hover:text-primary'>Terms of use</span>
                            <span className='py-2 w-full bg-primary text-white text-sm text-center rounded-md' onClick={logout}>logout</span>
                        </div>
                    )}

                </div>
            </div>
        </nav>
    )
}

export default DashboardNavBar