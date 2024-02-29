import BlogTitle from '@/components/BlogTitle'
import VideoPlayer from '@/components/VideoPlayer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='flex flex-col justify-center items-center container max-w-[800px] h-full w-full'>

        <BlogTitle title='Endeavour Overview' date="2023-05-04" category='Videos' />

        <p className='text-xl text-textcolor my-5'>Endeavour’s solution, nSpire, ensures a seamless and premium experience for the user of the device, and enables revenue generating opportunities that drive competitive advantage for our global clients in the Automotive, Telecommunications and Enterprise IoT sectors.   </p>
        <VideoPlayer url='/Endeavour_Full_Length_AdobeExpress.mp4' type='video/mp4' />
        <div className='flex flex-col justify-start items-start w-full'>

          <p className='text-2xl text-textcolor my-5 font-[500]'>Learn more about our solutions
          </p>
        </div>
        <div className='flex flex-row flex-wrap gap-5 '>
          <div className='flex flex-col items-center justify-center'>
            <Image src="/automotive.jpg" width={250} height={250} alt="Automotive" className='rounded-md' />
            <Link href="/solutions/nspire-auto" className='mt-5'>
              <button
                className="hover:scale-105 transition delay-75  px-5 text-secondary text-[16px] font-semibold w-auto py-1.5  bg-white rounded-lg outline outline-1"
              >
                Explore nSpire Auto
              </button>
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Image src="/enterpriceiot.jpg" width={250} height={250} alt="Automotive" className='rounded-md' />
            <Link href="/solutions/nspireiot" className='mt-5'>
              <button
                className="hover:scale-105 transition delay-75  px-5 text-secondary text-[16px] font-semibold w-auto py-1.5  bg-white rounded-lg outline outline-1"
              >
                Explore nSpire IoT
              </button>
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Image src="/telecome.jpg" width={250} height={250} alt="Automotive" className='rounded-md' />
            <Link href="/solutions/nspirecx" className='mt-5'>
              <button
                className="hover:scale-105 transition delay-75  px-5 text-secondary text-[16px] font-semibold w-auto py-1.5  bg-white rounded-lg outline outline-1"
              >
                Explore nSpire CX
              </button>
            </Link>
          </div>


        </div>
      </div>
    </div>
  )
}

export default page