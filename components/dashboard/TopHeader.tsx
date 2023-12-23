import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const TopHeader = () => {
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end'>
        <AlignJustify className='md:hidden'/>
        <Image src='/logo3.png' alt='logo' width={50} height={80} className='object-cover md:hidden' />
        <UserButton />
    </div>
  )
}

export default TopHeader