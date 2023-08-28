import React,{ useContext,useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import axios from 'axios';
import { toast } from "react-toastify";

const Request = () => {
    //useContext
    const {setPaymentRequestModal,balance,email,mobile} = useContext(ThemeContext)

    //STATE VARIABLES
    
    const [address,setaddress]=useState("")
    const [method,setmethod]=useState("TRC20")
    const [amount,setamount]=useState(0)
  
  //  derecemting in balance method is remaining
    const requestSubmit = async () =>{
    if(address.length==0 && amount==0  
      ){
        toast.error("Cannot submit empty request", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })

      }else{


        if( amount>0 &&amount<=balance
          ){
          const data = {method,address,amount,email}
          let res = await axios.post('/api/post/request',data)
            if(res.data.success==true){
              toast.success("Your withdrawal request is in processing state it will take 12 to 24 hour", {
                position: "top-right",
                autoClose: 30000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
              setPaymentRequestModal(false)
            }
            else{
              toast.error("Withdrawal request failed try again! ", {
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
          
      }
      else{
              toast.error("insufficient balance ", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });

            }
      }


    }
if(mobile){
  return (
    <>
    <div className='FormModal'>
    <div className='card-responsive'>
    <div className="card__title-mobile">withdraw Request<span onClick={()=>{setPaymentRequestModal(false)}} className='Form-modal-cross'>X</span></div>
    <p className="card__content">After submit your request will go to the admin and it will release your assests to your selected payment method.
    </p>
    <div className="card__form">
        <input placeholder="Your Amount" value={amount} onChange={(e)=>{setamount(e.target.value)}}  type="number"/>
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
        <button onClick={requestSubmit} className="sign-up mobile-button"> Submit Request</button>
    </div>
</div>
    </div>
    </>
  )
}
  else{
    return (
      <>
      <div className='FormModal'>
      <div className='card'>
      <div className="card__title">withdraw Request<span onClick={()=>{setPaymentRequestModal(false)}} className='Form-modal-cross'>X</span></div>
      <p className="card__content">After submit your request will go to the admin and it will release your assests to your selected payment method.
      </p>
      <div className="card__form">
          <input placeholder="Your Amount" value={amount} onChange={(e)=>{setamount(e.target.value)}}  type="number"/>
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
          <button onClick={requestSubmit} className="sign-up"> Submit Request</button>
      </div>
  </div>
      </div>
      </>
    )
  }
}

export default Request