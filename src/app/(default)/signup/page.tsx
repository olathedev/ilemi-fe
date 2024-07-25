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
        <div className='container mx-auto md:px-10 px-6 h-screen'>
        <div className="md:py-8 py-6">
                <Link href="/">
                    <div className='w-1/2 flex items-center gap-2'>

                        <Image
                            src="/images/logo.svg"
                            width={30}
                            height={30}
                            alt="Picture of the author"
                        />

                        <h3 className='text-xl text-primary-100'>Auction.<span className='text-lg'>ng</span></h3>
                    </div>
                </Link>

            </div>

            <div className='h-full mt-20'>

            <div className="lg:-mt-24 mt-12 px-3 md:h-screen md:max-h-screen w-full md:flex flex-col items-center justify-center">
                <h2 className='text-xl font-semibold text-slate-800'>How would you like to Join <span className='text-primary-200'>Ilemi?</span></h2>
                <div className='md:border border-[#B1B7D6] md:px-10 py-6 w-full md:w-[30rem] my-4 rounded-xl'>
                    <div className="w-full flex flex-col gap-5">
                        <div>
                            <div className="flex items-center gap-4 my-3">
                                <span className='h-10 w-10 flex items-center justify-center text-white rounded-full bg-primary-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </span>
                                <h4 className='font-semibold'>Join as as onile (Landlord) </h4>
                            </div>

                            <p className='text-sm text-gray-600'>As a Onile(landlord), you can, manage your tenants, list spaces and earn on Auction. You can switch this account to access member benefits..</p>
                            <div className="mt-6">
                            <Link href="/create-account?account=onile">
                                <button className="py-3 px-6 border-2 border-primary-100 text-sm text-primary-100 rounded-3xl cursor-pointer">Continue as landlord</button>
                            </Link>
                            </div>
                        </div>

                    <div className="border-b"></div>

                        <div>
                            <div className="flex items-center gap-4 my-3">
                                <span className='h-10 w-10 flex items-center justify-center text-white rounded-full bg-[#00A45D]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>

                                </span>
                                <h4 className='font-semibold text-slate-700'>Join as a Tenant(Ayale-gbe)</h4>
                            </div>

                            <p className='text-sm text-gray-600'>With an ilemi Tenant Account, you can manage your tenancy flow (rent, complaints, funding campaigns).. and if youre not a tenant, you can view available homes/space. available for rent</p>

                            <div className="mt-6">
                                <button className="py-3 px-6 border-2 border-primary-100 text-sm text-primary-100 rounded-3xl">Continue as a tenant</button>
                            </div>
                        </div>

                       

                    </div>
                </div>

                <p className='text-sm'>Have an account? <Link href="/login" className='text-primary-100'>Sign In</Link></p>
            </div>
        </div>
        </div>
        
    )
}

export default page