'use client'

import React, { useState } from 'react'
import AlertMessage from './AlertMessage'
import FilePreview from './FilePreview'

interface UploadFormInterface {
  handleUploadBtnClick: (file: any) => any
}

const UploadForm: React.FC<UploadFormInterface> = ({ handleUploadBtnClick }) => {
  const [file, setFile] = useState<any>()
  const [error, setError] = useState<string | null>()

  const onFileSelect = (file: any) => {
    if (file && file.size > 2000000) {
      setError('Maximum File upload size is 2MB')
      return
    }
    setError(null)
    setFile(file)
  }

  return (
    <div className='text-center'>
      <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-bray-800 hover:bg-blue-100 dark:border-blue-600 dark:hover:border-blue-500 dark:hover:bg-gray-1">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-12 h-12 mb-4 text-blue-500 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-base md:text-xl text-gray-800 dark:text-gray-400"><strong className='text-primary'>Нажмите</strong><span className="font-semibold">, чтобы загрузить</span> или <strong className='text-primary'>перетащите</strong> файл</p>
                <p className="text-xs text-gray-800 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX size - 2MB)</p>
            </div>
            <input 
              id="dropzone-file" 
              type="file" 
              className="hidden" 
              onChange={(e) =>onFileSelect(e.target.files![0])}
            />
        </label>
      </div> 
      {error ? <AlertMessage message={error} /> : null}
      {file ? <FilePreview file={file} removeFile={() => setFile(null)}/> : null}
      <button 
        className='p-2 bg-primary text-white w-[30%] rounded-full mt-5 disabled:bg-gray-400 cursor-pointer' 
        disabled={!file}
        onClick={() => handleUploadBtnClick(file)}
      >
        Загрузить
      </button>
    </div>
  )
}

export default UploadForm