import UploadForm from '@/components/upload/UploadForm'
import React from 'react'

const page = () => {
  return (
    <div className='p-5 px-8 md:px:28'>
      <h2 className='text-[25px] text-center p-5'>
        <strong className='text-primary'>Загрузите</strong> Файл и <strong className='text-primary'>Поделитесь</strong> им
      </h2>
      <UploadForm />
    </div>
  )
}

export default page