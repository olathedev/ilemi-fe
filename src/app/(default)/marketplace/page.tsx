import LocationIcon from '@/components/common/icons/LocationIcon'
import Properties from '@/components/marketplace/Properties'
import RoundedButton from '@/components/reusables/RoundedButton'
import Default from '@/layouts/Default'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <Default>


            <header className='bg-black px-20 py-14'>


                <div className='flex flex-col gap-3'>
                    <h3 className='text-[#07A560] text-sm'>EXPOLORE AUCTION</h3>
                    <h1 className='text-white text-3xl font-semibold'>Available Properties</h1>

                    <div className="filters grid grid-cols-4 items-center gap-6 mt-6">
                        <div className='bg-[#1F1F1F] h-[74px] border border-solid border-[#454545] p-3 rounded-xl'>
                            <label className='text-[#7C7E8B] text-xs block'>Location</label>

                            <div className="flex items-center py-1.5">
                                <input type="text" className='bg-transparent text-[15px] focus:outline-none text-[#7C7E8B]' placeholder='Where are looking for a home' />


                            </div>
                        </div>


                        <div className='bg-[#1F1F1F] h-[74px] border border-solid border-[#454545] p-3 rounded-xl'>
                            <label className='text-[#7C7E8B] text-xs block'>TYPE OF PROERTY</label>

                            <div className="flex justify-between items-center py-1.5 text-[#7C7E8B]">
                                <input type="text" className='bg-transparent text-[15px] focus:outline-none text-[#7C7E8B]' placeholder='Select type of property' />

                                <span className='px-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>

                                </span>

                            </div>
                        </div>

                        <div className='bg-[#1F1F1F] h-[74px] border border-solid border-[#454545] p-3 rounded-xl'>
                            <label className='text-[#7C7E8B] text-xs block'>PRICE RANGE</label>

                            <div className="flex justify-between items-center py-1.5 text-[#7C7E8B]">
                                <input type="text" className='bg-transparent text-[15px] focus:outline-none text-[#7C7E8B]' placeholder='Choose price range' />

                                <span className='px-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>

                                </span>

                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <p className='text-[#DB4335] cursor-pointer underline'>Clear Filters</p>
                            <button className='py-2 px-6 bg-white rounded-3xl text-sm text-primary-100 font-semibold'>Apply Filters</button>
                        </div>

                    </div>
                </div>


            </header>

            
            <section className='bg-[#F4F4F4]'>
                        <Properties />
                </section>
        </Default>
    )
}

export default page