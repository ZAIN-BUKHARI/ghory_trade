import React,{ useContext,useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import axios from 'axios';
import { toast } from "react-toastify";
import { useEffect } from 'react';

const Request = () => {
    //useContext
    const {getBalanceCurrent,setLoader,setPaymentRequestModal,balance,email,mobile,Userid} = useContext(ThemeContext)

    //STATE VARIABLES
    
    const [address,setaddress]=useState("")
    const [method,setmethod]=useState("TRC20")
    const [amount,setamount]=useState(0)
    const [bankname,setbankname]=useState("")
    const [selrate,setselrate]=useState(0)
  
  const[ disable,setdisable]=useState(false)
  useEffect(()=>{
    setLoader(true)
    axios.get('/api/selrate/get').then(res=>{
      setselrate(res.data.rate.Selrate)
      setLoader(false)
    }).catch(e=>{
    setLoader(false)
    })
  },[])

  //  derecemting in balance method is remaining
    const requestSubmit = async () =>{
      setdisable(true)
      setLoader(true)
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
        setLoader(false)
      setdisable(false)
      }else{

        if(amount>=20){
        if( amount<=balance
          ){
          const data = {method,address,amount,email,bankname,Userid}
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
              setdisable(false)
              getBalanceCurrent()
              setLoader(false)
              
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
              setdisable(false)
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
      setdisable(false)
            }
      }else{
        toast.error("More than 20$ withdarwal allowed ", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setdisable(false)
      }
    }


    setLoader(false)
    };
if(mobile){
  return (
    <>
    <div className='FormModal'>
    <div className='card-responsive'>
    <div className="card__title-mobile">withdraw Request<span onClick={()=>{setPaymentRequestModal(false)}} className='Form-modal-cross'>X</span></div>
    <p className="card__content">After submit your request will go to the admin and it will release your assests to your selected payment method and 5% will deduct from your withdrawal amount.USD sell rate<strong className='bold-selrate'> ${selrate}</strong>
    </p>
    <div className="card__form">
        <input placeholder="Your Amount" className='request-mobile-tilt' value={amount} onChange={(e)=>{setamount(e.target.value)}}  type="number"/>
        <div className='form-modal-select'>

        <select 
                  name="select"
                  value={method} onChange={(e)=>{setmethod(e.target.value)}} 
                  className="PlanForm-select modal-select"
                >
                  <option value={"TRC20"}>TRC20</option>
                  {/* <option value={"JAZZCASH"}>JAZZCASH</option> */}
                  <option value={"EASYPAISA"}>EASYPAISA</option>
                  <option value={"BANK"}>BANK</option>
                  {/* <option value={"RASS"}>RASS</option> */}
                </select>
        <input value={address} onChange={(e)=>{setaddress(e.target.value)}} placeholder="Your Wallet Address or Number" type="text"/>
        {method=="BANK" &&  <input value={bankname} onChange={(e)=>{setbankname(e.target.value)}} placeholder="Your Bank Name" type="text"/>}
                    </div>

        <button onClick={requestSubmit} className="sign-up mobile-button"  disabled={disable}> Submit Request</button>
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
    <p className="card__content">After submit your request will go to the admin and it will release your assests to your selected payment method and 5% will deduct from your withdrawal amount.USD sell rate<strong className='bold-selrate'> ${selrate}</strong>

      </p>
      <div className="card__form">
          <input placeholder="Your Amount" className='request-mobile-tilt' value={amount} onChange={(e)=>{setamount(e.target.value)}}  type="number"/>
          <div className='form-modal-select'>
  
          <select 
                    name="select"
                    value={method} onChange={(e)=>{setmethod(e.target.value)}} 
                    className="  request-select-modal"
                  >
                    <option value={"TRC20"}>TRC20</option>
                    {/* <option value={"JAZZCASH"}>JAZZCASH</option> */}
                    <option value={"EASYPAISA"}>EASYPAISA</option>
                    <option value={"BANK"}>BANK</option>
                    {/* <option value={"RASS"}>RASS</option> */}
                  </select>
          <input value={address} onChange={(e)=>{setaddress(e.target.value)}} placeholder="Your Wallet Address or Number" type="text"/>
        {method=="BANK" &&  <input value={bankname} onChange={(e)=>{setbankname(e.target.value)}} placeholder="Your Bank Name" type="text"/>}
                      </div>
          <button onClick={requestSubmit} className="sign-up" disabled={disable}> Submit Request</button>
      </div>
  </div>
      </div>
      </>
    )
  }
}

export default Request