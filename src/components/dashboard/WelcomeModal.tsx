import Image from 'next/image'
import React from 'react'
import welcomeImg from "@/assets/leadsimg.png"
import { X } from 'lucide-react'
import { motion } from 'framer-motion'
type Props = {
    user: any,
    modalOpen: boolean;
    closeWelcomeModal: () => void;
}

const WelcomeModal = ({ user, closeWelcomeModal, modalOpen }: Props) => {
    return (
        
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-20 bg-black"
            />
            <div className="fixed inset-0 z-40 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 15, stiffness: 300 }}
                    className="relative w-auto max-w-[55%] mx-auto my-6">

                    <div className="relative flex w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                        <div className="w-1/2">
                            <Image
                                src={welcomeImg}
                                alt='welcome img'
                                height={1000}
                                className='rounded-l-lg'
                            />
                        </div>

                        <div className="flex-1 flex-col p-5 text-gray-800">
                            <div className="flex justify-end">
                                <span className='bg-gray-300 py-3 px-3 rounded-full cursor-pointer' onClick={closeWelcomeModal}>
                                    <X size={17} />
                                </span>
                            </div>
                            <header className='my-4 text-lg font-semibold'>
                                Hi, <span className='text-primary-700'> {user?.firstname}! </span>Welcome to seamless Tenant management

                                <p className='mt-1 text-base font-normal'> Here are exiciting features we have running</p>
                            </header>

                            <hr />

                            <ul className="mt-6 list-disc list-inside space-y-4">
                                <li><span className='text-primary-700'> Dashboard Overview: </span> Get a quick snapshot of your properties and tenants</li>
                                <li><span className='text-primary-700'>Tenant Profiles:</span> Easily manage and access tenant information</li>
                                <li><span className='text-primary-700'>Rent Tracking:</span> Keep track of rent payments and due dates</li>
                                <li><span className='text-primary-700'>Maintenance Requests:</span> Handle and monitor property maintenance efficiently</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default WelcomeModal