import BlogTitle from '@/components/BlogTitle'
import EBookForm from '@/components/EBookForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-normal items-center '>
      <div className='flex flex-col justify-normal items-center container max-w-[1200px]'>
        <BlogTitle title='AutoTech Detroit 2023' date="2023-06-14" category='Blogs' />
        <div className='flex flex-col justify-start text-lg text-textcolor max-w-[800px]'>
          <p className='mt-5 text-texthead font-[500]'>By Ed Chung, VP of Product Management</p>
          <Image
            className='w-full object-cover rounded-lg '
            src="/team-at-autotech-detroit.jpg"
            width={600}
            height={1000}
            alt='nspire UI'
          />
          <p className='mt-5 text-texthead font-[500]'>Endeavour Team at AutoTech Detroit 2023</p>
          <p className='mt-5 text-textcolor'>The world of connected cars is rapidly evolving, and it’s an exciting time for both car makers and stakeholders in this space. Recently, Endeavour had the incredible opportunity to participate in <Link href="https://www.linkedin.com/company/wardsauto/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_content%3BVgKlp6gxRYKm95DWTYZwCg%3D%3D" className='underline'>WardsAuto’s</Link> AutoTech Detroit – a leading event for automotive technology, that brought together over 2,500 people and 150 exhibitors. In this blog post, we’ll share our experiences from the event, highlight key industry trends, and shed light on the evolving needs and preferences of consumers.</p>
          <p className='mt-5 text-texthead font-[500]'>The Power of Networking:</p>
          <p className='mt-5 text-textcolor'>The event provided an amazing platform for us to introduce ourselves to industry players, engage in meaningful discussions, and understand their unique needs and challenges. In line with the importance of the event, Endeavour was represented by our leadership team, including; our CEO, Brian Carroll, our CTO, Steven Myles, our head of product, Ed Chung and head of business development, Niall Berkery. The positive feedback we received on our approach and capabilities with our flagship product <Link href="/solutions/nspire-auto" className='underline'>nSpireAuto</Link> was both encouraging and validating. It reinforced our belief in the value we can bring to the connected car ecosystem and ignited our passion for further exploration and innovation.</p>
          <p className='mt-5 text-texthead font-[500]'>Industry Trends Shaping the Future:</p>
          <p className='mt-5 text-textcolor'>We learned from AutoTech Detroit last week that the future of connected cars looks promising, with estimates projecting a staggering 2.5 billion connected cars by 2030. Additionally, the rise of autonomous vehicles is expected to reach around 85 million partially or fully autonomous cars by the same year. These statistics indicate the massive growth potential in the connected car market. One of the driving forces behind this growth is the exploding usage of car data. By 2030, monthly data usage in vehicles for front seat and backseat services, software updates, video and sensor uploads, and more, is predicted to range from tens to hundreds of gigabytes. This surge in data usage highlights the need for reliable connectivity that can support these demands.</p>
          <p className='mt-5 text-textcolor'>Another key focus in the industry is the development of autonomous and Vehicle-to-Everything (V2X) technologies. Recent FCC rulings have reignited the importance of Cellular Vehicle-to-Everything (C-V2X) connectivity and the need for its validation. The success of these technologies hinges on the availability of robust and dependable connectivity solutions.</p>
          <p className='mt-5 text-texthead font-[500]'>Evolving Consumer Expectations:</p>
          <p className='mt-5 text-textcolor'>Consumers are becoming increasingly discerning when it comes to connectivity in their cars. Studies indicate that 37% of consumers would switch car brands for better connectivity options. Furthermore, 47% of premium car customers express interest in additional digital services and features. Flexibility is also a priority for consumers, with 59% preferring subscription-based or pay-per-use connectivity services. These shifting preferences underscore the need for enhanced visibility into connectivity quality and usage.</p>
          <p className='mt-5 text-texthead font-[500]'>Collaborative Engagements:</p>
          <p className='mt-5 text-textcolor'>During the event, we had the privilege of meeting with major connectivity carriers across various technologies, influential auto OEMs, leading tech companies, telematics providers, data analytics firms, and other innovative solution companies. These engagements allowed us to gain insights into the latest advancements, collaborate on potential partnerships, and envision a connected car ecosystem that caters to the evolving needs of consumers.</p>
          <p className='mt-5 text-textcolor'>Attending AutoTech Detroit last week was an enlightening experience that highlighted the immense potential and exciting developments in the connected car space. As the number of connected cars and data usage continues to grow, there is a pressing need for reliable connectivity solutions and granular visibility into usage and costs. Consumer expectations are evolving, and the industry must adapt to provide flexible and feature-rich connectivity solutions, such as Endeavour’s <Link href="/solutions/nspire-auto"  className='underline'>nSpireAuto</Link>. By fostering collaborations and embracing innovation, we can shape the future of connected cars and drive towards a more connected and intelligent mobility experience for all.</p>
          <p className='mt-5 text-textcolor'>To learn more about Endeavour’s nSpireAuto click here:</p>
          <Link href="/solutions/nspire-auto" className='mt-5'>
            <button
              className="hover:scale-105 transition delay-75  px-10 text-white text-[16px] font-semibold w-auto py-2.5  bg-secondary rounded-lg "
            >
              Download
            </button>
          </Link>
        </div>

      </div>


    </div>
  )
}

export default page