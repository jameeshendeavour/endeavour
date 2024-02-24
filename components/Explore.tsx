import React from 'react'

const Explore = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full p-10 bg-white drop-shadow-sm rounded-md'>
      <div className='flex flex-col '>
        <h1 className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500]  text-texthead '> Explore other Endeavor Technology Solutions </h1>
        <p className=' mt-5'>The clarity to assure customer experience.</p>
      </div>
      <div className='flex flex-row md:flex-col flex-wrap items-end justify-end gap-2  justify-items-end'>
        <button className=' rounded mt-5 w-[120px] text-secondary hover:scale-105 transition duration-500 px-6 py-2  outline outline-secondary font-[500]'> nSpireCx </button>
        <button className=' rounded mt-5 w-[120px] text-secondary hover:scale-105 transition duration-500 px-6 py-2  outline outline-secondary font-[500]'> nSpireIoT  </button>
      </div>
    </div>
  )
}

export default Explore