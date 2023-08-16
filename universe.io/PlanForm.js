import React, { useState } from 'react'

const PlanForm = () => {
  const [currency,setcurrency]=useState("USD")
  const [amount,setamount]=useState()
  const [usderror,seterror]=useState(false)
  const [pkrerror,setpkrerror]=useState(false)
  
  const ChangeEvent = (e) =>{
    if(e.target.name=="select"){
      setcurrency(e.target.value)
    }

    else if(e.target.name=="amount"){
      if(currency=="USD" && e.target.value<100){
        seterror(true)
        setpkrerror(false)
      }
      else if(currency=="PKR" && e.target.value<30000){  
        setpkrerror(true)
        seterror(false)
      }
      else {
        seterror(false)
        setpkrerror(false)
      }
      }

  }
  return (

    <>
    <style>
      {`
      #custom-button {
        margin-top:20px;
        margin-left:2px;
        padding: 10px;
        color: white;
        // background-color: #009578;
        background: linear-gradient(135deg, #71b7e6, #9b59b6);
        border: 1px solid #000;
        border-radius: 5px;
        cursor: pointer;
      }
      
      #custom-button:hover {
        // background-color: #00b28f;
      }
      
      #custom-text {
        margin-left: 10px;
        font-family: sans-serif;
        color: #aaa;
      }
      .Address{
        font-size:15px;
        font-weight: 500;
      }
      .wallet{
        font-size:20px;
        font-weight: 900;
        
      }
     
      `}
    </style>
  <div className='PlanForm-Head'>

  <div class="Invest-Container">
    <div class="title  space"> Yearly Plan<span className='Address'><span className='wallet'>TRC20 : </span>TXM2g5Dw2u1woTSjFZucA5p3sBqiNDA4HP</span></div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required/>
          </div>
          <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" required/>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email" required/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required/>
          </div>
          <div class="input-box">
            <span class="details">Address</span>
            <input type="text" placeholder="Enter your Address" required/>
          </div>
          <div class="input-box">
            <span class="details">Cnic</span>
            <input type="text" placeholder="Enter your Cnic" required/>
          </div>
          <div class="input-box">
            <span class="details">Amount</span>
            <div className='flex'>

            <select value={currency} name='select' onChange={ChangeEvent} className="PlanForm-select">
                   <option value={'USD'}>USD</option>
                   <option value={'PKR'}>PKR</option>
              </select>
            <input type="number" value={amount} onChange={ChangeEvent} name='amount' placeholder="Enter your Amount" required/>
            </div>
            {usderror && <span class="PlanForm-Amount-error">Minimum Amount 100$</span>}
            {pkrerror && <span class="PlanForm-Amount-error">Minimum Amount 3000PKR</span>}
          </div>
          <div class="input-box">
          <input type="file" id="real-file" hidden className='PlanForm-ScreenShot' />
<button type="button" id="custom-button">Payment Screenshot</button>
<span id="custom-text">No file chosen, yet.</span>
          </div>
        </div>
        {/* <div class="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Prefer not to say</span>
            </label>
          </div>
        </div> */}
        
        <div class="button">
          <input type="submit" value="Subscribe"/>
        </div>
      </form>
    </div>
  </div>
  </div>
  

    </>
  )
}

export default PlanForm