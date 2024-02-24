import BenefitCard from '@/components/BenefitCard'
import Explore from '@/components/Explore'
import ReadyToGet from '@/components/ReadyToGet'
import { IoTUseCases, IoTBenefits, IoTHowItWorks, IfcBenefits } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="bg-[url('/aviation-website.png')]  bg-no-repeat bg-cover bg-fixed h-[430px] w-full flex flex-col items-center justify-center text-white">
        <p className='text-[48px] md:text-[68px] leading-[55.2px] md:leading-[79.3px] tracking-[-1.4px] md:tracking-[-2.1px] font-[500]'>nSpire IFC</p>
        <p className='text-[18px] md:text-[19px] font-[500] mt-10 mx-5 text-center'>Improving the lived connectivity experience of your passengers.</p>
      </div>

      <div className='flex flex-col container max-w-[1200px] items-center justify-center text-textcolor my-10'>
        <div className='flex flex-col items-center justify-center px-5'>
          <p className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500] text-center text-texthead'>It’s not about the performance.</p>
          <p className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500] text-center text-texthead'>It’s about the <span className='text-secondary'>experience</span>.</p>
          <p className='mt-5 text-[18px]'>Passengers expect to be connected when they are in the air – and now expect the same experience in the air that they get on the ground.</p>
          <p className='mt-5 text-[18px]'>But for airlines, providing that level of experience at altitude and at high speeds is challenging. In-flight connectivity experience can best be described as ‘inconsistent’ for passengers: and it varies widely across different airlines, routes, aircraft types, seasons, and service provider.</p>
          <Image src="/nSpire-IFC-website.png" height={800} width={800} alt="nSpireCX" className='w-full rounded-md' />

          <p className='mt-0 text-[18px]'>Nonetheless, not meeting these passenger expectations incurs risks to customer satisfaction, loyalty, reputation and – ultimately – the bottom line.</p>
          <p className='mt-5 text-[18px]'>nSpire’s unique PED-view of the lived connectivity experience of passengers goes beyond providing performance intelligence in terms of QoS, data speed and latency. Rather, nSpire contextualizes those important metrics in terms of their experiential impact on key applications that passengers use: is YouTube buffering? Are emails stuck in the outbox? Are websites loading?</p>
          <p className='mt-5 text-[18px]'>In the same context, the ‘frictionality’ of the usually simple act of joining and accessing Wi-Fi in-flight is critical: it can be a very frustrating experience especially if fees are involved.</p>
          <p className='mt-5 text-[18px]'>These experiences – good and bad – are critical to understanding whether the IFC offering is adding the intended value to the brand.</p>
          <p className='mt-5 text-[18px]'>nSpire’s patented CCx captures all this and more to produce an actionable, weighted measurement of the customer connectivity experience for all dimensions of passenger and flight data.</p>

        </div>

      </div>

      <div className='flex flex-col lg:container max-w-[1200px] items-center justify-center  p-10 text-textcolor'>
        <p className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500] my-5 text-texthead'>Value Areas</p>

        <div className='flex flex-col md:flex-row w-full flex-wrap justify-between gap-1'>
          {IfcBenefits.map((benefit, index) => (
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


      <div className='flex flex-col container max-w-[1200px] items-center justify-center p-10 text-textcolor '>
        <p className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500] my-5 text-texthead'>How it works</p>
        <div className='flex flex-col items-start'>
          <p className='text-[18px] text-start mt-5'>The aviation industry is moving to a new level of maturity and introducing technologies which promise levels of performance only dreamed of 10 years ago.</p>
          <p className='text-[18px] text-start mt-5'>No one can deny the technical challenges or complexity of delivering a broadband connectivity service to passengers. But no one can argue that the service offered has a reputation for inconsistency.</p>
          <p className='text-[18px] text-start mt-5'>The first step in improving any service is to measure it empirically: per flight, passenger, route, equipment etc.</p>

        </div>
        <Image src="/How-nSpire-IFC-works-1.png" height={800} width={800} alt="nSpireCX" className='rounded-md' />


        <div className='flex flex-col items-start'>
          <p className='text-[18px] text-start mt-5'>The nSpire platform does that, and more: it enables Airlines to prioritize expenditure, resources, and time to deliver a performant, consistent experience and satisfaction in their IFC offering.</p>
          <p className='text-[18px] text-start mt-5'><Link href="/schedule-a-demo" className='underline cursor-pointer'>Contact us today</Link> to learn more.</p>

        </div>
      </div>

      <div className='flex flex-col container max-w-[1200px] items-center justify-center p-10 text-textcolor'>
        <ReadyToGet />
      </div>

    </div>
  )
}

export default page