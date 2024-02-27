import { Blogs, Categories } from '@/constants/BlogsData'
import { FaCheck } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa";
import { GrLink } from "react-icons/gr";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-row gap-4 justify-center items-center container max-w-[1200px]'>
        {
          Categories.map((item: any) => (
            <button className='group/item flex flex-row justify-center hover:justify-between outline outline-2 text-secondary mr-1 py-2 px-3 min-w-[150px] rounded uppercase text-xs transition-[width] duration-[3s] ease-in-out'>
              <span className='transition-[width] duration-[3s] ease-in-out'>{item.value}</span>
              <span className='transition-[width] duration-[3s] ease-in-out inline-block group/edit invisible hover:bg-slate-200 group-hover/item:visible mr-2'> <FaCheck /> </span>
            </button>
          ))
        }
      </div>
      <div className='flex flex-col container max-w-[1200px] items-center justify-center mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center w-full'>
          {
            Blogs.map((blog: any) => (
              <div key={blog.url} className="rounded overflow-hidden shadow-lg bg-[#F9F9F9] hover:drop-shadow-2xl hover:shadow-lg">
                <div className=" flex flex-row">
                  <div className='relative flex flex-1'>
                    <Image
                      className="w-full h-80 object-center opacity-100 hover:opacity-30"
                      src={blog.image}
                      width={300}
                      height={300}
                      loading="lazy"
                      alt={""}
                    />
                    <div className='absolute top-0 left-0  flex justify-center gap-5 items-center  w-[90%] h-[300px] object-bottom  opacity-0 hover:opacity-50 bg-black m-[5%] p-5 transition duration-1000'>
                      <Link href={`${blog.url}`}> <div className='bg-white p-2'><FaRegImage /></div> </Link>
                      <Link href={`${blog.image}`}> <div className='bg-white p-2'><GrLink /></div> </Link>
                    </div>

                  </div>

                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className='uppercase bg-secondary w-[200px] text-white text-center py-2 -ml-5 -mt-10 font-[500] text-sm'>{blog.type}</div>

                  <div className=" mt-5">
                    <div className="mt-3 ml-5 text-md hover:text-secondary underline font-[500]">
                      <Link href={`${blog.url}`}>{blog.title}</Link>
                    </div>
                    <div className='flex justify-end items-end mr-5 mt-5'>
                      <button className='outline outline-2 text-secondary mr-1 py-2 px-3 min-w-[150px] rounded uppercase'>
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>


  )
}

export default page