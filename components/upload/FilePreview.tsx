import React from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface FilePreviewInterface {
    file: any
    removeFile: () => any
}

const FilePreview: React.FC<FilePreviewInterface> = ({ file, removeFile }) => {
  const fileSize = (file.size / 1024 / 1024).toFixed(2)

  return (
    <div className='flex items-center  justify-between gap-2 mt-5 p-2 border rounded-md border-blue-200'>
        <div className='flex items-center p-2'>
            <Image src='/file-png.png' width={50} height={50} alt='file-image' />
            <div className='text-left'>
                <h2>{file.name}</h2>
                <h2 className='text-[12px] text-gray-400'>{file.type} - {fileSize} MB</h2>
            </div>
        </div>
        <X className='text-red-500 cursor-pointer' onClick={removeFile}/>
    </div>
  )
}

export default FilePreview