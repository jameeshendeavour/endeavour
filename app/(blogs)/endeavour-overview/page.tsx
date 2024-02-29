import BlogTitle from '@/components/BlogTitle'
import EBookForm from '@/components/EBookForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-normal items-center '>
      <div className='flex flex-col justify-normal items-center container max-w-[1200px]'>
        <BlogTitle title='Company Overview' date="2023-06-21" category='Datasheets' />
        <div className='flex flex-col justify-start text-lg text-textcolor max-w-[800px]'>
          <p className='mt-5 text-texthead font-[500]'>We provide the platform and data analytics that optimise performance of devices around the world.</p>
          <hr className='mt-5 h-[2px] bg-primary' />
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center max-w-[800px] gap-2 my-5 text-lg text-textcolor'>
          <div className='flex w-2/3 flex-col justify-start'>
            <p>Download the datasheet for an overview of how Endeavour ensures a seamless and premium experience for the user of the device, and enables revenue generating opportunities that drive competitive advantage for its global clients in the Automotive, Telecommunications and Enterprise IoT sectors.</p>
            <p className='mt-10 font-[500]'>Download the datasheet to learn:</p>
            <Link href="https://26019833.fs1.hubspotusercontent-eu1.net/hubfs/26019833/nSpireCxDatasheet_Feb2023%20(1).pdf" className='mt-5'>
              <button
                className="hover:scale-105 transition delay-75  px-10 text-white text-[16px] font-semibold w-auto py-2.5  bg-secondary rounded-lg "
              >
                Download
              </button>
            </Link>
          </div>

          <div className='flex w-1/3 flex-col justify-start'>
            <Link href="https://26019833.fs1.hubspotusercontent-eu1.net/hubfs/26019833/nSpireCxDatasheet_Feb2023%20(1).pdf">
              <Image
                className='w-full object-cover rounded-lg '
                src="/endeavourOverview.jpg"
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