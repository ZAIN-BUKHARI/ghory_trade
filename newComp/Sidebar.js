import React from 'react'
import Link from 'next/link'
import { FcAbout } from 'react-icons/fc';
import { FcBriefcase } from 'react-icons/fc';
import { FcBarChart } from 'react-icons/fc';
import { FcList } from 'react-icons/fc';
import { FcBusinessContact } from 'react-icons/fc';
import { FcAutomatic } from 'react-icons/fc';
import { FcLeft } from 'react-icons/fc';
import { FcServices } from 'react-icons/fc';
import { FcPhone } from 'react-icons/fc';
import { useRouter } from 'next/router';
const Sidebar = () => {
  const router = useRouter()
  return (
    <>
    {router.asPath!='/register' && router.asPath!='/login' && router.asPath!='/intro'  && (

      
    <aside className="sidebar text-[10px]">
      <div className="logo">
        <img src="/ONEE.png" alt="logo"/>
        {/* <h1 className='font-serif sizeText' >Ghory trading</h1> */}
        {/* <h1 class="section-title-sidebar">Ghory <span>Trading</span></h1> */}
      </div>
      <ul className="links">
        <h4 >Main Menu</h4>
        <li>
          <span className="material-symbols-outlined">
            <FcList/>
          </span>
        
          <Link href={'/'}>Dashboard</Link>
        </li>
        <li>
          <span className="material-symbols-outlined">
            <FcPhone/>
          </span>
          <Link  href={'/contact'}>Contact</Link>
        </li>
        <li>
          <span className="material-symbols-outlined">
            <FcServices/>
          </span>
          <Link href="/service">Service</Link>
        </li>
        <li>
          <span className="material-symbols-outlined">
            <FcBriefcase/>
          </span>
          <Link href="/project">Project</Link>
        </li>
        <li>
          <span className="material-symbols-outlined">
            {/* <Report/> */}
            <FcAbout />
          </span>
          <Link href="/about">About us</Link>
        </li>
        <hr/>
        <hr/>
        <h4>Account</h4>
        <li>
          <span className="material-symbols-outlined">
            <FcBarChart/>
          </span>
          <a href="#">Invest</a>
        </li>
        <li>
          <span className="material-symbols-outlined">
            <FcBusinessContact/>
          </span>
          <a href="#">Account</a>
        </li>
        <li>
          <span className="material-symbols-outlined">
            <FcAutomatic/>
          </span>
          <a href="#">Settings</a>
        </li>
        <li className="logout-link">
          <span className="material-symbols-outlined">
            <FcLeft/>
          </span>
          <Link href="/register">Logout</Link>
        </li>
      </ul>
    </aside>)}

    
    </>
  )
}

export default Sidebar