import BenefitCard from '@/components/BenefitCard'
import Explore from '@/components/Explore'
import ReadyToGet from '@/components/ReadyToGet'
import { Benefits, HowItWorks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <div className="bg-[url('/photo-car.jpg')]  bg-no-repeat bg-cover bg-center bg-fixed h-[430px] w-full flex flex-col items-center justify-center text-white">
        <p className='text-[48px] md:text-[68px] leading-[55.2px] md:leading-[79.3px] tracking-[-1.4px] md:tracking-[-2.1px] font-[500]'>nSpireAuto</p>
        <p className='text-[18px] md:text-[19px] font-[500] mt-10 mx-5 text-center'>Empowering automotive OEMs with a unique vehicle view of mobile networks</p>
      </div>
      <div className='flex flex-row container max-w-[1200px] items-center justify-between flex-wrap px-3 md:px-10'>

        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center text-textcolor my-10'>
          <div className='flex flex-col mx-5 text-left'>
            <p className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500] text-texthead '>A Dynamic View with Data-Driven Insights</p>
            <p className='mt-5 text-[18px]'>As connected car services become a market differentiator for automakers, poor mobile coverage, network congestion and outages pose significant risks to new business models and revenue streams. nSpireAuto mitigates the risks.</p>
            <p className='mt-5 text-[18px]'>On any network, anywhere in the world, our vehicle view is constant, giving you data-driven insights into network performance metrics unobtainable from MNOs (Mobile Network Operators) with their carrier-only perspective.</p>
          </div>
          <div className='flex flex-col '><Image src="/nspire-auto-ui.png" height={400} width={400} alt="Cube Map" className='w-full rounded-md mt-5' /></div>

        </div>

        <div className='flex flex-col lg:container max-w-[1200px] items-center justify-center drop-shadow-sm bg-white p-10 text-textcolor'>
          <p className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500] my-5 text-texthead'>Key benefits</p>

          <div className='flex flex-col md:flex-row w-full flex-wrap justify-between gap-1'>
            {Benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                content={benefit.content}
                styleclass='bg-white drop-shadow-sm w-full md:w-[32%]'
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col container max-w-[1200px] items-center justify-center p-5 text-textcolor'>
          <p className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500] my-5 text-texthead'>How it works</p>

          <div className='flex flex-col md:flex-row w-full flex-wrap justify-between gap-2'>
            {HowItWorks.map((item, index) => (
              <BenefitCard
                key={index}
                icon={item.icon}
                title={item.title}
                content={item.content}
                styleclass='w-full md:w-[46%]'
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col container max-w-[1200px] items-center justify-center p-10 text-textcolor'>
          <div className='grid grid-cols-1 md:grid-cols-2 flex-nowrap items-center justify-center h-auto w-full mt-10'>

            <div className='flex'>
              <Image
                className='w-full object-contain rounded-md'
                src="/automotive-exp.jpg"
                width={600}
                height={1000}
                alt='nspire UI'
              />
            </div>
            <div className='flex flex-col w-full  py-0 md:py-10 ml-10'>
              <h1 className='text-[24px] leading-[27.6px] tracking-[-0.7px] font-[500] md:text-[36px] md:leading-[41.4px] md:tracking-[-1.1px]   text-texthead'> Get the eBook: How to own the in-car digital experience </h1>
              <p className='text-[16px] mt-5'>Read our guide to unlock the opportunities awaiting OEMs in this rapidly evolving marketplace.</p>
              <button className='bg-secondary hover:bg-warning rounded mt-5 text-white hover:scale-105 transition duration-500 px-4 py-2 md:py-3 w-[200px] font-bold'> Download the eBook </button>
            </div>
          </div>
          <ReadyToGet />
          <Explore />
        </div>
      </div>


    </div>
  )
}

export default page