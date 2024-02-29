import BlogTitle from '@/components/BlogTitle'
import EBookForm from '@/components/EBookForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-normal items-center '>
      <div className='flex flex-col justify-normal items-center container max-w-[1200px]'>
        <BlogTitle title='nSpireAuto Ebook' date="2023-06-27" category='Ebooks' />
        <p className='font-[500] text-texthead text-xl'>How to own the in-car digital experience – A guide for OEMs</p>
        <div className='flex flex-col justify-start text-lg text-textcolor max-w-[800px]'>
          <p className='mt-5'>The automobile sector is witnessing a revolutionary transformation at a time when insiders in the industry are referring to cars as “smartphones on wheels.” What was once a realm of gradual evolution has now become a landscape of unprecedented disruption.</p>
          <p className='mt-5'>According to Ericsson, Statistica predicts that by 2030, a staggering 96% of all vehicles shipped will be equipped with built-in connectivity. This seismic shift in the industry is set to create a substantial value pool ranging between $450 to $750 billion.</p>
          <p className='mt-5'>To delve deeper into the remarkable opportunities awaiting OEMs in this rapidly evolving marketplace, we invite you to download the nSpireAuto eBook.</p>
        </div>

        <Image
          className='w-1/2 object-contain rounded-lg mt-5'
          src="/automotive-exp.jpg"
          width={600}
          height={1000}
          alt='nspire UI'
        />
        <div className='flex flex-col justify-normal items-center max-w-[800px] mt-10'>
          <EBookForm />
        </div>

      </div>


    </div>
  )
}

export default page