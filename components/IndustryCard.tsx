import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const IndustryCard = ({
  name,
  src,
  url,
  description
}: {
  name: string,
  src: string
  url: string,
  description: string

}) => {
  return (
    <div className="h-full  text-start flex-1 items-stretch flex-grow text-textcolor  rounded-md hover:animate-background  hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] hover:outline-1">
      <div>
        <Link href={`/${url}`}>
          <Image
            alt="Blog Image"
            className="rounded-md object-center h-auto w-full hover:scale-105 transition duration-500"
            src={src}
            width={300}
            height={200}
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col">
        <div className=" mt-5">
          <Link href={`/${url}`}>
            <p className=" text-[16px]/normal ">{description}</p>
          </Link>

          <div className="mt-3 text-md hover:text-secondary underline font-[500]">
            <Link href={`/${url}`}>Explore {name}</Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default IndustryCard