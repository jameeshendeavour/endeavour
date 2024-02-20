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
    <div className="just-a-border h-full p-3 text-start flex-1 flex-grow text-textcolor  bg-white transition shadow-xl rounded-xl hover:animate-background  hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] hover:outline-1">
      <div>
        <Link href={`/${url}`}>
          <Image
            alt="Blog Image"
            className="rounded-xl object-center h-auto w-full hover:scale-105 transition duration-500"
            src={src}
            width={300}
            height={200}
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="p-2 sm:p-6">
          <Link href={`/${url}`}>
            <p className="line-clamp-3 text-sm/relaxed">{description}</p>
          </Link>

          <div className="mt-3  font-bold text-md hover:text-secondary">
            <Link href={`/${url}`}>Explore {name}</Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default IndustryCard