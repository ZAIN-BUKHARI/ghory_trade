import { useRouter } from 'next/router'
import React from 'react'
import { toast } from "react-toastify";
const Dropdown = ({teamlength}) => {
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
    <legend>Members</legend>
    <ul className='ul-dropdown'>
        

     
    </ul>
    <p onClick={teamExistenceChecker} className='p-dropdown'>Team List click me</p>
  </nav>
</label>

    </>
  )
  
}

export default Dropdown