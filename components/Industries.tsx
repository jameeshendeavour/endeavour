"use client";

import React from 'react'
import IndustryCard from './IndustryCard'
import { Works } from '@/constants'

const Industries = () => {



  return (
    <div className='flex flex-col items-center justify-center h-auto w-full  mt-10 px-10'>
      <div className='flex container flex-col items-center justify-center h-auto w-full text-textcolor'>
        <h1 className=' text-[40px] uppercase '> Industries We are Transforming </h1>
        <div className="flex flex-col md:flex-row basis-1/2 md:basis-1/4 flex-nowrap items-center gap-5 justify-center">
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