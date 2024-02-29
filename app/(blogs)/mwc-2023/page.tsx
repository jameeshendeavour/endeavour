import BlogTitle from '@/components/BlogTitle'
import EBookForm from '@/components/EBookForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-normal items-center '>
      <div className='flex flex-col justify-normal items-center container max-w-[800px]'>
        <BlogTitle title='See things differently at MWC 2023' date="2022-12-02" category='Blogs' />
        <p className='text-texthead font-[500] text-4xl text-start my-5'>Come and find out about Endeavour’s nSpire in Hall 2, Room 2A43M</p>
        <div className='flex flex-col justify-start text-lg text-textcolor max-w-[800px]'>
          <p className='text-texthead font-[500] text-xl text-start '>By Ed Chung, VP of Product Management</p>

          <Image
            className='w-full object-cover rounded-lg '
            src="/blog-mwc-2023.png"
            width={600}
            height={1000}
            alt='nspire UI'
          />
          <p className='mt-5 text-textcolor'>As usual, Mobile World Congress in Barcelona is a must-see event for our industry with this year’s ‘velocity’ theme  capturing the frantic pace of technological innovation that continues to propel mobile communications forward. With the organisers promising to unleash ‘tomorrow’s technology today’, we can expect the latest insights into 5G’s evolution and thought-provoking ideas about infrastructure investment and an increasingly connected digital society. </p>
          <p className='mt-5 text-textcolor'>What you’ll get when you visit Endeavour at MWC  is a different view on all of the above – the customer view. Come and see how our nSpire platform facilitates a device perspective of infrastructure that helps MNOs and automotive manufacturers go beyond the network-only view and deliver a better experience to their customers.</p>
          <p className='mt-5 text-textcolor'>Deploying our software agents on a  smartphone or device enables the secure capture of data pertaining to coverage, speed and latency, along with key customer and network identifiers. After it’s transmitted to our cloud platform for processing, it’s surfaced in dashboards for  granular analysis. </p>
          <p className='mt-5 text-textcolor'>Essentially, we source and present data that is difficult to collect and collate from the device (not the network), the individual view of the network experience on a customer-by-customer basis . This matters more than ever. Declining revenues coupled with increasing investment costs around 5G is pushing customer experience management up the agenda, particularly among MNOs who are in fierce competition for subscribers.</p>
          <p className='mt-5 text-texthead font-[500] text-3xl'>Benefitting MNOs and automotive manufacturers</p>
          <p className='mt-5 text-textcolor'>The nSpire platform works with any network, on any device, anywhere in the world. Because it’s a cloud-native solution, it gives our customers scale and granular insights quickly and easily. It’s another example of the ‘velocity’ that’s integral to the industry we operate in, where a fast time-to-market on solutions and services is paramount. </p>
          <p className='mt-5 text-textcolor'>We’ll be showing two of our nSpire products at MWC. One for MNOs is nSpireCX, which helps improve customer experience and satisfaction levels with a device view of the network. It contributes to higher Net Promoter Scores (NPS) by identifying the causes of a negative network experience, highlighting areas for improvement to reduce churn and build closer customer relationships.</p>
          <p className='mt-5 text-textcolor'>Our nSpireAuto product is for automotive manufacturers, providing a unique vehicle view of mobile networks. It can help troubleshoot network issues by identifying performance degradation or optimise over-the-air updates by measuring coverage and network readiness.</p>
          <p className='mt-5 text-texthead font-[500] text-3xl'>Making smarter infrastructure investments</p>
          <p className='mt-5 text-textcolor'>Implementing  nSpire products immediately unlocks insights for a wide range of use cases. A common thread is finding the most cost-efficient way of giving end users a better experience – very topical at this year’s MWC where a large proportion of the conference agenda is about investment in mobile networks, finding better ways to extract value from increasingly complex infrastructure. </p>
          <p className='mt-5 text-textcolor'>What our customers do with the insights is as varied as the data we collect, from analysing mobile coverage in a specific building to the varying connection quality of a car driving across a country. Other use cases range from MNOs using nSpireCX  to determine where best to build out 5G infrastructure to support data hotspots in a city, to automotive manufacturers using nSpireAuto performance data to reduce the time vehicles spend in the garage. </p>
          <p className='mt-5 text-textcolor'>Expect a lot of talk at MWC about how operators and service providers can use open networks and APIs to offer different value propositions around cloud, IoT and 5G, but our argument is that a faster and more profitable route to market differentiation is in customer experience – and it’s not a future technology, it’s here and now with nSpire. We look forward to talking to you about it.</p>

          <Link href="/about/" className='my-10 underline hover:text-secondary font-[500]'>
            Learn more about the Endeavour Team
          </Link>
        </div>

      </div>


    </div>
  )
}

export default page