'use client'
import React from 'react'
type Props = {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AppModal = ({ children, className, isOpen, setIsOpen }: Props) => {
    return (
        isOpen && (
            <>
            <div
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                className={`fixed inset-0 bg-black bg-opacity-50 flex px-4 w-full items-center justify-center z-30 h-screen max-h-screen`}
            >
                <div
                    // initial={{ scale: 0.8, opacity: 0 }}
                    // animate={{ scale: 1, opacity: 1 }}
                    // exit={{ scale: 0.8, opacity: 0 }}
                    className={`${className} relative rounded-2xl shadow-xl h-auto max-h-[95%] overflow-auto`}
                >
                    <span className='absolute top-4 right-4 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>


                    </span>

                    {children}
                </div>
            </div>
        </>
        )
       
    )
}

export default AppModal