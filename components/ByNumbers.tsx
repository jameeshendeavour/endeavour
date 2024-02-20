import React from 'react'

import AnimatedNumbers from './AnimatedNumbers'

const ByNumbers = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-textcolor text-[30px] uppercase mt-10'> ENDEAVOUR BY THE NUMBERS </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 items-center w-full gap-5 justify-center 2">
        <div className="just-a-border h-full p-6 text-center flex-1 flex-grow">
          <div className="mb-2 text-sm font-medium "><AnimatedNumbers target={150} unit="+" /></div>
          <p className="text-textcolor text-lg font-semibold">Countries</p>
        </div>
        <div className="just-a-border h-full p-6 text-center flex-1 flex-grow">
          <div className="mb-2 text-sm font-medium "><AnimatedNumbers target={400} unit="+" /></div>
          <p className="text-textcolor text-lg font-semibold">Networks Worldwide</p>
        </div>
        <div className="just-a-border h-full p-6 text-center flex-1 flex-grow">
          <div className="mb-2 text-sm font-medium "><AnimatedNumbers target={275} unit="b" /></div>
          <p className="text-textcolor text-lg font-semibold">Measurements</p>
        </div>
        <div className="just-a-border h-full p-6 text-center flex-1 flex-grow">
          <div className="mb-2 text-sm font-medium "><AnimatedNumbers target={6500} unit="+" /></div>
          <p className="text-textcolor text-lg font-semibold">Device Types</p>
        </div>
      </div>
    </div>

  )
}

export default ByNumbers