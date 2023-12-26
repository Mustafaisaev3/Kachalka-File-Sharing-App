'use client'

import { app } from '@/firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

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

  return (
    <div>File Preview</div>
  )
}

export default page