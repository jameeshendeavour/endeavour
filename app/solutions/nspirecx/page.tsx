import BenefitCard from '@/components/BenefitCard'
import Explore from '@/components/Explore'
import ReadyToGet from '@/components/ReadyToGet'
import { CXBenefits, CXHowItWorks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="bg-[url('/photo-phone.jpg')]  bg-no-repeat bg-cover bg-fixed h-[450px] w-full flex flex-col items-center justify-center text-white">
        <p className='text-7xl'>nSpireCx</p>
        <p className='text-xl mt-10 w-[800px] text-center'>Enabling mobile operators to improve customer experience and satisfaction with a device view of the network</p>
      </div>

      <div className='flex flex-row container max-w-[1200px] items-center justify-center text-textcolor my-10'>
        <div className='flex flex-col'>
          <p className='text-4xl font-semibold text-texthead'>Delivering a better customer experience</p>
          <p className='mt-10 text-[20px]'>As people rely more on mobile devices, service expectations rise, putting pressure on Mobile Network Operators (MNOs) to deliver a better customer experience (Cx). Poor cellular coverage and weak signal quality will test customer loyalty, and often go unnoticed with a network-only view until they switch to another provider.</p>
          <p className='mt-10 text-[20px]'>nSpireCx is your early warning system. It helps improve Net Promoter Scores (NPS) by identifying the causes of a negative network experience, highlighting areas for improvement to reduce churn and build closer customer relationships.</p>
          <p className='mt-10 text-[20px]'>Easily installed on any device – smartphone/tablet/CPE, iOS/Android/Linux – nSpireCx combines the device view of the network with device usage data and other data sources to enable actionable intelligence.</p>
        </div>
        <Image src="/screen-nspire-cx.png" height={800} width={800} alt="nSpireCX" className='rounded-md' />
      </div>

      <div className='flex flex-col container max-w-[1200px] items-center justify-center drop-shadow-md bg-white p-10 text-textcolor'>
        <p className='text-3xl my-5 text-texthead'>Key benefits</p>

        <div className='flex w-full flex-wrap justify-between '>
          {CXBenefits.map((benefit, index) => (
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
        <p className='text-4xl my-5 text-texthead font-semibold'>How it works</p>
        <div className='flex flex-col container max-w-[900px] items-center justify-center p-10 text-textcolor bg-gray-200'>
          <Image
            src="/nspire-diagram.png"
            width={800}
            height={800}
            alt='nSpire diagram'
            className=''
          />

          <div className='flex flex-row justify-start items-start mt-5'>
            <div className='flex flex-col w-1/3 px-2'>
              <p className='font-semibold'>1.</p>
              <p className='font-semibold'>Network Activity Collection</p>
              <p className='mt-5'>Device-agnostic, the nSpireCx software agent can be deployed on any customer’s smartphone, tablet, FWT, CPE, in various ways, depending on the MNO requirement.</p>
            </div>
            <div className='flex flex-col w-1/3 px-2'>
              <p className='font-semibold'>2.</p>
              <p className='font-semibold'>Cloud-Native Processing</p>
              <p className='mt-5'>The passively collected network data is transmitted from each agent to the nSpire cloud platform where it is stored and processed for analysis. Open architecture and flexible APIs mean that different data sources can be integrated and harmonised to broaden the use cases.</p>
            </div>
            <div className='flex flex-col w-1/3 px-2'>
              <p className='font-semibold'>3.</p>
              <p className='font-semibold'>Dashboard Metrics Analysis</p>
              <p className='mt-5'>MNO’s have a dedicated portal with interactive dashboards, allowing users to turn data into actionable insights that will drive NPS improvement, whether it’s identifying buildings in need of LTE coverage optimisation or surfacing areas that need CapEx investment in the form of new 5G infrastructure.</p>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-wrap justify-between '>
          {CXHowItWorks.map((item, index) => (
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