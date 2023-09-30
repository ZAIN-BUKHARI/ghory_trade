import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

const Contact = () => {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [msg,setmsg]=useState('')

  const Submit = () =>{
    const data = {name,email,msg}
    axios.post('/api/post/contactemail',data).then(res=>{if(res.data.success==true){setemail('');setmsg('');setname('');
    toast.success('Thanks for contacting us ', {
      position: "top-center",
      autoClose: 50000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
     });}})
  }
  return (
    <>
   
   
    
    <div className="containerContact">
      <div className="">        
        <div className="contact-form">
          <form  id="contact-form">
            <h2>Send Message</h2>
            <div className="input-box">
              <input onChange={(e)=>{setname(e.target.value)}} type="text" required name=""/>
              <span>Full Name</span>
            </div>
            
            <div className="input-box">
              <input onChange={(e)=>{setemail(e.target.value)}} type="email" required name=""/>
              <span>Email</span>
            </div>
            
            <div className="input-box">
              <textarea onChange={(e)=>{setmsg(e.target.value)}}  required name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div className="input-box">
              <input onClick={Submit} type="submit" value="Send" name=""/>
            </div>
          </form>
        </div>
        
      </div>
    </div>
 
    </>
  )
}

export default Contact