import EBookForm from '@/components/EBookForm'
import Image from 'next/image'
import React from 'react'

const page = () => {

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col container max-w-[1000px] items-start justify-center flex-wrap px-3 md:px-10 text-textcolor'>
        <div className='flex flex-col '>
          <p className='mt-5 text-[20px] '> Fill in your information below for access to the Endeavour Technology eBook: </p>
          <p className='mt-5 text-[20px] font-[500]'> How to own the in-car digital experience: A guide for automotive OEMs </p>
        </div>

        <EBookForm />

        <div className='flex flex-col w-full'>
          <Image src="/nspireauto-digital-exp.jpg" width={1000} height={1000} alt='Endeavour nSpire Auto' className='rounded-md' />
        </div>
      </div>
    </div>
  )
}

export default page