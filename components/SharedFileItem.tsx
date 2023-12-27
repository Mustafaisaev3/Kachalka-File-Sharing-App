'use client'

import { Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

const SharedFileItem = ({file}: any) => {
  const [password, setPassword] = useState<string>()
  const downloadRef = useRef<HTMLAnchorElement>(null)

  const onDownloadClick = () => {
    downloadRef.current && downloadRef.current.click()
  }

  return (
    <>
        {file ? (
            <div>
                <div className='p-5 rounded-md bg-white flex flex-col items-center'>
                    <div className='text-center flex flex-col items-center gap-3 '>
                        <h2 className='text-[20px] text-gray-600'>
                            <strong className='text-primary'>{file.userName} </strong>
                            поделился файлом с Вами
                        </h2>
                        <Image 
                        src='/download2.gif'
                        width={150}
                        height={150}
                        className='w-[150px] h-[150px] p-5'
                        alt='download-gif'
                        />
                        <h2 className='text-gray-500 text-[15px]'>{file.fileName} ⚡ {file.fileType} ⚡ {Number(file.fileSize / 1024 / 1024).toFixed(2)}MB</h2>
                    </div>

                    {file.password.length > 3 ? (
                        <input 
                        type="password" 
                        className='p-2 border rounded-md text-[14px] mt-5 text-center outline-blue-400'
                        placeholder='Enter password to access'
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    ) :  null}
        
                    <button
                        className='flex gap-2 p-2 bg-primary text-white rounded-full w-full items-center hover:bg-blue-600 text-[14px] mt-5 text-center justify-center disabled:bg-gray-300'
                        disabled={file.password == password}
                        onClick={onDownloadClick}
                    >   
                        <Download className='h-4 w-4' /> Скачать
                        <Link ref={downloadRef} href={file.fileUrl} target="_blank" download='file' className='hidden'></Link>
                    </button>
                </div>
            </div>
        ) : null}
    </>
    
  )
}

export default SharedFileItem