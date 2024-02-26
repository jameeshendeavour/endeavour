import { px } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import ReadyToGet from './ReadyToGet'
import Link from 'next/link'

const MoreAbout = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-5 '>
      <div className='flex flex-row container max-w-[1200px] items-center justify-center flex-wrap px-3 md:px-10'>
        <div className='flex flex-col items-center justify-center h-auto w-full text-textcolor'>

          <div className='flex flex-col md:flex-row flex-nowrap items-center justify-center h-auto w-full mt-10'>
            <div className='flex flex-col w-full md:w-3/5 px-2 md:px-5'>
              <p className='text-[24px] md:text-[34px] tracking-[-0.7px] md:tracking-[-1px] leading-[27.6px] md:leading-[39.7px] font-[500] text-texthead text-start'> Take control with a device-centric view of the network </p>
              <p className=' mt-5'>nSpire from Endeavour Technology uses device-based agents to unlock the data that defines the true customer experience and a cloud-native platform to collect, collate and analyse multiple data sources through a single window.</p>
            </div>
            <div>
              <Image
                className='w-full object-contain p-2'
                src="/screen-nspire-ui.png"
                width={1000}
                height={1000}
                alt='nspire UI'
              />
            </div>
          </div>

          <div className='flex flex-col md:flex-row flex-nowrap items-center justify-center h-auto w-full mt-10 '>

            <div className='p-5'>
              <Image
                className='w-full object-contain rounded-lg '
                src="/automotive-exp.jpg"
                width={600}
                height={1000}
                alt='nspire UI'
              />
            </div>
            <div className='flex flex-col w-full md:w-3/5 px-5 md:px-5 '>
              <p className='text-[24px] md:text-[34px] tracking-[-0.7px] md:tracking-[-1px] leading-[27.6px] md:leading-[39.7px] font-[500]  text-texthead text-start'> Get the eBook: How to own the in-car digital experience </p>
              <p className=' mt-5'>Read our guide to unlock the opportunities awaiting OEMs in this rapidly evolving marketplace.</p>
              <Link href="/get-the-in-car-digital-experience-ebook"><button className='bg-secondary hover:bg-warning rounded-md mt-5 text-white hover:scale-105 transition duration-500 px-4 py-3 w-[200px] font-[500]'> Download the eBook </button></Link>
            </div>
          </div>

          <ReadyToGet />
        </div>
      </div>
    </div>

  )
}

export default MoreAbout