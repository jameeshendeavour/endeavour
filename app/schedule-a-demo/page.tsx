import ScheduleForm from '@/components/ScheduleForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center mt -10'>
      <div className='flex flex-col justify-center items-center container max-w-[1200px]'>
        <p className='text-4xl text-texthead font-[500]'> Talk to an Endeavour Specialist </p>
        <div className='flex flex-col md:flex-row justify-center items-center my-10'>

          <div className='flex flex-col w-1/3 px-3'>
            <Image src="/screen-nspire-ui.png" alt='nSpire UI' width={300} height={300} />
            <div className='mt-5'><p className='text-xl text-texthead font-[500]'>Get in touch and we’ll have our team reach out and share more details about Endeavour’s technology.</p></div>
          </div>
          <div className='flex flex-col w-2/3 px-3'>
            <ScheduleForm />
          </div>
        </div>
      </div>

    </div>
  )
}

export default page