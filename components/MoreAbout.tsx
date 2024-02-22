import { px } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import ReadyToGet from './ReadyToGet'

const MoreAbout = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex container flex-col items-center justify-center h-auto w-full text-textcolor'>

        <div className='flex flex-col md:flex-row flex-nowrap items-center justify-center h-auto w-full mt-10 '>
          <div className='flex flex-col w-full md:w-2/5 px-20'>
            <h1 className='text-[30px] '> Take control with a device-centric view of the network </h1>
            <p className=' mt-5'>nSpire from Endeavour Technology uses device-based agents to unlock the data that defines the true customer experience and a cloud-native platform to collect, collate and analyse multiple data sources through a single window.</p>
          </div>
          <div>
            <Image
              className='w-full object-contain'
              src="/screen-nspire-ui.png"
              width={1000}
              height={1000}
              alt='nspire UI'
            />
          </div>
        </div>

        <div className='flex flex-col md:flex-row flex-nowrap items-center justify-center h-auto w-full mt-10 '>

          <div>
            <Image
              className='w-full object-contain rounded-md'
              src="/automotive-exp.jpg"
              width={600}
              height={1000}
              alt='nspire UI'
            />
          </div>
          <div className='flex flex-col w-full md:w-1/2 px-20 '>
            <h1 className='text-[30px]  '> Take control with a device-centric view of the network </h1>
            <p className=' mt-5'>nSpire from Endeavour Technology uses device-based agents to unlock the data that defines the true customer experience and a cloud-native platform to collect, collate and analyse multiple data sources through a single window.</p>
            <button className='bg-secondary hover:bg-warning rounded mt-5 text-white hover:scale-105 transition duration-500 px-4 py-2 w-[200px] '> Download the eBook </button>
          </div>
        </div>

        <ReadyToGet />
      </div>
    </div>

  )
}

export default MoreAbout