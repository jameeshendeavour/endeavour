import React from 'react'

const Explore = () => {
  return (
    <div className='flex flex-row justify-center items-center w-full h-[200px]  mt-10 bg-gradient-to-r from-white from-1% via-gray-100  to-white to-99%'>
      <div className='flex flex-col mr-10'>
        <h1 className='text-[30px]  '> Explore other Endeavor Technology Solutions </h1>
        <p className=' mt-5'>The clarity to assure customer experience.</p>
      </div>

      <button className=' rounded mt-5 text-secondary hover:scale-105 transition duration-500 px-6 py-3 ml-10 outline outline-secondary font-semibold'> nSpireCx </button>
      <button className=' rounded mt-5 text-secondary hover:scale-105 transition duration-500 px-6 py-3 ml-10 outline outline-secondary font-semibold'> nSpireIoT  </button>
    </div>
  )
}

export default Explore