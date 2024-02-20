import React from 'react'

const ReadyToGet = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[200px]  mt-10 bg-gradient-to-r from-white from-1% via-gray-100  to-white to-99%'>
      <h1 className='text-[30px]  '> Ready to get started? </h1>
      <p className=' mt-5'>We exist to transform your brand promises into lived customer experiences.</p>
      <button className='bg-secondary hover:bg-warning rounded mt-5 text-white hover:scale-105 transition duration-500 px-4 py-2 w-[200px] '> Schedule Demo </button>
    </div>
  )
}

export default ReadyToGet