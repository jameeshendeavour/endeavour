"use client"

import { slideFromBottom, slideFromTop } from '@/motion/motion'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const HeroContent = () => {
  return (
    <AnimatePresence>
      <div className="z-[20] flex flex-col items-center justify-center h-full w-full max-w-[1200px] text-textcolor ">
        <p className='text-xl mt-10 mb-10'> Ensure Experience Exceeds Expectations </p>
        <p className='text-4xl font-semibold mx-10 text-center'> We provide the platform and data analytics that optimise performance of devices around the world. </p>
        <p className='text-xl mt-10 mb-10 mx-10 text-center'> Endeavour ensures a seamless and premium experience for the user of the device, and enables revenue generating opportunities that drive competitive advantage for our global clients in the Automotive, Telecommunications and Enterprise IoT sectors.  </p>
      </div>
    </AnimatePresence>

  )
}

export default HeroContent