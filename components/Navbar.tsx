"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Dropdown from './DropDown';

import { PiEquals } from "react-icons/pi";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}
const menuItems: MenuItem[] = [

  {
    title: "Solutions",
    children: [
      {
        title: "Automotive",
        route: "/solutions/nspire-auto",
      },
      {
        title: "Telecommunications",
        route: "/solutions/nspirecx",
      },
      {
        title: "Enterprise IoT",
        route: "/solutions/nspireiot",
      },
      {
        title: "Aviation",
        route: "/solutions/nspire-ifc-2",
      },
    ],
  },
  {
    title: "Why Endeavour?",
    route: "/why-endeavour",
  },
  {
    title: "Resources",
    route: "/resources",
  },
  {
    title: "About",
    route: "/about",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="flex  items-center justify-center flex-wrap py-5 text-textcolor min-h-[115px] md:min-h-[125px]">
      <div className='flex flex-row container max-w-[1200px] items-center justify-between flex-wrap px-3 md:px-10'>
        <div className="flex ">
          <Link href="/" >
            <Image
              src="/endeavour.png"
              alt="logo"
              width={160}
              height={90}
              className="w-[100px] md:w-[160px] h-15 "
            />
          </Link>

        </div>
        <div className="flex md:hidden justify-center text-end mr-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-block items-center justify-center mr-5  rounded text-black-500 hover:text-black-400 "
          >

            <PiEquals className={`fill-current  h-8 w-8 ${isOpen ? "hidden" : "block"}`} />
            <svg
              className={`fill-current font-semibold h-6 w-6 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
          <button className={`inline-flex items-center bg-transparent ${isOpen ? " hidden" : "block"}  text-secondary font-semibold hover:text-warning py-2 px-4  border-2 border-secondary hover:border-warning rounded-md`}>
            Contact US
          </button>
        </div>
        <div
          className={`w-full block flex-grow md:flex md:items-center justify-center   md:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div className="md:flex-grow text-right text-[16px] ">

            {menuItems.map((item) => {
              return item.hasOwnProperty("children") ? (
                <Dropdown item={item} />
              ) : (
                <Link className="block mt-4 md:inline-block md:mb-3  mr-5" href={item?.route || ""}>
                  {item.title}
                </Link>
              );
            })}

          </div>

        </div>
        <div className={` hidden md:block  flex-col items-end  ${isOpen ? "hidden" : "block"}`}>
          <button className="inline-flex items-center bg-transparent  text-secondary font-semibold hover:text-warning py-2 px-4 border border-secondary hover:border-warning rounded">
            Contact US
          </button>
        </div>
      </div>

    </nav>
  )
}

export default Navbar