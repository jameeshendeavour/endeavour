"use client"

import React, { useEffect, useState } from 'react'

const AnimatedNumbers = ({ target, unit }: { target: number, unit: string }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    let increment = 0;

    setTimeout(() => {
      const intervalId = setInterval(() => {
        increment += Math.ceil((target - current) / 100)
        setCurrent(increment)
        if (increment >= target) clearInterval(intervalId)
      }, 20)
      return () => clearInterval(intervalId)
    }, 50)
  }, [target])
  if (current > target) setCurrent(target)
  return <div className='font-[500] text-texthead'>{current}{unit} </div>
}

export default AnimatedNumbers