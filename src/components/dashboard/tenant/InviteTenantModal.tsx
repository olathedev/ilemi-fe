'use client'
import AppModal from '@/components/reusables/AppModal'
import { Button } from '@/components/ui/button'
import { useSendTenantInviteMutation } from '@/hooks/useTenants'
import React, { useState } from 'react'
import { toast } from 'sonner'

type Props = {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const InviteTenantModal = ({ modalOpen, setModalOpen }: Props) => {
    const { mutate, isPending } = useSendTenantInviteMutation()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(!firstName || !lastName || !email || !phoneNumber) {
            toast.error("All fields are required to send an invite")
            return
        }
        const reqBody = {
            firstName, lastName, email, phoneNumber
        }
        mutate(reqBody)
        setModalOpen(false)
    }

    return (
        <AppModal isOpen={modalOpen} setIsOpen={setModalOpen} className='bg-white w-[500px] p-6'>
            <header className=''>
                <h3 className="text-lg font-semibold">Send Invite to tenant</h3>
                <p className='text-gray-600'>Add a new tenant by sending personal invites to them.</p>
            </header>

            <form className='flex flex-col gap-3 mt-4' onSubmit={onSubmit}>
                <div className='w-full'>
                    <label className='text-sm font-[500] text-gray-700 pb-2'>FirstName</label>
                    <input type="text" className='w-full border rounded-md p-3 placeholder:text-sm text-[15px]' placeholder='Enter firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>

                <div className='w-full'>
                    <label className='text-sm font-[500] text-gray-700 pb-2'>LastName</label>
                    <input type="text" className='w-full border rounded-md p-3 placeholder:text-sm text-[15px]' placeholder='Enter Lastname' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className='w-full'>
                    <label className='text-sm font-[500] text-gray-700 pb-2'>Email</label>
                    <input type="text" className='w-full border rounded-md p-3 placeholder:text-sm text-[15px]' placeholder='olalouwa@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='w-full'>
                    <label className='text-sm font-[500] text-gray-700 pb-2'>PhoneNumber</label>
                    <input type="text" className='w-full border rounded-md p-3 placeholder:text-sm text-[15px]' placeholder='08126325584' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>

                <Button size='lg' variant='secondary' disabled={isPending}> {!isPending ? 'Send Invite' : 'loading...'}</Button>
            </form>
        </AppModal>
    )
}

export default InviteTenantModal