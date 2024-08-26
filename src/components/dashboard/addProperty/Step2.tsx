import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import paymentImg from '@/assets/payment.svg'

type Props = {}

const Step2 = (props: Props) => {
    return (
        <div className='mt-10 w-full flex min-h-[300px] py-6'>
            <div className='w-[45%] pt-8'>
                <Image src={paymentImg} alt='' height={300} width={260} />
            </div>

            <div className="w-[55%]">
                <h2 className='font-semibold text-lg'>Pricing information on your property</h2>
                <p className='text-gray-500'>Here, you'll provide a general Rent/pricing details, for your property. you can still provide pricing for individual units later</p>
                <form action="" className='w-full flex flex-col gap-4 py-6'>
                    <div className="w-full relative">
                        <label className="text-sm font-[500]">Rent Duration</label>
                        <select name="" id="" className='w-full py-2.5 px-4 border border-gray-300 rounded-md appearance-none text-sm placeholder:text-sm'>
                            <option value="">Daily</option>
                            <option value="">Weekly</option>
                            <option value="">Monthly</option>
                            <option value="">Yearly</option>
                            <option value="">One time Pay</option>
                        </select>
                        <span className='absolute right-3 top-9'>
                            <ChevronDown size={18} />
                        </span>
                    </div>

                    <div className='w-full'>
                        <label className="text-sm font-[500]">Rent Rate</label>
                        <input type="number" className='w-full py-3 px-4 border border-gray-300 rounded-md appearance-none placeholder:text-sm' placeholder='' />

                    </div>


                </form>
            </div>
        </div>
    )
}

export default Step2