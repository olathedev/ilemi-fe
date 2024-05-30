import { Metadata } from 'next';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export const metadata: Metadata = {
    title: "Create an account",
  };


function page({ }: Props) {
    return (
        <div className=''>
          

            <div className="lg:-mt-14 h-screen max-h-screen w-full flex flex-col items-center justify-center">
                <h2 className='text-xl font-semibold text-slate-800'>How would you like to Join Auction?</h2>
                <div className='md:border border-[#B1B7D6] px-10 py-6 w-[30rem] my-4 rounded-xl'>
                    <div className="w-full flex flex-col gap-5">

                        <div>
                            <div className="flex items-center gap-4 my-3">
                                <span className='h-10 w-10 flex items-center justify-center text-white rounded-full bg-[#00A45D]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>

                                </span>
                                <h4 className='font-semibold text-slate-700'>Join as a member</h4>
                            </div>

                            <p className='text-sm text-gray-600'>With an Auction Buyer Account, you can view and subscribe to properties listed on Auction. You can switch this account to access host benefits.</p>

                            <div className="mt-6">
                                <button className="py-3 px-6 border-2 border-primary-100 text-sm text-primary-100 rounded-3xl">Continue as a member</button>
                            </div>
                        </div>

                        <div className="border-b"></div>
                        <div>
                            <div className="flex items-center gap-4 my-3">
                                <span className='h-10 w-10 flex items-center justify-center text-white rounded-full bg-primary-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>

                                </span>
                                <h4 className='font-semibold'>Join as a Host</h4>
                            </div>

                            <p className='text-sm text-gray-600'>As a Auction Seller, you can list spaces and earn on Auction. You can switch this account to access member benefits..</p>

                            <div className="mt-6">
                                <button className="py-3 px-6 border-2 border-primary-100 text-sm text-primary-100 rounded-3xl">Continue as a seller</button>
                            </div>
                        </div>

                    </div>
                </div>

                <p className='text-sm'>Have an account? <Link href="/login" className='text-primary-100'>Sign In</Link></p>
            </div>
        </div>
    )
}

export default page