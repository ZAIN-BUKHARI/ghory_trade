import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

    
 

const HeroSection = () => {
  return (
    <>
     <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-cente text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffdb1a] to-[#ffdb1a]">
          UG-TRADING{" "}
        </span>
        </h1>

        <div className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">

        <TypeAnimation
      sequence={[
        'Usman Amir Ghory',
        3000,
        'Complete Investment Solution',
        3000,
        "Pakistan's First Earning Platform",
        3000
      ]}
      wrapper="span"
      speed={50}
      style={{ 
        color:'#ffdb1a',
        fontSize: '1.5em',
       display: 'inline-block' }}
      repeat={Infinity}
      />
      </div>
      {/* <p  className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptuous.</p> */}
        <div>
          <button className="px-6 py-3  rounded-full mr-4 bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent font-bold hover:bg-slate-200 text-black">Join Us</button>
          <button  className="px-1 py-1  rounded-full bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent hover:bg-slate-800 text-white  mt-3 ">
           <a href="UGTRADING.pdf" className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 font-bold " >Download Company PDF</a>
          </button>
        </div>
        </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="goldShadow rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
        <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="Shadow absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
        </div>
        </div>
        </motion.div>
      </div>
     
     </section>
    </>

  );
};

export default HeroSection;
