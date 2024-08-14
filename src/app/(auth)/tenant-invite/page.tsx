'use client'
import { Button } from '@/components/ui/button'
import { useAcceptInviteMutation } from '@/hooks/useTenants'
import { ITenantAcceptInvite } from '@/interfaces/tenant.interface'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

type Props = {}

const AcceptInvite = (props: Props) => {
    const searchParams  = useSearchParams()

    const { mutate } = useAcceptInviteMutation()

    const email = searchParams.get('email')
    const inviteToken = searchParams.get('inviteToken')

    const [password, setPassword] = useState('')

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const data = {email, inviteToken, password}
        console.log(data)
        if(!email || !inviteToken || !password) {
            toast.error("This request requires a valid invite link and password, makesure it's all accurate")
            return;
        }

        mutate(data)
    }

    return (
        <div className="border-gray-300 md:p-5 rounded-2xl">
            <h1 className="text-xl font-semibold text-slate-800 ">Hi tenat, <span className=''>Create your password</span></h1>
            <p className='text-base text-gray-600'>Create your profile password, so you can access your tenant dashboard</p>

            <form className='mt-6 flex flex-col gap-3' onSubmit={onSubmit}>
                <input type="password" className="p-3 border rounded-lg" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <input type="password" className="p-3 border rounded-lg" placeholder='Confirm Password' />
                <Button size='lg'>Continue</Button>
            </form>
        </div>

    )
}

export default AcceptInvite