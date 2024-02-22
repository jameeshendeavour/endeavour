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
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col flex-wrap items-start justify-start">
            <div className="font-bold text-[16px]"><Image
              className="inline h-[60px] mt[-5px]"
              src="/endeavour.png"
              width={150}
              height={70}
              alt="Endeavour Technology"
            /></div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLocationDot className="text-secondary" />
              <span className="text-[15px] ml-[6px]">3rd Floor, Block 3, Caryfort Avenue, Blackrock Business Park, Dublin, Ireland. A94D5D7</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaEnvelope className="text-secondary" />
              <span className="text-[15px] ml-[6px]">info@endeavourtechnology.com</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLinkedin className="text-secondary" />
              <span className="text-[15px] ml-[6px]"><Link href="https://www.linkedin.com/company/endeavour-technology/" className="cursor-pointer" /> Endeavour Technology</span>
            </p>
          </div>


          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start">
            <div className="font-bold text-[16px] uppercase text-texthead">What We Do</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">IoT Connected Vehicles</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">IoMT Healthcare</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">IoT Enterprise Security</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">LTE/5G Private Network</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">5G MEC Network</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start">
            <div className="font-bold text-[16px] uppercase text-texthead">Use cases</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Improving Network NPS</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Improving indoor coverage</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">5G Fixed Wireless Access</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start">
            <div className="font-bold text-[16px] uppercase text-texthead">OUR products</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">

              <span className="text-[15px] ml-[6px]">nSpire IoT</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">

              <span className="text-[15px] ml-[6px]">nSpre CX</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center text-texthead">

          <p className="px-5 inline align-middle">{" "}&copy; Endeavour Technology 2024 Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer