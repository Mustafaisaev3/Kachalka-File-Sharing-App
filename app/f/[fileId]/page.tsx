'use client'

import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { app } from '@/firebaseConfig';
import SharedFileItem from '@/components/SharedFileItem';
import Link from 'next/link';
import Image from 'next/image';

const page = ({ params }: any) => {
    const db = getFirestore(app);
    const [file, setFile] = useState<any>()
  
    const getFileInfo = async () => {
      const docRef = doc(db, 'uploaded-file', params?.fileId)
      const docSnap = await getDoc(docRef)
  
      if(docSnap.exists()) {
        setFile(docSnap.data())
      } else {
        console.log('No such document!')
      }
    }
  
    useEffect(() => {
      getFileInfo()
    }, [])
  
    const onPasswordSave = async (password: any) => {
      const docRef = doc(db, 'uploaded-file', params?.fileId)
      await updateDoc(docRef, {
        password
      })
    }

  return (
    <div className='bg-gray-100 h-screen w-full flex justify-center items-center flex-col gap-4'>
        
        <Link href={''}>
            <Image src={'/logo2.png'} width={150} height={150} alt='logo'/>
        </Link>
        <SharedFileItem file={file} />
    </div>
  )
}

export default page