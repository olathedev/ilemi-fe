import Image from 'next/image'
import React from 'react'
import house from '@/house2.jpg'
import { properties } from '@/data/mockProperties'

const Properties = () => {
    return (
        <div className='w-full max-w-full px-16 py-8'>
            <div className="grid grid-cols-3 gap-x-4 gap-y-10">
                


                {properties?.map((property, id) => (
                    <div className='bg-white h-[400px] max-h-[380px] rounded-xl px-2.5 pt-2'>
                    <div className="h-[200px] max-h-[200px]">
                        {/* <Image
                            src="/images/house2.jpg"
                            width={0}
                            height={0}
                            alt="Picture of the author"
                            style={{
                                height: '100%',
                                width: '100%',  
                                
                            }}
                        /> */}

                        <img src={property.image} alt="" className='h-full w-full object-cover rounded-t-xl'  />

                        <div className="w-full flex justify-between p-4">
                                <div className='flex flex-col gap-4'>
                                    <h2 className='text-lg font-bold'>{property.title}</h2>

                                    <div className="text-sm text-[#4B4F63]">
                                        <span>1 bedroom</span> <span>.</span> <span>Bungalow</span>
                                    </div>

                                </div>

                                
                                <div>


                                </div>

                        </div>

                        <div className="w-full border-b-2 px-3 "></div>
                        
                        <div className='p-3'>
                            <p className='text-sm'> from <span className="text-base font-semibold">NGN 1,416,123</span> </p>
                        </div>
                    </div>
                </div>
                ))}
                



              
            </div>
        </div>
    )
}

export default Properties