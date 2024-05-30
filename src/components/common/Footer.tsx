import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Footer({ }: Props) {
    return (
        <footer className='w-full bg-black px-16 py-20'>
            <div className='  flex items-center gap-32'>
                <div className='w-1/3'>
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

                    <p className='text-sm text-white mt-5'>
                       Our products help you to find an apartment and pay monthly, carry out due diligence and verify your tenants, request facility management for your property and apply for rental loans. How can we help you today?
                    </p>
                </div>

                <div className='grow grid grid-cols-3 gap-20 text-white'>
                    <ul className='flex flex-col gap-3 text-sm'>
                        <p className="font-semibold">WHY AUCTION</p>
                        <li>Buy Properties</li>
                        <li>List your property for free</li>
                        <li>Manage visit schedules</li>
                        <li>Support</li>



                    </ul>

                    <ul className='flex flex-col gap-3 text-sm'>
                        <p className="font-semibold">Company</p>
                        <li>About us</li>
                        <li>FAQs</li>
                        <li>Careers</li>
                        <li>Support</li>


                    </ul>


                    <ul className='flex flex-col gap-3 text-sm'>
                        <p className="font-semibold">Get In touch</p>
                        <li>info@auction</li>
                        <li>+234 8126325584</li>
                        <li>103, Jos PLATEAU STATE NIGERIA</li>



                    </ul>
                </div>

            </div>

            <div className="border-b my-8">

            </div>


            <div className='flex justify-between text-white'>
                <p className="text-sm">&copy; oladev 2024</p>

                <div className='flex gap-6'>
                <p className="text-sm">Terms of service</p>

                <p className="text-sm">privacy Policy</p>

                </div>
            </div>
        </footer>
    )
}

export default Footer