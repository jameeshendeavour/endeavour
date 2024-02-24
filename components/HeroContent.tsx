"use client"

import { slideFromBottom, slideFromTop } from '@/motion/motion'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const HeroContent = () => {
  return (
    <AnimatePresence>
      <div className="z-[20] flex flex-col items-center justify-center h-full w-full max-w-[1200px] text-textcolor mt-0 md:mt-5">
        <p className='text-[18px] md:text-[19px] font-[500] mt-5 mb-5 mx-2 text-texthead text-center'> Ensure Experience Exceeds Expectations </p>
        <p className='text-[42px] tracking-[-1.3px] leading-[48.3px] mx-2 text-center text-texthead font-[500]'> We provide the platform and data analytics that optimise performance of devices around the world. </p>
        <p className='text-[18px] mt-5 mb-5 md:mb-8 mx-5 text-center'> Endeavour ensures a seamless and premium experience for the user of the device, and enables revenue generating opportunities that drive competitive advantage for our global clients in the Automotive, Telecommunications and Enterprise IoT sectors.  </p>
      </div>
    </AnimatePresence>

  )
}

export default HeroContent