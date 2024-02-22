"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Dropdown from './DropDown';
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
    <nav className="flex nav-width items-center justify-center flex-wrap p-6 text-textcolor ">
      <div className="flex items-center flex-shrink-0  mr-6 lg:mr-72">
        <Link href="/">
          <Image
            src="/endeavour.png"
            alt="logo"
            width={160}
            height={90}
            className="w-100 h-15 mr-2"
          />
        </Link>

      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center   lg:w-auto ${isOpen ? "block" : "hidden"}`}
      >
        <div className=" lg:flex-grow text-right text-[18px]">

          {menuItems.map((item) => {
            return item.hasOwnProperty("children") ? (
              <Dropdown item={item} />
            ) : (
              <Link className="block mt-4 lg:inline-block lg:mt-0 text-white-200 ml-8 mr-8" href={item?.route || ""}>
                {item.title}
              </Link>
            );
          })}

        </div>
        <div>
          <button className="inline-flex items-center bg-transparent  text-secondary font-semibold hover:text-warning py-2 px-4 border border-secondary hover:border-warning rounded">
            Contact US
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar