"use client";

import React from 'react'
import IndustryCard from './IndustryCard'
import { Works } from '@/constants'

const Industries = () => {



  return (
    <div className='flex flex-col items-center justify-center h-auto w-full  pt-10 pb-10 px-5 md:px-10  bg-gradient-to-b from-[#FEFEFE] to-[#FFFFFF]'>
      <div className='flex lg:container flex-col items-center justify-center h-auto w-full text-textcolor'>
        <h1 className=' text-[20px] tracking-[2px] leading-[23px] uppercase text-center mb-4'> Industries We are Transforming </h1>
        <div className="flex flex-col md:flex-row basis-1/2 md:basis-1/4 flex-nowrap items-stretch h-auto gap-5 justify-center mt-0 md:mt-2">
          {Works.map((industry, index) => (
            <IndustryCard

              key={index}
              src={industry.src}
              url={industry.url}
              description={industry.description}
              name={industry.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Industries