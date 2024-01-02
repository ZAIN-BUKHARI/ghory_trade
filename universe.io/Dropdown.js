import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { toast } from "react-toastify";
import { ThemeContext } from '../Context/ThemeContext';
const Dropdown = ({teamlength,title,type,subtitle}) => {
  const {subscription}=useContext(ThemeContext)
  const router = useRouter()
  async function teamExistenceChecker()
  { 
      if(teamlength==0)
      {
        toast.info("Build Your Team", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }else
        router.push('/detail')
  }
  async function userPlanDetail()
  { 
      if(subscription=="no")
      {
        toast.info("Join Our Plan", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }else
        router.push('/plan-Details')
  }
  
  return (
    <>
    <label class="popup">
  <input type="checkbox"/>
  <div class="burger" tabindex="0">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <nav class="popup-window">
    <legend>{subtitle}</legend>
    <ul className='ul-dropdown'>
        
    </ul>
   {type==1 && <p onClick={teamExistenceChecker} className='p-dropdown'>{title}</p>}
   {type==2 && <p onClick={userPlanDetail} className='p-dropdown'>{title}</p>}
  </nav>
</label>

    </>
  )
  
}

export default Dropdown