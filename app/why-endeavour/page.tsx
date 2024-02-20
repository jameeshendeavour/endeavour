import ReadyToGet from '@/components/ReadyToGet'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col w-full h-auto items-center justify-center'>
        <p className='absolute text-white text-7xl font-semibold'>Why Endeavour?</p>
        <Image
          src="/why-endeavour.jpg"
          height={400}
          width={1000}
          alt="Why Endeavour"
          className='w-full h-[450px] object-cover'
        />
      </div>
      <div className='flex flex-col w-full h-auto items-center justify-center text-textcolor'>
        <div className='flex flex-col container max-w-[800px] items-center justify-center '>
          <p className='mt-10 text-4xl font-semibold text-center'>Delivering the Customer View of Mobile Networks</p>
          <p className='mt-10 font-semibold text-center text-[20px]'>Bringing clarity to wide-ranging use cases, Endeavour Technology assures the best possible customer experience</p>
          <p className='mt-10 text-[20px]'>Data is the new currency for Communication Service Providers, OEMs and IoT companies looking to maximise value in their go-to-market propositions. Finding new ways to collect, collate and analyse multiple data sources for granular insights into network performance is the only way to ensure experience exceeds expectations.</p>
          <p className='mt-10 text-[20px]'>The obstacles are performance anomalies and blindspots, features of mobile and IoT infrastructure that go unresolved with the network-only view. There is a gap between what network data says is happening and the real-world experience of individual users and devices.</p>
          <p className='mt-10 text-[20px]'>Endeavour’s nSpire platform provides a unique device-view of mobile network performance. Essentially, we ‘mind the gap’, the gap left by the network view, which misses the data that illuminates the experience of the user and the performance of the device. </p>
        </div>
      </div>

      <div className='flex flex-row container max-w-[1200px] items-center justify-center text-textcolor my-10'>
        <div className='flex flex-col '>
          <p className='text-4xl font-semibold'>Customer View of the Network</p>
          <p className='mt-10 text-[20px]'>Dig down into individual experiences by taking the device perspective and benefit from granular insights enabled by Endeavour’s patented technology.</p>
        </div>
        <Image src="/photo-cubes.jpg" height={600} width={600} alt="Cube Map" className='rounded-md' />
      </div>

      <div className='flex flex-row container max-w-[1200px] items-center justify-center text-textcolor my-10'>
        <Image src="/photo-glass.jpg" height={600} width={600} alt="Cube Map" className='rounded-md ' />
        <div className='flex flex-col ml-10'>
          <p className='text-4xl font-semibold'>Single Pane of Glass</p>
          <p className='mt-10 text-[20px]'>nSpire provides a one-window view of any device on any network, anywhere in the world, regardless of mobile operator, operating system or location. </p>
        </div>
      </div>

      <div className='flex flex-row container max-w-[1200px] items-center justify-center text-textcolor my-10'>
        <div className='flex flex-col '>
          <p className='text-4xl font-semibold'>Granular reports and insights</p>
          <p className='mt-10 text-[20px]'>After processing the data, nSpire surfaces it in dashboards and reports where it can be tailored to deliver the actionable insights that matter most to your business.</p>
        </div>
        <Image src="/photo-data-usa.jpg" height={600} width={600} alt="Cube Map" className='rounded-md ml-10' />
      </div>

      <div className='flex flex-row container max-w-[1200px] items-center justify-center text-textcolor my-10'>
        <Image src="/photo-streets.jpg" height={600} width={600} alt="Cube Map" className='rounded-md ' />
        <div className='flex flex-col ml-10'>
          <p className='text-4xl font-semibold'>Collate multiple data sources</p>
          <p className='mt-10 text-[20px]'>With smart feeds and open architecture, Endeavour lets you collect and collate data from other systems and use machine learning to model the data and pursue even deeper analytics. </p>
        </div>
      </div>
      <ReadyToGet />
    </div>
  )
}

export default page