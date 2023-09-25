import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const Otp = () => {
    const {otpcode}=useContext(ThemeContext)
    const [one,setone]=useState('')
    const [two,settwo]=useState('')
    const [three,setthree]=useState('')
    const [four,setfour]=useState('')

    const confirmOTP = () =>{
        if(otpcode==one+two+three+four)
        {
            
        }
    }
  return (
    <>
    <div className='OPT-CENTER-MAIN'>

    <form class="form-otp">
        <div class="title">OTP
        </div> 
        <div class="title">Verification Code
        </div> 
        <p class="message">We have sent a verification code to your mobile number</p>
        <div class="inputs">
             <input value={one} onChange={(e)=>{setone(e.target.value)}} id="input1" type="text" maxlength="1"/>
             <input value={two} onChange={(e)=>{settwo(e.target.value)}} id="input2" type="text" maxlength="1"/>
            <input value={three} onChange={(e)=>{setthree(e.target.value)}} id="input3" type="text" maxlength="1"/>
            <input value={four} onChange={(e)=>{setfour(e.target.value)}} id="input4" type="text" maxlength="1"/>
                </div> <button class="action" onClick={confirmOTP}>verify me</button> </form>
    </div>

    </>
  )
}

export default Otp