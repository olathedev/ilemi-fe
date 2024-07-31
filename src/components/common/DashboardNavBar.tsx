import { PlusCircle } from 'lucide-react'
import React from 'react'

type Props = {}

const DashboardNavBar = (props: Props) => {
  return (
    <nav className='py-6 px-8 bg-white flex items-center justify-between shadow-sm'> 
        <div className=''>
            <h3 className='font-semibold text-primary-700'>Onile's Dashboard</h3>
        </div>

        <div className='flex'>
            <span className="bg-primary-100 py-2 px-4 rounded text-primary text-sm flex gap-2 items-center">Add new property <PlusCircle size={17} /> </span>
        </div>
    </nav>
  )
}

export default DashboardNavBar