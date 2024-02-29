import BlogTitle from '@/components/BlogTitle'
import EBookForm from '@/components/EBookForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-normal items-center '>
      <div className='flex flex-col justify-normal items-center container max-w-[1200px]'>
        <BlogTitle title='nSpire Cx Solution' date="2023-06-21" category='Datasheets' />
        <p className='font-[500] text-texthead text-xl'>Helping MNOs Improve NPS and Prioritise Infrastructure Expenditure</p>
        <div className='flex flex-col justify-start text-lg text-textcolor max-w-[800px]'>
          <p className='mt-5'><Link href='/solutions/nspirecx' className='underline'>nSpireCx</Link> by Endeavour Technology provides the customer’s perspective of their network experience.</p>
          <hr className='mt-5 h-[2px] bg-primary' />
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center max-w-[800px] gap-2 my-5 text-lg text-textcolor'>
          <div className='flex w-2/3 flex-col justify-start'>
            <p>The telecoms industry is facing significant challenges due to market pressure and economic uncertainty. Mobile Network Operators (MNOs) are looking to transition to standalone 5G networks and Open RAN infrastructure, but replacing legacy technology is difficult amidst declining revenues and increasing investment costs. MNOs also struggle to maintain high customer satisfaction scores, despite the importance of retaining customer loyalty.</p>
            <p className='mt-10 font-[500]'>Download the datasheet to learn:</p>
            <ul className='mt-5 list-disc list-inside'>
              <li className='ml-5'>nSpireCx benefits</li>
              <li className='ml-5'>How nSpireCx works</li>
              <li className='ml-5'>How nSpireCx Improves Net Promoter Score</li>
            </ul>
          </div>

          <div className='flex w-1/3 flex-col justify-start'>
            <Link href="https://26019833.fs1.hubspotusercontent-eu1.net/hubfs/26019833/nSpireCxDatasheet_Feb2023%20(1).pdf">
              <Image
                className='w-full object-cover rounded-lg '
                src="/nSpireCxDatasheet.jpg"
                width={600}
                height={1000}
                alt='nspire UI'
              />
            </Link>
            <Link href="https://26019833.fs1.hubspotusercontent-eu1.net/hubfs/26019833/nSpireCxDatasheet_Feb2023%20(1).pdf" className='mt-5'>
              <button
                className="hover:scale-105 transition delay-75  px-10 text-white text-[16px] font-semibold w-auto py-2.5  bg-secondary rounded-lg "
              >
                Download
              </button>
            </Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default page