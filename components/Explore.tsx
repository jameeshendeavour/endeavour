import Link from 'next/link'
import React from 'react'

const Explore = () => {
  return (
    <div className='flex flex-row mt-5 justify-between  items-center w-full p-10 bg-white drop-shadow-sm rounded-md'>
      <div className='flex flex-col '>
        <h1 className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500]  text-texthead '> Explore other Endeavor Technology Solutions </h1>
        <p className=' mt-5'>The clarity to assure customer experience.</p>
      </div>
      <div className='flex flex-col md:flex-row items-end justify-end gap-5  justify-items-end'>
        <Link href="/solutions/nspirecx" ><button className=' rounded mt-5 w-[120px] text-secondary hover:scale-105 transition duration-500 px-6 py-2 outline outline-2 outline-secondary font-[500]'> nSpireCx </button></Link>
        <Link href="/solutions/nspireiot" ><button className=' rounded mt-5 w-[120px] text-secondary hover:scale-105 transition duration-500 px-6 py-2  outline outline-2 outline-secondary font-[500]'> nSpireIoT  </button></Link>
      </div>
    </div>
  )
}

export default Explore