'use client'
import React, { useState } from 'react'
import AppModal from '../../reusables/AppModal'
import house from '@/assets/house.jpg'
import Image from 'next/image'
import { Button } from '../../ui/button'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
type Props = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddPropertyModal = ({isOpen, setIsOpen}: Props) => {
   
    const [currentStep, setCurrentStep] =  useState(0)

    const steps=['General info', 'Financial Info', 'Image upload']
    const handleNextStep = () => {if(currentStep < steps.length - 1) setCurrentStep(currentStep + 1)}
    const handlePreviousStep = () =>  {if(currentStep > 0) setCurrentStep(currentStep - 1)}
    
    return (
        <AppModal isOpen={isOpen} setIsOpen={setIsOpen} className='w-[60%]  bg-white flex flex-col gap-8 items-center py-8 px-6 min-h-[90%]'>

            <div className="w-full flex justify-between">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col gap-2 items-center relative flex-1">
                        <div className={`h-9 w-9     
                            ${index <= currentStep ? 'bg-primary-700 text-white ' : 'bg-gray-200'}  rounded-full flex items-center justify-center`}>{index + 1}</div>
                        <div className={`${index <= currentStep ? 'text-primary-700' : 'text-gray-500'} text-sm `}>{step}</div>
                    </div>
                ))}
            </div>

            <div className='w-full px-6 h-full'>

               

                {currentStep === 0 && <Step1 />}
                {currentStep === 1 && <Step2 />}
                {currentStep === 2 && <Step3 />}

     

            </div>

            <div className="w-full flex gap-4 justify-end px-8">
                {currentStep > 0 && <Button className='py-4 bg-gray-300 border-0' variant='outline' size='xl' onClick={handlePreviousStep}>Back</Button>}
                
                <Button className='py-4' size='xl' onClick={handleNextStep}>Proceed</Button>
            </div>

        </AppModal>
    )
}

export default AddPropertyModal