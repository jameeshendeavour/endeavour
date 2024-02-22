import BenefitCard from '@/components/BenefitCard'
import Explore from '@/components/Explore'
import ReadyToGet from '@/components/ReadyToGet'
import { Benefits, HowItWorks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="bg-[url('/photo-car.jpg')]  bg-no-repeat bg-cover bg-fixed h-[450px] w-full flex flex-col items-center justify-center text-white">
        <p className='text-7xl'>nSpireAuto</p>
        <p className='text-xl mt-10'>Empowering automotive OEMs with a unique vehicle view of mobile networks</p>
      </div>

      <div className='flex flex-row container max-w-[1200px] items-center justify-center text-textcolor my-10'>
        <div className='flex flex-col'>
          <p className='text-4xl font-semibold'>A Dynamic View with Data-Driven Insights</p>
          <p className='mt-10 text-[20px]'>As connected car services become a market differentiator for automakers, poor mobile coverage, network congestion and outages pose significant risks to new business models and revenue streams. nSpireAuto mitigates the risks.</p>
          <p className='mt-10 text-[20px]'>On any network, anywhere in the world, our vehicle view is constant, giving you data-driven insights into network performance metrics unobtainable from MNOs (Mobile Network Operators) with their carrier-only perspective.</p>
        </div>
        <Image src="/nspire-auto-ui.png" height={800} width={800} alt="Cube Map" className='rounded-md' />
      </div>

      <div className='flex flex-col container max-w-[1200px] items-center justify-center drop-shadow-md bg-white p-10 text-textcolor'>
        <p className='text-3xl my-5'>Key benefits</p>

        <div className='flex w-full flex-wrap justify-between '>
          {Benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              content={benefit.content}
              styleclass='bg-white drop-shadow-md w-[350px]'
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col container max-w-[1200px] items-center justify-center p-10 text-textcolor'>
        <p className='text-3xl my-5'>How it works</p>

        <div className='flex w-full flex-wrap justify-between '>
          {HowItWorks.map((item, index) => (
            <BenefitCard
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
              styleclass='w-[550px]'
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col container max-w-[1200px] items-center justify-center p-10 text-textcolor'>
        <div className='flex flex-col md:flex-row flex-nowrap items-center justify-center h-auto w-full mt-10 '>

          <div>
            <Image
              className='w-full object-contain rounded-md'
              src="/automotive-exp.jpg"
              width={600}
              height={1000}
              alt='nspire UI'
            />
          </div>
          <div className='flex flex-col w-full md:w-1/2 px-20 '>
            <h1 className='text-[30px]  '> Get the eBook: How to own the in-car digital experience </h1>
            <p className=' mt-5'>Read our guide to unlock the opportunities awaiting OEMs in this rapidly evolving marketplace.</p>
            <button className='bg-secondary hover:bg-warning rounded mt-5 text-white hover:scale-105 transition duration-500 px-4 py-2 w-[200px] font-bold'> Download the eBook </button>
          </div>
        </div>
        <ReadyToGet />
        <Explore />
      </div>

    </div>
  )
}

export default page