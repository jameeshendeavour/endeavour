import BenefitCard from '@/components/BenefitCard'
import Explore from '@/components/Explore'
import ReadyToGet from '@/components/ReadyToGet'
import { IoTUseCases, IoTBenefits, IoTHowItWorks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="bg-[url('/photo-sunrise-scaled.jpg')]  bg-no-repeat bg-cover bg-fixed h-[430px] w-full flex flex-col items-center justify-center text-white">
        <p className='text-[48px] md:text-[68px] leading-[55.2px] md:leading-[79.3px] tracking-[-1.4px] md:tracking-[-2.1px] font-[500]'>nSpireIoT</p>
        <p className='text-[18px] md:text-[19px] font-[500] mt-10 mx-5 text-center'>Providing the device view necessary to support business, mission and life critical IoT services</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center text-textcolor my-10'>
        <div className='flex flex-col mx-5 text-left'>
          <p className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500] text-texthead'>When business critical is life or death</p>
          <p className='mt-5 text-[18px]'>As more industries focus on the business outcomes from IoT (Internet of Things), the performance of smart connected devices becomes paramount. For manufacturing, agriculture, utility companies and communication service providers, it’s business critical; for emergency services and healthcare, it can be a matter of life and death.</p>
          <p className='mt-5 text-[18px]'>nSpirte IoT’s unique device-view of the network helps fine-tune performance at the endpoint where sensors capture the data, before it is transmitted to IoT platforms that deliver applications to users.</p>
        </div>
        <div className='flex flex-col '><Image src="/screen-nspire-iot.png" height={400} width={400} alt="nSpireCX" className='w-full rounded-md mt-5' /></div>
      </div>

      <div className='flex flex-col container max-w-[1200px] items-center justify-center  p-10 text-textcolor'>
        <p className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500] my-5 text-texthead'>Sector Use Cases</p>

        <div className='flex flex-col md:flex-row w-full flex-wrap justify-between gap-1'>
          {IoTUseCases.map((benefit, index) => (
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

      <div className='flex flex-col container max-w-[1200px] items-center justify-center drop-shadow-sm bg-white mx-5 px-10 py-[4rem] text-textcolor'>
        <p className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500] my-5 text-texthead'>Key benefits</p>

        <div className='flex flex-col md:flex-row w-full flex-wrap justify-between gap-1'>
          {IoTBenefits.map((benefit, index) => (
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
        <p className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500] text-texthead my-5'>How it works</p>

        <div className='flex flex-col md:flex-row w-full flex-wrap justify-between gap-2'>
          {IoTHowItWorks.map((item, index) => (
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
        <Explore />
      </div>

    </div>
  )
}

export default page