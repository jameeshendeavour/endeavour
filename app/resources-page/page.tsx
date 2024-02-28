"use client"


import React from 'react'
import BlogFilter from '@/components/BlogFilter';



const page = () => {

  return (
    <div className='flex flex-col items-center justify-center mt-10 p-5'>
      <div className='flex flex-row flex-wrap gap-4 justify-center items-center container max-w-[1200px] '>
        <BlogFilter />
      </div>

    </div>
  )
}

export default page