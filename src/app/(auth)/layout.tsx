import AppBack from '@/components/common/AppBack'
import React from 'react'

type Props = {
    children: React.ReactNode

}

function layout({ children }: Props) {
    return (
        <div className='w-full h-screen flex items-center justify-center p-4'>
            <div className='w-full md:w-[35%]'>
                <AppBack />

                {children}
            </div>
        </div>
    )
}

export default layout