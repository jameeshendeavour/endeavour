import BlogTitle from '@/components/BlogTitle'
import EBookForm from '@/components/EBookForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-normal items-center '>
      <div className='flex flex-col justify-normal items-center container max-w-[1200px]'>
        <BlogTitle title='nSpireAuto Solution' date="2023-05-10" category='Datasheets' />
        <div className='flex flex-col justify-center items-center text-lg text-textcolor max-w-[800px] w-full'>
          <p className='mt-5 text-texthead font-[500]'>Helping OEMs Take Control of In-Car Connectivity</p>
          <p className='mt-5 text-texthead font-[500]'>Improve Quality – Reduce Cost – Drive Revenue</p>
          <hr className='mt-5 h-[2px] bg-primary w-full' />
          <p className='mt-5 text-textcolor text-start'>Having control and visibility over the vehicle and the customer experience places OEMs in pole position to monetise data and develop new business models that are emerging around in-car infotainment apps and Over-The-Air services.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center max-w-[800px] gap-2 my-5 text-lg text-textcolor'>
          <div className='flex w-2/3 flex-col justify-start'>
            <p>In this datasheet we highlight three big wins for OEMs, they are:</p>
            <ul className='mt-5 list-disc list-inside'>
              <li className='ml-5'>Fine-tune connectivity</li>
              <li className='ml-5'>Understand Application Usage</li>
              <li className='ml-5'>Enhance Customer Experience</li>
            </ul>
            <p className='mt-10 font-[500]'>Download the datasheet to learn more</p>

            <Link href="https://26019833.fs1.hubspotusercontent-eu1.net/hubfs/26019833/nSpire%20Auto%20Datasheet_Updated%20Nov.pdf" className='mt-5'>
              <button
                className="hover:scale-105 transition delay-75  px-10 text-white text-[16px] font-semibold w-auto py-2.5  bg-secondary rounded-lg "
              >
                Download
              </button>
            </Link>
          </div>

          <div className='flex w-1/3 flex-col justify-start'>
            <Link href="https://26019833.fs1.hubspotusercontent-eu1.net/hubfs/26019833/nSpire%20Auto%20Datasheet_Updated%20Nov.pdf">
              <Image
                className='w-full object-cover rounded-lg '
                src="/nspireauto-solution.jpg"
                width={600}
                height={1000}
                alt='nspire UI'
              />
            </Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default page