import BlogTitle from '@/components/BlogTitle'
import VideoPlayer from '@/components/VideoPlayer'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='flex flex-col justify-center items-center container max-w-[800px] h-full w-full'>

        <BlogTitle title='nSpireAuto Overview' date="2023-05-09" category='Videos' />

        <p className='text-md text-textcolor my-5'>nSpire Auto enables automotive OEMs to proactively manage customer experience via dashboards that identify performance degradation or reactively when alerts draw attention to outages.</p>
        <VideoPlayer url='/nspire-overview.mp4' type='video/mp4' />
        <p className='text-md text-textcolor my-5'>Ready to learn more about how nSpire Auto is empowering automotive OEMs with a unique vehicle view of mobile networks? Click to learn more.
        </p>
        <Link href="/solutions/nspire-auto" className='mt-5 mb-10'>
          <button
            className="hover:scale-105 transition delay-75  px-10 text-white text-[16px] font-semibold w-auto py-2.5  bg-secondary rounded-lg "
          >
            Explore nSpire Auto
          </button>
        </Link>
      </div>
    </div>
  )
}

export default page