import React from 'react'

import AnimatedNumbers from './AnimatedNumbers'

const ByNumbers = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center  p-10 drop-shadow-xs bg-white'>
      <div className='flex flex-row container max-w-[1200px] items-center justify-center flex-wrap px-3 md:px-10'>
        <h1 className='text-texthead text-[20px] tracking-[2px] leading-[23px] uppercase mt-10 text-center my-10'> ENDEAVOUR BY THE NUMBERS </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 items-center w-full gap-5 justify-center ">
          <div className="just-a-border h-full  text-center flex-1 flex-grow mt-5">
            <div className="mb-2 text-[48px] tracking-[-1.4pxpx] leading-[72px] font-[500]"><AnimatedNumbers target={150} unit="+" /></div>
            <p className="text-textcolor text-[16px] ">Countries</p>
          </div>
          <div className="just-a-border h-full text-center flex-1 flex-grow mt-5">
            <div className="mb-2 text-[48px] tracking-[-1.4pxpx] leading-[72px] font-[500]"><AnimatedNumbers target={400} unit="+" /></div>
            <p className="text-textcolor text-[16px] ">Networks Worldwide</p>
          </div>
          <div className="just-a-border h-full  text-center flex-1 flex-grow mt-5">
            <div className="mb-2 text-[48px] tracking-[-1.4pxpx] leading-[72px] font-[500]"><AnimatedNumbers target={275} unit="b+" /></div>
            <p className="text-textcolor text-[16px] ">Measurements</p>
          </div>
          <div className="just-a-border h-full  text-center flex-1 flex-grow mt-5">
            <div className="mb-2 text-[48px] tracking-[-1.4pxpx] leading-[72px] font-[500] "><AnimatedNumbers target={6500} unit="+" /></div>
            <p className="text-textcolor  text-[16px]">Device Types</p>
          </div>
        </div>
      </div>
    </div >

  )
}

export default ByNumbers