import React from 'react'

type Props = {}

const Step1 = (props: Props) => {
    return (

        <div className='flex items-center gap-8 '>
         <div className="relative flex w-[40%] ">
                    <div className="h-[25rem] w-full border  bg-black rounded-2xl"></div>
                    {/* <Image src={house} alt='' height={300} width={400} className='absolute rounded-2xl' /> */}
                </div>

                <div className='w-[60%]'>

        <div className="w-full">
            <h2 className='font-semibold text-lg'>General information on your property</h2>
            <p>Here, you'll provide details on your property, most fields here is required.</p>
            <form action="" className='w-full flex flex-col gap-3 pt-4'>
                <input type="text" className='w-full py-2.5 px-4 border border-gray-300 rounded-md placeholder:text-sm' placeholder='Property name' />
                <input type="text" className='w-full py-2.5 px-4 border  border-gray-300 rounded-md placeholder:text-sm' placeholder='Enter Country address' />
                <input type="text" className='w-full py-2.5 px-4 border  border-gray-300 rounded-md placeholder:text-sm' placeholder='Enter State' />
                <input type="text" className='w-full py-2.5 px-4 border border-gray-300 rounded-md placeholder:text-sm' placeholder='Enter city' />
                <textarea name="" className='w-full py-2.5 px-4 border border-gray-300 rounded-md placeholder:text-sm' placeholder='Add a short description of your property' id=""></textarea>
            </form>
        </div>
        </div>
        </div>

    )
}

export default Step1