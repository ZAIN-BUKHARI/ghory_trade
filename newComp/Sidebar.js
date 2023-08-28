import React,{useContext} from 'react'
import Link from 'next/link'
import { FcAbout } from 'react-icons/fc';
import { FcBriefcase } from 'react-icons/fc';
import { FcBarChart } from 'react-icons/fc';
import { FcList } from 'react-icons/fc';
import { FcBusinessContact } from 'react-icons/fc';
import { FcAutomatic } from 'react-icons/fc';
import { FcLeft } from 'react-icons/fc';
import { FcServices } from 'react-icons/fc';
import { FcLock } from "react-icons/fc";
import { FcPhone } from 'react-icons/fc';
import { useRouter } from 'next/router';
import { ThemeContext } from '../Context/ThemeContext';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';


const Sidebar = () => {
  const {setAuth,setPaymentRequestModal,token,settoken,subscription,router}=useContext(ThemeContext)
  const INVESTCHECKER = () =>{
     if(!token){
      toast.info('Login required', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
     }
     else
      router.push('/investment')
  }
  const Dailywork = () =>{
    if(!token || subscription=="no"){
      toast.info('Login required and subscribe our plan', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
     }
     else
      router.push('/work')
  }
  const withdraw =()=>{
  if(!token || subscription=="no"){
    toast.info('Login required and subscribe our plan', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
   }
   else
   setPaymentRequestModal(true)
 }
  const logout = () =>{
    localStorage.setItem('token','no')
    settoken(false)
  }
  return (
    <>
    {router.asPath!='/register' && !router.asPath.includes("admin") && router.asPath!="/dailywork" && router.asPath!='/test' && router.asPath!='/adminlogin'  && router.asPath!="/admin"  &&   router.asPath!='/login' && router.asPath!='/intro'  && (
     
      <aside className="sidebar text-[10px]">
      <div className="sidebar-logo">
        <img src="remove_bg.png" alt="logo"/>
        {/* <h1 className='font-serif sizeText' >Ghory trading</h1> */}
        {/* <h1 className="section-title-sidebar">Ghory <span>Trading</span></h1> */}
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
        {/* <li>
          <span className="material-symbols-outlined">
            <FcServices/>
          </span>
          <Link href="/service">Service</Link>
        </li> */}
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
          {/* //NOT LOGGIN */}
          {!token &&  <span className='SideBar-Investment-Span' onClick={INVESTCHECKER} >Invest</span>}
          {!token && <FcLock/>}
          {/* //LOGGIN */}
          {token  &&  <Link className='SideBar-Investment-Span' href={'/investment'} >Invest</Link>}

        </li>
        <li>
          <span className="material-symbols-outlined">
            <FcBusinessContact/>
          </span>
          {/* //NOT LOGGIN */}
          {/*  neither login nor subscription  */}
          {!token  && subscription=="no" && <Link  href={'#'}onClick={Dailywork} >Daily work </Link>}
          {!token  && subscription=="no" && <FcLock/>}
          {/*  login now but not has subscription  */}
          {token  && subscription=="no" && <Link  href={'#'}onClick={Dailywork} >Daily work </Link>}
          {token  && subscription=="no" && <FcLock/>}
          {/* user didnot login now but has subscription  */}
          {!token  && subscription=="yes" && <Link  href={'#'}onClick={Dailywork} >Daily work </Link>}
          {!token  && subscription=="yes" && <FcLock/>}
          
          {/* //LOGGIN */}
          {/* both login and subscription  */}
          {token  && subscription=="yes" && <Link  href="/work">Daily work </Link>}
          
          

        </li>
        <li>
          <span className="material-symbols-outlined">
            <FcAutomatic/>
          </span>
          {/* //NOT LOGGIN */}
          {/*  neither login nor subscription  */}
          {!token && subscription=="no" && <Link href={'#'} onClick={withdraw}  >widthdraw</Link>}
          {!token && subscription=="no" && <FcLock/>}
          {/*  login now but not has subscription  */}
          {token && subscription=="no" && <Link href={'#'} onClick={withdraw}  >widthdraw</Link>}
          {token && subscription=="no" && <FcLock/>}
          {/* user didnot login now but has subscription  */}
          {!token && subscription=="yes" && <Link href={'#'} onClick={withdraw}  >widthdraw</Link>}
          {!token && subscription=="yes" && <FcLock/>}
          {/* //LOGGIN */}
          {/* both login and subscription  */}
          {token && subscription=="yes" &&<Link onClick={()=>{setPaymentRequestModal(true)}} href="#">widthdraw</Link>}

        </li>
        <li className="logout-link">
          <span className="material-symbols-outlined">
            <FcLeft/>
          </span>
         {!token && <Link onClick={()=>{setAuth(true)}}  href={"#"}>Login</Link>}
         {!token && <FcLock/>}

         {token &&  <Link onClick={logout}  href="/">Logout</Link>}
        </li>
      </ul>
    </aside>)}

    
    </>
  )
}

export default Sidebar