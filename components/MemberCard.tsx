import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const MemberCard = ({ name, imageUrl, position, linkedInUrl, width }: { name: string, imageUrl: string, position: string, linkedInUrl: string, width: number }) => {
  return (
    <div className='flex flex-col h-auto w-auto text-center justify-center items-center min-w-[300px] mt-5'>
      <Image
        src={imageUrl}
        height={300}
        width={width}
        alt={name}
        className='rounded-lg'
      />
      <p className='mt-5 text-[20px] font-[500]'>{name}</p>
      <p className='max-w-[300px] text-nowrap my-5 text-[14px]'>{position}</p>
      <Link
        href={linkedInUrl}
        className='text-lg'
      > <FaLinkedin /> </Link>
    </div>
  )
}

export default MemberCard