import React from 'react'

const BlogTitle = ({ title, date, category }: { title: string, date: string, category: string }) => {
  return (
    <div className='flex flex-col justify-center items-center mt-10 mb-5'>
      <p className='text-5xl font-[500] my-5 text-texthead'>{title}</p>
      <div className='flex fle-row gap-10 mt-5'><p>{date}</p><p>{category}</p></div>
    </div>
  )
}

export default BlogTitle