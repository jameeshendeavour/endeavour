import Link from 'next/link'
import React from 'react'

const ReadyToGet = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[95%]  drop-shadow-sm  mt-10 bg-white py-10 rounded'>
      <h1 className='text-[24px] md:text-[35px] tracking-[-0.7px] md:tracking-[-1.1px] leading-[27.6px] md:leading-[40px] font-[500]  text-texthead'> Ready to get started? </h1>
      <p className=' mt-5 mx-2 text-center text-[18px] md:text-[19px]'>We exist to transform your brand promises into lived customer experiences.</p>
      <Link href="/schedule-a-demo"><button className='bg-secondary hover:bg-warning rounded-md mt-5 text-white hover:scale-105 transition duration-500 px-4 py-4  leading-[16px] font-[500]'> Schedule Demo </button></Link>
    </div>
  )
}

export default ReadyToGet