import React,{ useContext,useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import axios from 'axios';
import { toast } from "react-toastify";

const FormModal = () => {
    //useContext
    const {setPaymentRequestModal,balance} = useContext(ThemeContext)

    //STATE VARIABLES
    
    const [address,setaddress]=useState("")
    const [method,setmethod]=useState("TRC20")
    const [amount,setamount]=useState("")
  

    const requestSubmit = () =>{

      if(address.length>=5 
        // && parseInt(amount)>0 && parseInt(amount)<=balance
        ){
          const Data = {method,address,amount,email:"ded"}
          axios.post('/api/user/request',Data).then(res=>{
            alert("done")
            if("true"=="true"){
              toast.success("Your withdrawal request is in processing state it will take 12 to 24 hour", {
                position: "top-right",
                autoClose: 30000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setPaymentRequestModal(false)
            }else{
              toast.error("Try again ", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setPaymentRequestModal(false)
            }
          })
      }

    }

  return (
    <>
    <div className='FormModal'>
    <div class="card">
    <div class="card__title">withdraw Request<span onClick={()=>{setPaymentRequestModal(false)}} className='Form-modal-cross'>X</span></div>
    <p class="card__content">After submit your request will go to the admin and it will release your assests to your selected payment method.
    </p>
    <div class="card__form">
        <input placeholder="Your Amount" value={amount} onChange={(e)=>{setamount(e.target.value)}}  type="text"/>
        <div className='form-modal-select'>

        <select 
                  name="select"
                  value={method} onChange={(e)=>{setmethod(e.target.value)}} 
                  className="PlanForm-select modal-select"
                >
                  <option value={"TRC20"}>TRC20</option>
                  <option value={"JAZZCASH"}>JAZZCASH</option>
                  <option value={"EASYPAISA"}>EASYPAISA</option>
                  <option value={"RASS"}>RASS</option>
                </select>
        <input value={address} onChange={(e)=>{setaddress(e.target.value)}} placeholder="Your Wallet Address or Number" type="text"/>
                    </div>
        <button onClick={requestSubmit} class="sign-up"> Submit Request</button>
    </div>
</div>
    </div>
    </>
  )
}

export default FormModal