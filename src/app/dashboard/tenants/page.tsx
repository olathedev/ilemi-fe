'use client'
import InviteTenantModal from '@/components/dashboard/tenant/InviteTenantModal'
import AppModal from '@/components/reusables/AppModal'
import AppTable from '@/components/reusables/AppTable'
import { Button } from '@/components/ui/button'
import { tenantInviteTableInfo, tenantTableInfo } from '@/data/constants'
import { mockTenants } from '@/data/mock.data'
import { useGetAllInvitesQuery, useGetAllTenatsQuery } from '@/hooks/useTenants'
import React, { useEffect, useState } from 'react'

type Props = {}

const page = (props: Props) => {
  const { data, error, isLoading } = useGetAllTenatsQuery()
  const {data: invites, isLoading: loadingInvites} = useGetAllInvitesQuery()
  
  console.log('tenants', data?.data?.tenants)
  const [modalOpen, setModalOpen] = useState(false)

  const tabs = ['Active tenants', 'Pending Invites']
  const [activeTab, setActiveTab] = useState('Active tenants')

  const switchTab = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className='h-screen bg-white rounded-3xl p-6 overflow-auto'>
      <header className='flex flex-col md:flex-row justify-between'>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Tenant Management</h3>
          <p className="text-sm text-gray-400 w-[80%]">Here's a list of all your tenats, active and pending you can as well add new tennats by sending a quick invite</p>
        </div>
        <div className=''>
          <Button size='xl' variant='secondary' className='h-[50px] px-6' onClick={() => setModalOpen(true)}>Add tenant</Button>
        </div>
      </header>

      <div className='mt-12 mb-6 flex gap-4 cursor-pointer'>
        {tabs.map((tab, index) => (
          <div className={`${activeTab === tab ? 'text-primary-700 font-semibold border-b-2 border-primary-700' : 'text-gray-400'}  px-1`} onClick={() => switchTab(tab)}>{tab}</div>

        ))}

      </div>


      <div className="w-full">
        {activeTab === 'Active tenants' && <AppTable tableInfo={tenantTableInfo} data={data?.data?.tenants} emptyState='You have not added any tenat, yet! start by adding one ' loading={isLoading} ></AppTable>}
        {activeTab === 'Pending Invites' && <AppTable tableInfo={tenantInviteTableInfo} data={invites?.data?.invites} emptyState='You have no pending invite, start by adding one ' loading={false} ></AppTable>}
      </div>

      <InviteTenantModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

    </div>
  )
}

export default page