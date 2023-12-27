'use client'

import React, { useState, useEffect } from 'react'
import UploadForm from '@/components/upload/UploadForm'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '@/firebaseConfig'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { useUser } from '@clerk/nextjs'
import { generateRandomString } from '@/utils/generate-random-string'
import { useRouter } from 'next/navigation'

const page = () => {
  const { user } = useUser()
  const [progress, setProgress] = useState<number>(0)
  const [fileDocId, setFileDocId] = useState<string | null>(null)
  const [showSuccessUpload, setShowSuccessUpload] = useState<boolean>(true)
  const storage = getStorage(app)
  const router = useRouter()
  const db = getFirestore(app)

  const uploadFile = async (file: any) => {
    const storageRef = ref(storage, `file-upload/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file, file.type)
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      setProgress(progress)
      
      if (progress == 100) {
        getDownloadURL(uploadTask.snapshot.ref).then(async (fileURL) => {
          console.log('File available at', fileURL)
          await saveInfo(file, fileURL)

          setShowSuccessUpload(true)
          setTimeout(() => {
            setShowSuccessUpload(false)
            router.push(`/file-preview/${fileDocId}`)
          }, 2000)
        })
      } 
    },)
  }

  const saveInfo = async (file: any, fileUrl: any) => {
    const docId = generateRandomString()
    setFileDocId(docId)
    await setDoc(doc(db, 'uploaded-file', generateRandomString()), {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      password: '',
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL+generateRandomString()
    })
  }

  return (
    <div className='p-5 px-8 md:px:28 flex flex-col items-center'>
      {showSuccessUpload ? (
        <div>
          <h2 className='text-[25px] text-center p-5'>
            <strong className='text-primary'>Загрузите</strong> Файл и <strong className='text-primary'>Поделитесь</strong> им
          </h2>
          <UploadForm handleUploadBtnClick={(file) => uploadFile(file)} progress={progress} />
        </div>
      ) : (
        <div className='text-center w-full text-[30px]'>Файл удачно загружен</div>
      )}
    </div>
  )
}

export default page