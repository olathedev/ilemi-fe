'use client'
import { ImagePlus } from 'lucide-react'
import React, { useRef } from 'react'

type Props = {}

const Step3 = (props: Props) => {

    const imageInputRef = useRef<HTMLInputElement>(null)
    const handleClick = () => {
        imageInputRef.current?.click();
    }
  return (
    <div className='w-full grid grid-cols-4 min-h-[400px] py-6'>
        <div className='h-44 w-full border border-gray-400 rounded-lg flex flex-col items-center justify-center text-gray-600 cursor-pointer' onClick={handleClick}>
           <ImagePlus />
            <p className="text-sm mt-2 ">Upload Images</p>
            <input type="file" ref={imageInputRef} className='hidden' accept="image/*" />
        </div>
    </div>
  )
}

export default Step3