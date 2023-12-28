import React, { ReactNode } from 'react'
import SideNav from '@/components/dashboard/SideNav'
import TopHeader from '@/components/dashboard/TopHeader'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div className='w-full h-screen'>
        <div className='md:w-64 h-full flex-col fixed inset-y-0 z-50 md:flex hidden'>
            <SideNav />
        </div>
        <div className='md:ml-64 h-screen'>
            <TopHeader />
            {children}
        </div>
    </div>
  )
}

export default layout