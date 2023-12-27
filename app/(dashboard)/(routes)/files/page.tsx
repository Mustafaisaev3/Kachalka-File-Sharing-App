'use client'

import React, { useEffect, useState } from 'react'
import { app } from '@/firebaseConfig'
import { getStorage, ref, listAll } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
const Files = () => {
  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState<any>(null)

  const storage = getStorage(app)
  const db = getFirestore(app)

  const getFiles = async () => {
    const snapshot = await getDocs(collection(db, "uploaded-file"))
    const filesArr = []
    snapshot.docs.map((doc) => {
      filesArr.push(doc.data())
      console.log(doc.data())
    })

    setFiles(filesArr)
  }

  useEffect(() => {
    getFiles()
  },[])

  if (!files) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className='w-full h-auto'>
      {files.map(file => {
        return (
          <div className='text-black'>{file.fileName}</div>
        )
      })}
    </div>
  )
}

export default Files