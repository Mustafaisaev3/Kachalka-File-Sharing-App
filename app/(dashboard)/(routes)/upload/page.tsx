'use client'

import React, { useState } from 'react'
import UploadForm from '@/components/upload/UploadForm'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '@/firebaseConfig'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { useUser } from '@clerk/nextjs'
import { generateRandomString } from '@/utils/generate-random-string'

const page = () => {
  const { user } = useUser()
  const storage = getStorage(app)
  const [progress, setProgress] = useState<number>(0)
  const db = getFirestore(app)

  const uploadFile = (file: any) => {
    const metadata = {
      contentType: file.type
    }
    const storageRef = ref(storage, `file-upload/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file, file.type)
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Upload is ' + progress + '% done')
      setProgress(progress)
      progress == 100 && getDownloadURL(uploadTask.snapshot.ref).then((fileURL) => {
        console.log('File available at', fileURL)
        saveInfo(file, fileURL)
      })
    },)
  }

  const saveInfo = async (file: any, fileUrl: any) => {
    await setDoc(doc(db, 'uploaded-file', generateRandomString()), {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      password: '',
      id: generateRandomString(),
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL+generateRandomString()
    })
  }

  return (
    <div className='p-5 px-8 md:px:28 flex flex-col items-center'>
      <h2 className='text-[25px] text-center p-5'>
        <strong className='text-primary'>Загрузите</strong> Файл и <strong className='text-primary'>Поделитесь</strong> им
      </h2>
      <UploadForm handleUploadBtnClick={(file) => uploadFile(file)} progress={progress} />
    </div>
  )
}

export default page