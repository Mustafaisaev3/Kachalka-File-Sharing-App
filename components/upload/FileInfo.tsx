import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const FileInfo = ({ file }: any) => {
  const [fileType, setFileType] = useState(file?.fileType.split('/')[0])

  useEffect(() => {
    setFileType(file?.fileType.split('/')[0])
  }, [file])

  return (
    <div className='text-center border flex items-center justify-center m-4 flex-col p-2 rounded-md border-blue-200'>
        <Image 
          src={fileType == 'image' ? file.fileUrl : '/file-png.png'} 
          width={200}
          height={200}
          className='h-[200] rounded-md object-contain'
          alt='file'
        />
        <div className=''>
            <h2>{file.fileName}</h2>
            <h2 className='text-gray-400 text-[13px]'>{file.fileType}</h2>
        </div>
    </div>
  )
}

export default FileInfo