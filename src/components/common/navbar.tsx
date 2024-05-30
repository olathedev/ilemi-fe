'use client'
import Image from 'next/image'
import React from 'react'
import RoundedButton from '../reusables/RoundedButton'
import Link from 'next/link'

type Props = {}

function Navbar({ }: Props) {
    return (
        <nav className='w-full bg-black px-20 py-6 text-white sticky top-0'>

            <div className="w-full flex items-center justify-between">

                {/* Navbar Brand */}

                <Link href="/">
                    <div className='w-1/2 flex items-center gap-2'>

                        <Image
                            src="/images/logo.svg"
                            width={30}
                            height={30}
                            alt="Picture of the author"
                        />

                        <h3 className='text-2xl text-white'>Auction.<span className='text-xl'>ng</span></h3>
                    </div>
                </Link>

                {/* Navbrand ends */}

                {/*  */}

                <div className='w-1/2 flex justify-between'>
                    <div className='flex gap-10 items-center'>
                        <div className='flex gap-2 items-center'>
                            <p className='text-sm'>For Buyers</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>

                            </span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className='text-sm'>For Buyers</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>

                            </span>
                        </div>

                        <div>

                        </div>
                    </div>

                    {/* buttons */}
                    <div className='flex gap-6 items-center'>
                        <p className='cursor-pointer text-sm'>Login</p>
                       <Link href="/signup"><RoundedButton variant='primary'>Create Account</RoundedButton></Link> 

                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/ng.svg"
                                width={25}
                                height={20}
                                alt="Picture of the author"
                            />

                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </span>

                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar