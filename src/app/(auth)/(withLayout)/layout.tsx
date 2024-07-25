import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export const metadata: Metadata = {
    title: {
        default: "Auction | Buy, Sell landed properties",
        template: "%s | Auction"
    }
}

function AuthLayout({children}: {
    children: React.ReactNode
}) {
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
            {children}

            </div>

    </div>
  )
}

export default AuthLayout