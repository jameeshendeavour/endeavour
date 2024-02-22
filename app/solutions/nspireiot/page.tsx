import BenefitCard from '@/components/BenefitCard'
import Explore from '@/components/Explore'
import ReadyToGet from '@/components/ReadyToGet'
import { IoTUseCases, IoTBenefits, IoTHowItWorks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="bg-[url('/photo-sunrise-scaled.jpg')]  bg-no-repeat bg-cover bg-fixed h-[450px] w-full flex flex-col items-center justify-center text-white">
        <p className='text-7xl'>nSpireIoT</p>
        <p className='text-xl mt-10 w-[800px] text-center'>Providing the device view necessary to support business, mission and life critical IoT services</p>
      </div>

      <div className='flex flex-row container max-w-[1200px] items-center justify-center text-textcolor my-10'>
        <div className='flex flex-col'>
          <p className='text-4xl font-semibold'>When business critical is life or death</p>
          <p className='mt-10 text-[20px]'>As more industries focus on the business outcomes from IoT (Internet of Things), the performance of smart connected devices becomes paramount. For manufacturing, agriculture, utility companies and communication service providers, it’s business critical; for emergency services and healthcare, it can be a matter of life and death.</p>
          <p className='mt-10 text-[20px]'>nSpirte IoT’s unique device-view of the network helps fine-tune performance at the endpoint where sensors capture the data, before it is transmitted to IoT platforms that deliver applications to users.</p>
        </div>
        <Image src="/screen-nspire-iot.png" height={800} width={800} alt="nSpireCX" className='rounded-md' />
      </div>

      <div className='flex flex-col container max-w-[1200px] items-center justify-center  p-10 text-textcolor'>
        <p className='text-3xl my-5'>Sector Use Cases</p>

        <div className='flex w-full flex-wrap justify-between '>
          {IoTUseCases.map((benefit, index) => (
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

      <div className='flex flex-col container max-w-[1200px] items-center justify-center drop-shadow-md bg-white p-10 text-textcolor'>
        <p className='text-3xl my-5'>Key benefits</p>

        <div className='flex w-full flex-wrap justify-between '>
          {IoTBenefits.map((benefit, index) => (
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
          {IoTHowItWorks.map((item, index) => (
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
        <Explore />
      </div>

    </div>
  )
}

export default page