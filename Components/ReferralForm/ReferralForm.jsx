import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { ThemeContext } from "../../Context/ThemeContext";
import OtpPage from '../OTP/Otp'

const ReferralForm = () => {
      //useContext
      const {setLoader,token,mobile} = useContext(ThemeContext)
      //STATE VARIABLES
      const [firstname,setfirstname]=useState("")
      const [lastname,setlastname]=useState("")
      const [email,setemail]=useState("")
      const [number,setnumber]=useState("")
      const [password,setpassword]=useState("")
      const [cpassword,setcpassword]=useState("")
      const [address,setaddress]=useState()
      const [cnic,setcnic]=useState("")
    
    
      //showpasss type
      const [otp,setotpcode]=useState('')
      const[switchUI,setSwitchUI]=useState(false);

    
      //useRouter
      const router=useRouter()
      const {_id}=router.query

     

    

const signup = (e) => {
      e.preventDefault();
      setLoader(true)
      if(firstname.length!="" && lastname.length!="" && email.length!="" && password.length!="" && cpassword.length!="" && address.length!="" && cnic.length!="" && number.length!="")
      {
      if(email.includes("@"))
      {
      if(password==cpassword)
      { 
      if(password.length>=10){
        const data = { email };
        axios.post("/api/post/otp", data).then((res) => {
          if (res.data.success == true) {
            setLoader(false)
            setSwitchUI(true)
            setotpcode(res.data.otp)
          } else {
            setLoader(false)
            toast.error(res.data.error, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        }).catch(e=>{alert('Check your network');setLoader(false)});
      }
      else{
      toast.error('Password must be 10 characters', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoader(false)
      }
      }
      else{
      toast.error('Password not match', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoader(false)
      }
      }
      else{
      toast.error('Email is not correct ', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoader(false)
      }
      }
      else{
        toast.error('Please fill form ', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoader(false)
      }
      };
    
  
    

 

//  if(!mobile)
//  {

  return (
    <>
     {switchUI && <OtpPage firstname={firstname} lastname={lastname} email={email} password={password}  cpassword={cpassword} address={address} cnic={cnic} number={number} setSwitchUI={setSwitchUI} _id={_id} otp={otp} type={"referral"} />} 
    {!switchUI && ( 

    <>
    {token  && (
      <div className="font_family mt-[70px] flex h-[100vh] justify-center items-center p-[10px] bg-[#121212]">
        <div className="!h-[500px] Invest-Container">
          <div className=" title text-[#ffdb1a]">
            {" "}
            <span  className="planform-main-web-title  text-[#ffdb1a]">
            Join Team 
            </span>
            <span className="Address">
              <span className="wallet">
                

              </span>
          
            </span>
          </div>
          <div className="content">
            <form action="#" >
              <div className="user-details">

                <div className="input-box">
                  <span className="details text-[#ffdb1a] ">First Name</span>
                  <input
                  className=""
                    type="text"
                    value={firstname}
                    placeholder='Enter your first name'
                    onChange={(e)=>setfirstname(e.target.value)}
                    required
                  />

                </div>
                <div className="input-box">
                  <span className="details text-[#ffdb1a]">Last Name</span>
                  <input
                    type="text"
                    value={lastname}
                    onChange={(e)=>setlastname(e.target.value)}
                    placeholder='Enter your last name'
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="details text-[#ffdb1a]">Email</span>
                  <input
                    type="text"
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    placeholder='Enter your email'
                    required
                  />
                </div>

                
               <div className="input-box">
                  <span className="details text-[#ffdb1a]">Number</span>
                  <input
                    type="text"
                    value={number}
                    onChange={(e)=>setnumber(e.target.value)}
                    placeholder="Enter your Number"
                    required
                  />
                </div>

               <div className="input-box">
                  <span className="details text-[#ffdb1a]">Password</span>
                  <input
                    type="text"
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                    placeholder="Enter your Password"
                    required
                  />
                </div>
               <div className="input-box">
                  <span className="details text-[#ffdb1a]">Confirm Password</span>
                  <input
                    type="text"
                    value={cpassword}
                    onChange={(e)=>setcpassword(e.target.value)}
                    placeholder="Confirm your Password"
                    required
                  />
                </div>
               <div className="input-box">
                  <span className="details text-[#ffdb1a]">Address</span>
                  <input
                    type="text"
                    value={address}
                    onChange={(e)=>setaddress(e.target.value)}
                    placeholder="Enter your Address"
                    required
                  />
                </div>
               <div className="input-box">
                  <span className="details text-[#ffdb1a]">CNIC</span>
                  <input
                    type="text"
                    value={cnic}
                    onChange={(e)=>setcnic(e.target.value)}
                    placeholder="Enter your CNIC"
                    required
                  />
                </div>

                
              
               

                        
                    
                  
              </div>
              
              <div className="button-webview ">
             <input className="bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent hover:bg-gradient-to-r hover:from-white hover:via-[#ffdb1a] hover:to-[#ffdb1a]" type="submit" value="Subscribe" onClick={signup} />
              </div>
             
    

            </form>
          </div>
        </div>
        
      </div>)}
      <style>{`
     
      .PlanForm-select-usd {
        -moz-appearance: none;        
        -webkit-appearance: none;
        appearance: none;
      }
      .youtube-logo-planform-size{
        height:15px;
        width:15px;
      }
      .youtube-logo-planform-title-size{
        padding-top:50px;
      }
      .flexing-span-plan-form{
        display:flex !important;
        
      }
      .img-planfirm-upload-top{
        // margin-top:10px;
        // margin:auto;
        width:70px;
        height:70px;
        // margin-right:20px;
      }
      .img-planfirm-upload{
        margin-top:10px;
        margin:auto;
        width:50px;
        height:50px;
      }
      .space{
        // margin-bottom:10px;
        margin-left:250px;
      }
      .space-mobile{
        // margin-bottom:10px;
        // margin-left:100px;
      }
      `}</style>
    </>
     )}
    </>
  );


};

export default ReferralForm;
