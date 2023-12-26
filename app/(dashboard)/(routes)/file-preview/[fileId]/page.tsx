'use client'

import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { app } from '@/firebaseConfig';
import { ArrowLeftSquare } from 'lucide-react';
import Link from 'next/link';
import FileInfo from '@/components/upload/FileInfo';
import FileShareForm from '@/components/upload/FileShareForm';

interface FilePreviewParamsInterface {
  params: any
}

const page = ({ params }: FilePreviewParamsInterface) => {
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
    <>
    {file ? (
      <div className='py-10 px-20'>
        <Link href='/upload' className='flex gap-3'>
          <ArrowLeftSquare />
          Go to Upload
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
          <FileInfo file={file} />
          <FileShareForm
            file={file}
            onPasswordSave={(password) => onPasswordSave(password)}
          />
        </div>
      </div>
    ) : null}
    </>
    
  )
}

export default page