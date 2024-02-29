import BlogTitle from '@/components/BlogTitle'
import EBookForm from '@/components/EBookForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-normal items-center '>
      <div className='flex flex-col justify-normal items-center container max-w-[1200px]'>
        <BlogTitle title='nSpireAuto Connectivity' date="2023-05-02" category='Ebooks' />
        <div className='flex flex-col justify-start text-lg text-textcolor max-w-[800px]'>
          <p className='mt-5'>The challenge for automotive manufacturers is putting themselves at the centre of an emerging connected car revolution. To protect their place in the industry, automotive OEMs need to maintain ownership of the customer and their digital experience.</p>
          <p className='mt-5'>Learn more about navigating the connected car revolution in the nSpireAuto eBook from Endeavour Technology.</p>


          <Image
            className='w-full object-contain rounded-lg mt-5'
            src="/Chris-E-book_Jan2023.png"
            width={600}
            height={1000}
            alt='nspire UI'
          />

        </div>


        <div className='flex flex-col justify-normal items-center max-w-[800px] mt-10'>
          <EBookForm />
        </div>

      </div>


    </div>
  )
}

export default page