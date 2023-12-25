'use client'

import React from 'react'
import UploadForm from '@/components/upload/UploadForm'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '@/firebaseConfig'

const page = () => {
  const storage = getStorage(app)

  const uploadFile = (file: any) => {
    const metadata = {
      contentType: file.type
    }
    const storageRef = ref(storage, `file-upload/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file, file.type)
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Upload is ' + progress + '% done')

      progress == 100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL)
      })
    },)
  }
  return (
    <div className='p-5 px-8 md:px:28'>
      <h2 className='text-[25px] text-center p-5'>
        <strong className='text-primary'>Загрузите</strong> Файл и <strong className='text-primary'>Поделитесь</strong> им
      </h2>
      <UploadForm handleUploadBtnClick={(file) => uploadFile(file)} />
    </div>
  )
}

export default page