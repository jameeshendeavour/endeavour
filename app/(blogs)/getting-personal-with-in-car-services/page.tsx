import BlogTitle from '@/components/BlogTitle'
import EBookForm from '@/components/EBookForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-normal items-center '>
      <div className='flex flex-col justify-normal items-center container max-w-[1200px]'>
        <BlogTitle title='Getting personal with in-car services' date="2023-03-09" category='Blogs' />
        <div className='flex flex-col justify-start text-lg text-textcolor max-w-[800px]'>
          <Image
            className='w-full object-cover rounded-lg '
            src="/endeavour-road.jpg"
            width={600}
            height={1000}
            alt='nspire UI'
          />
          <p className='mt-5 text-textcolor'>Last week’s Mobile World Congress (MWC) was another reminder of how quickly the car is being reinvented and turned into a four-wheeled mobile device. Along with mobile phone manufacturers parading their latest handsets were automotive companies and their technology partners, unveiling radical innovation around in-car information and entertainment experiences.</p>
          <p className='mt-5 text-textcolor'><Link href="https://endeavourtechnology.com/" className='underline'>Endeavour</Link> was there too, and we found ourselves fitting neatly into this fast developing market segment, where our role with <Link href="/solutions/nspire-auto" className='underline'>nSpire Auto</Link> is to give service providers the device or vehicle view of the network, a necessity if they want to ensure the customer has the best possible experience. It’s going to be fundamental for carmakers in particular, as they look to differentiate and sell new types of services to their customers.</p>
          <p className='mt-5 text-texthead font-[500] text-4xl'>Application ecosystems</p>
          <p className='mt-5 text-textcolor'>Attracting a lot of interest was the Volkswagen Group introducing an ‘app store for vehicles’, developed by Cariad with Harman, a Samsung company. Part of an infotainment system in the next generation of Audi and Porsche cars, the bundle of apps includes Spotify, Tik Tok, Yelp, Cisco’s Webex and Home Assistant, the smart home platform.</p>
          <p className='mt-5 text-textcolor'>Volkswagen integrates their own in-car applications into the package, such as online traffic light information and navigation, creating a comprehensive ecosystem of services that will simplify choice and access. The company talks about providing vehicle owners with a different kind of digital experience that seamlessly connects their car to their digital life.</p>
          <p className='mt-5 text-textcolor'>Mercedes has gone a different route, targeting executive business users of its E-Class vehicles. The idea is to give them an ‘optimal office experience’ by partnering Cisco and bringing the comms company’s Webex conferencing solution into the vehicle. It comes with enhanced audio when out on the road, complete with noise cancellation and voice enhancement features, and gets even more feature rich when the car is parked, not just with the option of video but also with AI-powered automatic transcription and content sharing.</p>
          <p className='mt-5 text-textcolor'>There are challenges in encouraging the adoption of such services in vehicles, particularly when they are trying to emulate the user’s other digital experiences or are ‘business critical’ in the case of the Mercedes/Cisco  proposition. Even with the ubiquity of 4G, network coverage, speed and latency can severely impact  the in-car experience, something that fixed-line broadband services have largely solved.</p>
          <p className='mt-5 text-textcolor'>What <Link href="/solutions/nspire-auto" className='underline'>nSpire Auto</Link> does is expose the vagaries of mobile connections that can undermine connected car services, by revealing the quality of the network with a device view of coverage, speed and latency. It gives automotive manufacturers visibility, and therefore some control over the service that MNOs (Mobile Network Operators) provide.</p>
          <p className='mt-5 text-textcolor'>Our dashboards also present visualisations of app usage within the car, providing powerful insights into customer behaviour and preferences.  As a growing number of applications and services target the in-car infotainment market, the ability of manufacturers to see what works with their customers – and how consumption might vary across different makes and models – will be paramount when it comes to forging content partnerships.</p>
          <p className='mt-5 text-texthead font-[500] text-4xl'>Innovative services</p>
          <p className='mt-5 text-textcolor'>Endeavour is unusual in providing a device view of the network, but far from alone in recognising the performance challenges around the connected vehicles. There was plenty of innovation on show at MWC, notably the announcement of the Digital Chassis platform by Qualcomm. It integrates ADAS (Advanced Driver Assistance systems), connectivity  and the firm’s new Snapdragon Auto platform to provide lower latency for streaming content on multiple devices simultaneously, giving both drivers and passengers a more personalised experience.</p>
          <p className='mt-5 text-textcolor'>Harman’s Digital Cockpit Platform also integrates ADAS, telematics and OTA connections to cloud services, pointing to a future where car manufacturers will be able to offer different types of personalisation around car features and functionality. A real taste of things to come was its Augmented Reality (AR) platform, which merges the physical and digital worlds to create real-time overlays onto the road surface without obstructing the driver’s view.</p>
          <p className='mt-5 text-textcolor'>Vay is another company that shows the future is closer than we think, with an innovative Mobility-as-a-Service solution that encompasses automated driving and car sharing. Customers hire an electric vehicle via the Vay app prompting a ‘teledriver’ to bring the car directly to the pick-up location, remotely controlled from the teledrive centre. The customer takes over the driving until they arrive at the destination and then it’s back to the teledriver to bring it back.</p>
          <p className='mt-5 text-textcolor'>In all of the above, the resilience and reliability of the services will be essential if they are to  be successful, largely determined by the quality of the in-car connection. Endeavour has the capability to help improve all of them. The beauty of <Link href="/solutions/nspire-auto" className='underline'>nSpire Auto</Link> is that multiple software agents can be installed in vehicle TCUs and modems, where they can capture and analyse key performance and usage metrics along with customer and network identifiers unobtainable from MNOs. There are multiple use cases for what we do that will be important to automotive manufacturers as they look to integrate a new wave of connected car services into their vehicles. What’s clear is that the ability to visualise how apps are used, as well as the quality of the connectivity, is only going to become more important as competition in the market hots up.</p>




          <Link href="/solutions/nspire-auto" className='my-10 underline hover:text-secondary font-[500]'>
            Learn more about nSpireAuto
          </Link>
        </div>

      </div>


    </div>
  )
}

export default page