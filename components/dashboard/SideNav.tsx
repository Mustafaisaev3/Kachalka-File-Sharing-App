'use client'

import React, { useState } from 'react'
import { Files, Shield, Upload } from 'lucide-react'
import Image from 'next/image'

const SideNav = () => {
    const [activeItemIndex, setActiveItemIndex] = useState<number>(0)
    const menuList = [
        {
          id: 1,
          name: 'Upload',
          icon: Upload,
          path: '/upload'
        },
        {
          id: 2,
          name: 'Files',
          icon: Files,
          path: '/files'
        },
        {
          id: 3,
          name: 'Upgrade',
          icon: Shield,
          path: '/upgrade'
        },
    ]
  return (
    <div className='shadow-sm border-r h-full'>
        <div className='p-5 border-b'>
            <div className='flex items-center gap-2'>
                <Image src='/logo3.png' alt='logo' width={50} height={80} className='object-cover' />
                <div className='text-primary font-semibold'>Качалка</div>
            </div>
        </div>
        <div className='w-full flex flex-col float-left'>
            {menuList.map((item, index) => {
                return (
                    <button 
                      className={`
                        flex gap-2 p-4 px-0 hover:bg-gray-100 w-full text-gray-500 px-5
                        ${activeItemIndex == index ? 'bg-blue-50 text-primary' : null}
                      `}
                      onClick={() => setActiveItemIndex(index)}
                    >
                        <item.icon />
                        <h2>{item.name}</h2>
                    </button>
                )
            })}
        </div>
    </div>
  )
}

export default SideNav