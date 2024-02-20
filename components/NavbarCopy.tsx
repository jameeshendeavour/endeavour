"use client"

import { Socials } from "@/constants";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navbar = () => {
  const [isRouting, setIsRouting] = useState(false)
  const [prevPath, setPrevPath] = useState('/')

  const path = usePathname()

  useEffect(() => {
    if (prevPath != path) {
      setIsRouting(true)
    }
  }, [path, prevPath])

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path)

      const timeout = setTimeout(() => {
        setIsRouting(false)
      }, 1200)

      return () => clearTimeout(timeout)
    }
  }, [isRouting])
  return (
    <div className="w-full h-[100px] lg:h-[120px] fixed top-0 shadow-lg bg-white z-[50] px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-center md:justify-between m-auto">
        <Link
          href="/"
          className="text-2xl font-bold ml-10 hidden md:block text-transparent bg-clip-text bg-secondary"
        >
          <Image
            src="/endeavour.png"
            alt="logo"
            width={160}
            height={70}
            className="cursor-pointer"
          />
        </Link>

        <AnimatePresence mode="wait">
          {isRouting && <Transition key="uniqueKey" />}
          <div className="w-full md:w-[50%] max-w-[800px] h-full flex flex-row items-center justify-between md:mr-14 mt-2">
            <div className="flex items-center justify-between w-full h-auto text-lg mr-4 md:mr-15 px-5 md:px-20 rounded-full text-primary">
              <Link href="/about-me" className="cursor-pointer">
                Solutions
              </Link>
              <Link href="/my-projects" className="cursor-pointer">
                Why Endeavour?
              </Link>

              <Link href="/about-me" className="cursor-pointer">
                Resources
              </Link>
              <Link href="/about-me" className="cursor-pointer">
                About
              </Link>

            </div>
          </div>
        </AnimatePresence>

        <div className="hidden md:flex flex-row gap-5 mr-10">
          <button
            className="bg-transparent  text-secondary font-semibold hover:text-warning py-2 px-4 border border-secondary hover:border-warning rounded"
          >
            <div className="h-5 flex gap-2 items-center">
              Contact US
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;