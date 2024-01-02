import React from 'react'
import Image from 'next/image'

const About = () => {
 

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8  px-4 xl:gap-32 sm:py-16 xl:px-16'>
          <Image src="/avatar-3.png" width={500} height={500} />
          <div>
          <h2 className="text-6xl text-black font-bold bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent mb-4">About Us</h2>
            <p className="text-base  lg:text-3xl  text-[#ffdb1a] ">
            We are a dynamic trading company specializing in the exchange of
              commodities that drive global markets - oil, gold, and Bitcoin.
              With a deep understanding of the intricacies of these diverse
              assets, we navigate the ever-evolving landscape of international
              trade, utilizing advanced strategies and technologies to seize
              opportunities and manage risks effectively. Our commitment to
              integrity, innovation, and maximizing value for our partners
              defines our approach, making us a trusted player in the complex
              world of commodity trading.
            </p>
            {/* <div className='flex flex-row mt-8'>
                <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'>Skills</span>
                <span>Education</span>
                <span>Experience</span>
            </div> */}
          </div>
        </div>
    </section>
  )
}

export default About