import ContactForm from '@/components/ContactForm'
import HSContactForm from '@/components/HSContactForm'
import { Offices } from '@/constants'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col justify-center items-center container max-w-[1200px] mt-10'>
        <p className='text-5xl text-texthead font-[500]'> Get in touch </p>

        <div className='flex w-full justify-center items-center bg-white drop-shadow-md py-8 my-10 rounded-sm'>
          <p className='text-2xl text-texthead font-[500]'> Have a question? Send us a note: <Link href="mailto:info@endeavourtechnology.com" className='underline'> info@endeavourtechnology.com </Link> </p>
        </div>

        <div className='flex flex-row flex-wrap justify-center gap-5  items-stretch mt-10 w-full'>
          {
            Offices.map((office: any) => (
              <div key={office.id} className='outline outline-1 outline-slate-200 rounded-sm py-10 px-5 text-center text-texthead'>
                <p className='text-xl font-[500] mb-5'>{office.country}</p>
                <p className='underline'>{office.addLine1}</p>
                <p className='underline'>{office.addLine2}</p>
                <p className='underline'>{office.addLine3}</p>
                <p className='underline'>{office.addLine4}</p>
              </div>
            ))
          }
        </div>

        <ContactForm />
      </div>
    </div>
  )
}

export default page