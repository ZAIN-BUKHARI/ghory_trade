import React from "react";
import {useRouter} from 'next/router'
const Footer = () => {
  const router = useRouter()
  
  if(!router.asPath.includes('/admin') && !router.asPath.includes('/admin') )
    return (
      <>
      
      <div className="bg-[#121212]">
      <div className="w-full h-[1px] bg-[#ffdb1a]"></div>
      <footer className="footer">
        <div className="p-8 flex justify-between">
          <span className="text-[#ffdb1a] font-bold">UGTRADING</span>
          <p className="text-[#ffdb1a] font-bold">All rights reserved.</p>
        </div>
      </footer>
      </div>
      </>
    );
};

export default Footer;
