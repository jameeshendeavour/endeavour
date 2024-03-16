import BenefitCard from '@/components/BenefitCard'
import Explore from '@/components/Explore'
import ReadyToGet from '@/components/ReadyToGet'
import { CXBenefits, CXHowItWorks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="bg-[url('/photo-phone.jpg')]  bg-no-repeat bg-cover bg-center bg-fixed h-[430px] w-full flex flex-col items-center justify-center text-white bg-blend-color-dodge">
        <p className='text-[48px] md:text-[68px] leading-[55.2px] md:leading-[79.3px] tracking-[-1.4px] md:tracking-[-2.1px] font-[500] text-white'>nSpireCx</p>
        <p className='text-[18px] md:text-[19px] font-[500] mt-10 mx-5 text-center max-w-[700px]'>Enabling mobile operators to improve customer experience and satisfaction with a device view of the network</p>
      </div>
      <div className='flex flex-row container max-w-[1400px] items-center justify-center flex-wrap px-3 md:px-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center text-textcolor my-10'>
          <div className='flex flex-col mx-5 text-left col-span-1 px-5'>
            <p className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500] text-texthead'>Delivering a better customer experience</p>
            <p className='mt-5 text-[18px]'>As people rely more on mobile devices, service expectations rise, putting pressure on Mobile Network Operators (MNOs) to deliver a better customer experience (Cx). Poor cellular coverage and weak signal quality will test customer loyalty, and often go unnoticed with a network-only view until they switch to another provider.</p>
            <p className='mt-5 text-[18px]'>nSpireCx is your early warning system. It helps improve Net Promoter Scores (NPS) by identifying the causes of a negative network experience, highlighting areas for improvement to reduce churn and build closer customer relationships.</p>
            <p className='mt-5 text-[18px]'>Easily installed on any device – smartphone/tablet/CPE, iOS/Android/Linux – nSpireCx combines the device view of the network with device usage data and other data sources to enable actionable intelligence.</p>
          </div>
          <div className='flex flex-col col-span-2'><Image src="/screen-nspire-cx.png" height={400} width={400} alt="nSpireCX" className='w-full rounded-md mt-5' /></div>
        </div>

        <div className='flex flex-col lg:container max-w-[1200px] items-center justify-center drop-shadow-sm bg-white p-10 text-textcolor'>
          <p className='text-[36px] leading-[41.4px] tracking-[-1.1px] font-[500] my-5 text-texthead capitalize'>Key benefits</p>

          <div className='flex flex-col md:flex-row w-full flex-wrap justify-between '>
            {CXBenefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                content={benefit.content}
                styleclass='bg-white drop-shadow-md w-full md:w-[32%] py-5'
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col container max-w-[1200px] items-center justify-center p-10 text-textcolor'>
          <p className='text-[48px] leading-[55.2px]  tracking-[-1.4px]  font-[500]  text-texthead mb-10 capitalize'>How it works</p>
          <div className='flex flex-col container max-w-[900px] items-center justify-center p-10 text-textcolor bg-[#f6f6f9]'>
            <Image
              src="/nspire-diagram.png"
              width={800}
              height={800}
              alt='nSpire diagram'
              className=''
            />

            <div className='flex flex-col md:flex-row justify-start items-start mt-5'>
              <div className='flex flex-col w-full md:w-1/3 px-2 mt-5 font-[16px]'>
                <p className='font-[500]'>1.</p>
                <p className='font-[500]'>Network Activity Collection</p>
                <p className='mt-5'>Device-agnostic, the nSpireCx software agent can be deployed on any customer’s smartphone, tablet, FWT, CPE, in various ways, depending on the MNO requirement.</p>
              </div>
              <div className='flex flex-col w-full md:w-1/3 px-2 mt-5 font-[16px]'>
                <p className='font-[500]'>2.</p>
                <p className='font-[500]'>Cloud-Native Processing</p>
                <p className='mt-5'>The passively collected network data is transmitted from each agent to the nSpire cloud platform where it is stored and processed for analysis. Open architecture and flexible APIs mean that different data sources can be integrated and harmonised to broaden the use cases.</p>
              </div>
              <div className='flex flex-col w-full md:w-1/3 px-2 mt-5 font-[16px]'>
                <p className='font-[500]'>3.</p>
                <p className='font-[500]'>Dashboard Metrics Analysis</p>
                <p className='mt-5'>MNO’s have a dedicated portal with interactive dashboards, allowing users to turn data into actionable insights that will drive NPS improvement, whether it’s identifying buildings in need of LTE coverage optimisation or surfacing areas that need CapEx investment in the form of new 5G infrastructure.</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row  w-full flex-wrap justify-between '>
            {CXHowItWorks.map((item, index) => (
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

        <div className='flex flex-col container max-w-[1200px] items-center justify-center p-10 text-textcolor bg-gradient-to-r from-white from-1% via-gray-100  to-white to-99%'>
          <Explore />
        </div>
      </div>
    </div>
  )
}

export default page