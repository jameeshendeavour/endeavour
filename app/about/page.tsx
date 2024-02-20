import ByNumbers from '@/components/ByNumbers'
import Image from 'next/image'
import React from 'react'
import { Members, CEO } from '@/constants'
import MemberCard from '@/components/MemberCard'
const page = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white h-full w-full'>
      <div className='flex flex-col items-center justify-center container max-w-[900px] text-textcolor'>
        <p className='my-10 text-6xl font-semibold text-center'>Leading the Way with a New View of Networks</p>
        <p className='text-[20px]  text-center'> Our unrivaled device-centric technology unlocks the data that defines the true customer experience </p>

        <Image
          src="/about.jpg"
          height={400}
          width={800}
          alt='about image'
          className='rounded my-10'
        />

        <p className='text-[20px]  text-center mb-5'> We live in a world where connectivity is business, mission, and, in the case of emergency services, life-critical. At Endeavour Technology, we set out to provide the missing piece in mobile network service delivery, the device and customer view of the network that is the only way to ensure experience exceeds expectations. </p>

        <hr className="h-[2px] my-10 w-full bg-primary border-1"></hr>

        <p className='my-10 text-3xl font-semibold text-center'> On a mission since 2014 </p>
        <p className='text-[20px]  text-center mb-5'> Since we opened for business in 2014, our customers have grown and use cases flourished as the market caught up with what we do and the value of our solutions became apparent. Through our product portfolio – run from our cloud-based nSpire platform – we have forged trusted partnerships with Communication Service Providers, automotive OEMs and with businesses that depend on IoT to deliver digital solutions. </p>
        <p className='text-[20px]  text-center mb-5'> What they all need is a device and customer view of the network to optimise their connected services. Armed with our insights, and the third-party data we integrate and surface on our platform, clients make service assurance a building block for continual performance improvement and a foundation for market differentiation.  </p>


        <p className='my-10 text-3xl font-semibold text-center'> Appetite for innovation </p>
        <p className='text-[20px]  text-center mb-5'> Headquartered in Dublin, we are a global business addressing global challenges for customers in North America, Europe, Middle East and Asia Pacific. What enables Endeavour to operate at the leading edge is the technical prowess of our team. They combine years of experience in IoT, telecoms, analytics and information technology with a search-and-solve work ethic, an appetite to innovate and be one step ahead of the future. </p>


      </div>
      <div className='flex flex-col items-center justify-center container '>
        <ByNumbers />
      </div>
      <div className='flex flex-col items-center  justify-center container max-w-[1000px]'>
        <div className='flex flex-row align-middle items-center  justify-center text-textcolor'>
          <MemberCard
            width={300}
            key={CEO.name}
            imageUrl={CEO.imageUrl}
            linkedInUrl={CEO.linkedInUrl}
            position={CEO.position}
            name={CEO.name}
          />

          <p className='text-[20px] text-textcolor'>Headquartered in Dublin, Endeavour Technology has been optimising mobile connectivity around the globe since 2014. With deep IoT, telecoms, analytics and information technology experience, our solutions ensure a seamless and premium experience for the user of the device, and enables revenue generating opportunities that drive competitive advantage for our global clients in the Automotive, Telecommunications and Enterprise IOT sectors. Armed with our insights, clients can innovate and grow their business, mission and life critical processes.</p>

        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center container max-w-[1000px]'>

        <div className='flex w-full flex-wrap justify-between text-textcolor'>
          {Members.map((member, index) => (
            <MemberCard
              width={250}
              key={index}
              imageUrl={member.imageUrl}
              linkedInUrl={member.linkedInUrl}
              position={member.position}
              name={member.name}
            />
          ))}
        </div>


      </div>

    </div>
  )
}

export default page