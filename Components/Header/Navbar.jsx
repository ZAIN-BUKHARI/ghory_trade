import React,{useState,useEffect, useContext} from 'react'
import Link from 'next/link'
import { toast } from "react-toastify";
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/solid"
import { ThemeContext } from '../../Context/ThemeContext'
import {useRouter} from 'next/router'
import axios from 'axios'
const Navbar = () => {
  const router = useRouter();
  const {openModal,setOpenModal,toggleModal,logout,review,subscription,Admin,mobile} = useContext(ThemeContext)
  const [isUser,setIsUser]=useState(false)

  function fetchDailyWork()
    {
      setOpenModal(false)
      try{
        axios.get('/api/get/links').then(res=>{
          if(res.data.links[0]==undefined){
            toast.info("Tasks are not uploaded", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }else{
          router.push('/daily-Tasks')
          }     
      })
    }catch(e)
    {
      router.push('/')
    }
  }
  useEffect(()=>{
    let token = localStorage.getItem('token') 
    if(token==null|| token=='no')
    {
      setIsUser(false)
    }else{
      setIsUser(true)
    }
  })

  
  // dd 
 
  if(!router.asPath.includes('/admin'))
  {

  return (
    <>
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
        <Link href={"/"} className='text-5xl bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent font-semibold'>UG-TRADING</Link>
        <div className='mobile-menu block md:hidden'>
        
        {!isUser && <Link href={"/authentication?page=signin"} onClick={()=>setOpenModal(false)} className='block py-2 pl-3 pr-4 bg-gradient-to-br font-bold from-white via-[#ffdb1a]  to-transparent sm:text-3xl rounded md:p-0 '>Login</Link>}
         
          {
            !openModal && isUser &&
            (
              <button onClick={()=>{setOpenModal(true)}} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'><Bars3Icon className='h-5 w-5 '/></button>
            )
          }
          {   
            openModal && isUser && (
              <button onClick={()=>{setOpenModal(false)}} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'><XMarkIcon   className='h-5 w-5   '/></button>

            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className=''>
            <li className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
              <Link href={"/"} onClick={()=>setOpenModal(false)} className='block py-2 pl-3 pr-4 bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent sm:text-3xl rounded md:p-0 '>Home</Link>
              <Link href={"/profit-chart"} onClick={()=>setOpenModal(false)} className='block py-2 pl-3 pr-4 bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent sm:text-3xl rounded md:p-0 '>Charts</Link>
              <Link href={"/currency"} onClick={()=>setOpenModal(false)} className='block py-2 pl-3 pr-4 bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent sm:text-3xl rounded md:p-0 '>Currency</Link>
              {!isUser && <Link href={"/authentication?page=signin"} onClick={()=>setOpenModal(false)} className='block py-2 pl-3 pr-4 bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent sm:text-3xl rounded md:p-0 '>Login</Link>}
             {isUser && <button onClick={toggleModal}  className='block py-2 pl-3 pr-4 bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent sm:text-3xl rounded md:pl-5 '><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-8">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
</svg>
</button>}
            </li>
          </ul>
        </div>
      </div>
      
      {/* {openModal  ? <MenuOverlay fetchDailyWork={fetchDailyWork}  /> : null} */}
    </nav>
    {openModal && (
        <div className={`bg-[#121212]  border-2 border-[#ffdb1a] md:h-[500px] h-[560px] w-72 absolute right-20 rounded-[50px] top-[70px] z-10`}>
          <ul>
            {/* <li className='text-[#ffdb1a] hover:text-slate-600 mt-5  pl-[45px] pt-5 font-bold text-2xl'><Link className='border-b-[1px] border-red  hover:p-3 hover:border-slate-600 border-[#ffdb1a]' href="/chart">Charts</Link></li> */}
          {Admin && !mobile && <li className='text-[#ffdb1a] hover:text-slate-600  mt-10   pl-[45px] pt-5 font-bold text-2xl'><Link href="/admin" onClick={()=>setOpenModal(false)} className='border-b-[1px] hover:p-3 hover:border-slate-600 border-red border-[#ffdb1a]' >Admin</Link></li>}
          {review=="no" &&  <li className='text-[#ffdb1a] hover:text-slate-600  mt-10   pl-[45px] pt-5 font-bold text-2xl'><Link href="/investment" onClick={()=>setOpenModal(false)} className='border-b-[1px] hover:p-3 hover:border-slate-600 border-red border-[#ffdb1a]' >Investment</Link></li>}
        {subscription=="yes" && <li className='text-[#ffdb1a] hover:text-slate-600  mt-10   pl-[45px] pt-5 font-bold text-2xl'><span onClick={fetchDailyWork}  className=' cursor-pointer border-b-[1px] hover:p-3 hover:border-slate-600 border-red border-[#ffdb1a]' >Work</span></li>}
            <li className='text-[#ffdb1a] hover:text-slate-600  mt-10   pl-[45px] pt-5 font-bold text-2xl'><Link href="/funds-Withdrawal" onClick={()=>setOpenModal(false)} className='border-b-[1px] hover:p-3 hover:border-slate-600 border-red border-[#ffdb1a]'>Withdrawals</Link></li>
            <li className='text-[#ffdb1a] hover:text-slate-600  mt-10   pl-[45px] pt-5 font-bold text-2xl'><Link href="/qrcode" onClick={()=>setOpenModal(false)} className='border-b-[1px] hover:p-3 hover:border-slate-600 border-red border-[#ffdb1a]'>Invite</Link></li>
            {mobile &&   <li className='text-[#ffdb1a] hover:text-slate-600  mt-10   pl-[45px] pt-5 font-bold text-2xl'><Link href="/profit-chart" onClick={()=>setOpenModal(false)} className='border-b-[1px] hover:p-3 hover:border-slate-600 border-red border-[#ffdb1a]'>Charts</Link></li>}
            {mobile &&   <li className='text-[#ffdb1a] hover:text-slate-600  mt-10   pl-[45px] pt-5 font-bold text-2xl'><Link href="/currency" onClick={()=>setOpenModal(false)} className='border-b-[1px] hover:p-3 hover:border-slate-600 border-red border-[#ffdb1a]'>Currency</Link></li>}
            <li className='text-[#ffdb1a] hover:text-slate-600  mt-10   pl-[45px] pt-5 font-bold text-2xl'><Link href="/team-Details" onClick={()=>setOpenModal(false)} className='border-b-[1px] hover:p-3 hover:border-slate-600 border-red border-[#ffdb1a]'>Team</Link></li>
            <li className='text-[#ffdb1a] hover:text-slate-600  mt-10   pl-[45px] pt-5 font-bold text-2xl'><Link href="/history" onClick={()=>setOpenModal(false)} className='border-b-[1px] hover:p-3 hover:border-slate-600 border-red border-[#ffdb1a]'>History</Link></li>
            <li className='text-[#ffdb1a] cursor-pointer hover:text-slate-600  mt-10   pl-[45px] pt-5 font-bold text-2xl'><span onClick={logout}  className='border-b-[1px] hover:p-3 cursor-pointer hover:border-slate-600 border-red border-[#ffdb1a]'>Logout</span></li>
          </ul>
        </div>
      
        )}
    </>

  )
}

}

export default Navbar