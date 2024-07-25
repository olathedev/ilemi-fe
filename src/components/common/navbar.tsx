'use client'
import Image from 'next/image'
import React from 'react'
import RoundedButton from '../reusables/RoundedButton'
import Link from 'next/link'
import { Inter, Montserrat } from 'next/font/google'

type Props = {}

const monts = Inter({subsets: ['latin']})

function Navbar({ }: Props) {
    return (
        <nav className={`${monts.className} w-full px-20 py-8 sticky top-0`}>

            <div className="w-full flex items-center justify-between">

                {/* Navbar Brand */}

                    <div className='w-[40%]'>
                    <Link href="/" className="flex items-center gap-2">

                        <Image
                            src="/images/logo.svg"
                            width={30}
                            height={30}
                            alt="Picture of the author"
                        />

                        <h3 className='text-xl'>Ilemi.<span className='text-xl'>ng</span></h3>
                </Link>

                    </div>

                {/* Navbrand ends */}

                {/*  */}

                <div className='grow flex justify-end space-x-6'>
                    <div className='flex gap-10 items-center'>
                        <div className='flex gap-2 items-center'>
                            <p className=''>For Buyers</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>

                            </span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className=''>For Buyers</p>
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
                        <p className='cursor-pointer'>Login</p>
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