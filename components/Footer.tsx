import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaLocationDot } from "react-icons/fa6";

import { FaYoutube, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-transparent text-textcolor shadow-lg p-[15px] mt-10 ">
      <div className="w-full flex flex-col items-center justify-center m-auto mb-24 ">
        <div className="w-full h-full flex flex-row items-start justify-between flex-wrap max-w-[1400px]">
          <div className="flex">
            <div className="font-bold text-[16px] -mt-5">
              <Image
                className="inline h-[60px] "
                src="/endeavour.png"
                width={150}
                height={70}
                alt="Endeavour Technology"
              />
            </div>
          </div>
          <div className="flex flex-row w-auto">
            <Link href={'/'}><p className="px-2 inline align-middle text-[16px] leading-[24px] hover:text-secondary transition-all duration-300 underline">Home</p></Link>
            <div className=" h-5  w-[1px] mt-1 bg-textcolor"></div>
            <Link href={'/'}><p className="px-2 inline align-middle text-[16px] leading-[24px] hover:text-secondary transition-all duration-300 underline">Automotive</p></Link>
            <div className=" h-5  w-[1px] mt-1 bg-textcolor"></div>
            <Link href={'/'}><p className="px-2 inline align-middle text-[16px] leading-[24px] hover:text-secondary transition-all duration-300 underline">Telecom</p></Link>
            <div className=" h-5  w-[1px] mt-1 bg-textcolor"></div>
            <Link href={'/'}><p className="px-2 inline align-middle text-[16px] leading-[24px] hover:text-secondary transition-all duration-300 underline">Enterprise IoT</p></Link>
            <div className=" h-5  w-[1px] mt-1 bg-textcolor"></div>
            <Link href={'/'}><p className="px-2 inline align-middle text-[16px] leading-[24px] hover:text-secondary transition-all duration-300 underline">Why Endeavour?</p></Link>
            <div className=" h-5  w-[1px] mt-1 bg-textcolor"></div>
            <Link href={'/'}><p className="px-2 inline align-middle text-[16px] leading-[24px] hover:text-secondary transition-all duration-300 underline">About</p></Link>
          </div>
          <div className="flex">
            <p className="inline align-middle text-[14px] leading-[21px]">{" "}&copy; Copyright 2023 Endeavour Technology, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer