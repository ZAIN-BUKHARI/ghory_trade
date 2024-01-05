import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { ThemeContext } from "../../Context/ThemeContext";
import Link from 'next/link';
import Script from "next/script";
import Navbar from '../Header/Navbar'
const Withdrawal = () => {
      //useRouter
      const router = useRouter()
      //useContext
      const {setLoader,token,Userid,mobile} = useContext(ThemeContext)

      //STATE VARIABLES
      
      const [email,setemail]=useState("no")
      const [Uname,setuname]=useState("no")
      const [lastname,setlastname]=useState("no")
      const [account,setaccount]=useState("")
      const [method,setmethod]=useState("TRC20")
      const [amount,setamount]=useState()
      const [bankname,setbankname]=useState("")
    
    const[ disable,setdisable]=useState(false)
    const[ hideBTN,setHideBTN]=useState(false)

    async function getUserDetails(){
      try{
  
        const email = localStorage.getItem('token')
        axios.get(`/api/get/userpersoneldetails?email=${email}`).then(res=>{
          if(res.success!=false){
              setuname(res.data.uname)
              setemail(res.data.email)
              setlastname(res.data.lastname)
              
            }else{
              router.push('/')

  
            }
            });  
        }catch(e){
        }
    }
    useEffect(() => {
      getUserDetails()
    },[])
    
  const networkErrorFunction=()=>
  {
    if(email=="no" || email=="")
    {
      toast.success("Network Error", {
        position: "top-right",
        autoClose: 30000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      router.push('/')
      setTimeout(() => {
        window.location.replace('/')
      }, 500);
    }
  }
    //  derecemting in balance method is remaining
    const requestSubmit = async (e) =>{
        e.preventDefault()
        alert('Checking Balance 👁')
        setdisable(true)
        setHideBTN(true)
        setLoader(true)
        
        networkErrorFunction()
        try{
        const data = {method,account,amount,email,bankname,Userid}
        const res = await axios.post('/api/post/request',data)
          if(res.data.success==true){
                toast.success("Your withdrawal request is in processing state it will take  24 hour", {
                  position: "top-right",
                  autoClose: 30000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                })
                setdisable(false)
                setLoader(false)
                router.push('/')
                setTimeout(() => {
                  window.location.reload() 
                }, 200);
          }
          else{
            setdisable(false)
            setHideBTN(false)
            setLoader(false)
            toast.error(res.data.error, {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
            });   
  }
}
  catch(e){
          setdisable(false)
          setLoader(false)
          toast.error('Network Error', {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
          }); 
          setHideBTN(false)
}
            
    };

 

//  if(!mobile)
//  {

  return (
    <>
    {token  && (
      <div className="font_family mt-[70px] flex h-[100vh] justify-center items-center p-[10px] bg-[#121212]">
        <div className="!h-[460px] goldShadow Invest-Container">
          <div className=" title text-[#ffdb1a]">
            {" "}
            <span  className=" text-[#ffdb1a]">
            {!mobile && "Withdrawal"} 
            </span>
            <span className="Address">
              <span className="wallet">
                <select
                  value={method}
                  name="select"
                  onChange={(e) => {
                    setmethod(e.target.value);
                  }}
                  className="PlanForm-select-main ml-[-25px] md:ml-[250px]"
                >
                  <option value={"Binance"}>Binance TRC20</option>
                  <option value={"KuCoin"}>KuCoin TRC20</option>
                  <option value={"OKX"}>OKX TRC20</option>
                  <option value={"EASYPAISA"}>EASYPAISA</option>
                  <option value={"NAYAPAY"}>NAYAPAY</option>
                  <option value={"BANK"}>Al-BARAKA</option>
                  {/* <option value={"WALLET"}>WALLET</option>  */}
                </select>

              </span>
          
            </span>
          </div>
          <div className="content">
            <form action="#" onSubmit={requestSubmit}>
              <div className="user-details">

                <div className="input-box">
                  <span className="details text-[#ffdb1a] ">First Name</span>
                  <input
                  className=""
                    type="text"
                    value={Uname=="no"?'':Uname}
                    placeholder={Uname=="no"?'Enter your first name':Uname}
                    readOnly={true}
                    required
                  />

                </div>
                <div className="input-box">
                  <span className="details text-[#ffdb1a]">Last Name</span>
                  <input
                    type="text"
                    value={lastname=="no"?'':lastname}
                    placeholder={lastname=="no"?'Enter your last name':lastname}
                    readOnly={true}
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="details text-[#ffdb1a]">Email</span>
                  <input
                    type="text"
                    value={email=="no"?'':email}
                    placeholder={email=="no"?'Enter your email':email}
                    readOnly={true}
                    required
                  />
                </div>

                
               <div className="input-box">
                  <span className="details text-[#ffdb1a]">AC/NO</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setaccount(e.target.value);
                    }}
                    placeholder="Enter your AC/NO"
                    required
                  />
                </div>

               <div className="input-box">
                  <span className="details text-[#ffdb1a]">Bank name</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setbankname(e.target.value);
                    }}
                    placeholder="Enter your Bank"
                    // required
                  />
                </div>

                
              
               

                              <div className="input-box">
                  <span className="details text-[#ffdb1a]">Amount</span>
                  <div className="flex">
                    
                  
                    <input
                      type="number"
                      value={amount}
                      onChange={(e)=>{setamount(e.target.value)}}
                      name="amount"
                      placeholder="Enter your Amount 💲"
                    />
                    <select
                      value={"USD"}
                      name="select"
                      className="PlanForm-select-usd"
                    >
                      <option value={"USD"}>USD</option>
                    </select>
                  </div>
                  { amount>=0 && amount < 20 && amount!="" &&
                    (
                      <span className="PlanForm-investment-error">
                        Minimum Withdawal 20$
                      </span>
                    )}
                  
                  
                </div>
              </div>
              
          {!hideBTN &&  <div className="button-webview ">
             <input className="bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent hover:bg-gradient-to-r hover:from-white hover:via-[#ffdb1a] hover:to-[#ffdb1a]" type="submit" value="Submit" disabled={disable} />
              </div>}
             
    
   

    <style></style>
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
  );
// }
// else{
//   return (
//     <>
//     {token  && (
//       <div className="PlanForm-Head">
//         <div className="Invest-Container-mobile-planform">
//           <div className=" mobile-planform-title ">
//             {" "}
//             Yearly Plan
//             <span className="Address">
//               <span className="wallet">
//             {/* <img src="remove_bg.png" className="img-planfirm-upload-top"/> */}
//                 <select
//                   value={wallet}
//                   name="select"
//                   onChange={(e) => {
//                     setwallet(e.target.value);
//                   }}
//                   className="PlanForm-select-mobile"
//                 >
//                   <option value={"Binance"}>Binance TRC20</option>
//                   <option value={"KuCoin"}>KuCoin TRC20</option>
//                   <option value={"OKX"}>OKX TRC20</option>
//                   <option value={"EASYPAISA"}>EASYPAISA</option>
//                   <option value={"BANK"}>AL-BARAKA</option>
//                   <option value={"WALLET"}>WALLET</option>
//                 </select>
//               </span>
              
//                 {wallet == "Binance" && (
//                                 <span className="trc-address-text">TVqsVrj4pXKdmZZqNhuT9EYHhW1FiEkm5a</span>
//                 )}{" "}
//               {wallet == "KuCoin" && (
//                                 <span className="trc-address-text">TH3XZiv9AHsGqefDxdtW5T4AUMMmeph8f1</span>
//                 )}{" "}
//               {wallet == "OKX" && (
//                                 <span className="trc-address-text">TMEPJQQwSWdBBLic85opn4rXdqkJH2TqyM</span>
//                 )}{" "}
//               {wallet == "EASYPAISA" && <span  >03224959827</span>}{" "}
//               {wallet == "BANK" && <span  >0102626361016</span>}
//               {wallet == "WALLET" && <span  >{Userid}</span>}
//             </span>
//           </div>
//           <div className="content">
//             <form action="#" onSubmit={submit}>
//               <div className="user-details">
//                 <div className="input-box">
//                   <span className="details">First Name</span>
//                   <input
//                     type="text"
//                     value={Uname}
//                     readOnly={true}
//                     required
//                   />
//                 </div>
//                 <div className="input-box">
//                   <span className="details">Last Name</span>
//                   <input
//                     type="text"
//                     value={lastname}
//                     readOnly={true}
//                     required
//                   />
//                 </div>
//                 <div className="input-box">
//                   <span className="details">Email</span>
//                   <input
//                     type="text"
//                     value={email}
//                     readOnly={true}
//                     required
//                   />
//                 </div>
                
//                <div className="input-box">
//                   <span className="details">Phone Number</span>
//                   <input
//                     type="text"
//                     onChange={(e) => {
//                       setphone(e.target.value);
//                     }}
//                     placeholder="Enter your number"
//                     required
//                   />
//                 </div>
                  
//                 {/* ADDRESS  */}
                
//                 <div className="input-box">
//                   <span className="details">Address</span>
//                   <input
//                     type="text"
//                     onChange={(e) => {
//                       setaddress(e.target.value);
//                     }}
//                     placeholder="Enter your Address"
//                     required
//                   />
//                 </div>

//                 {/* CNIC  */}
                
//                 <div className="input-box">
//                   <span className="details">CNIC</span>
//                   <input
//                     type="text"
//                     onChange={(e) => {
//                       setcnic(e.target.value);
//                     }}
//                     placeholder="Enter your Cnic"
//                     required
//                   />
//                 </div>

//                 <div className="input-box">
//                   <span className="details">investment</span>
//                   <div className="flex">
//                     <select
//                       value={currency}
//                       name="select"
//                       className="PlanForm-select-usd"
//                     >
//                       <option value={"USD"}>USD</option>
//                     </select>
                  
//                     <input
//                       type="number"
//                       value={investment}
//                       onChange={ChangeEvent}
//                       // onChange={(e)=>{setinvestment(e.target.value)}}
//                       name="investment"
//                       placeholder="Enter your Amount"
//                     />
//                   </div>
//                   {investment != "" &&
//                     investment >= 0 &&
//                     investment < 100 &&
//                     (
//                       <span className="PlanForm-investment-error">
//                         Minimum investment 100$
//                       </span>
//                     )}
                 
                  
//                 </div>

//                {img1!=""  && <img src={img1} className="img-planfirm-upload" />}
//                 {img1=="" && <label className="custum-file-upload" for="file">
//                   <div className="icon">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill=""
//                       viewBox="0 0 24 24"
//                     >
//                       <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
//                       <g
//                         stroke-linejoin="round"
//                         stroke-linecap="round"
//                         id="SVGRepo_tracerCarrier"
//                       ></g>
//                       <g id="SVGRepo_iconCarrier">
//                         {" "}
//                         <path
//                           fill=""
//                           d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
//                           clip-rule="evenodd"
//                           fill-rule="evenodd"
//                         ></path>{" "}
//                       </g>
//                     </svg>
//                   </div>
//                   {/* <div className=" flexing-span-plan-form"> */}
//                     <div>Click to upload payment screenshot</div>
//                   {/* </div> */}
//                   <input onChange={cloudinaryonChange} name="cloud1" type="file" id="file" />
//                 </label>}

//                {img2!=""  && <img src={img2} className="img-planfirm-upload" />}
//                 {img2=="" && <label className="custum-file-upload" for="file">
//                   <div className="icon">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill=""
//                       viewBox="0 0 24 24"
//                     >
//                       <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
//                       <g
//                         stroke-linejoin="round"
//                         stroke-linecap="round"
//                         id="SVGRepo_tracerCarrier"
//                       ></g>
//                       <g id="SVGRepo_iconCarrier">
//                         {" "}
//                         <path
//                           fill=""
//                           d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
//                           clip-rule="evenodd"
//                           fill-rule="evenodd"
//                         ></path>{" "}
//                       </g>
//                     </svg>
//                   </div>
//                   {/* <div className=" flexing-span-plan-form"> */}
//                     <div>Click to upload youtube  screenshot </div>
//                   {/* </div> */}
//                   <input onChange={cloudinaryonChange} name="cloud2" type="file" id="file" />
//                 </label>}
//               </div>
//               <div className="button">
//               <div className=''>
//                   <div class="g-ytsubscribe " data-channelid="UCLifmeEanPv_W6swcFZM_aw" data-layout="default" data-count="default"></div>
//                  </div>
             
//                 {showBTN && <input type="submit" value="Subscribe" />}
//               </div>
//               <script>
//     <Script src="https://apis.google.com/js/platform.js"></Script>
//     </script><a className="youtube-channel-link">https://www.youtube.com/@UGTardnig</a>
   

//     <style></style>
//             </form>
//           </div>
//         </div>
        
//       </div>)}
//       <style>{`
//       .PlanForm-select-usd {
//         -moz-appearance: none;        
//         -webkit-appearance: none;
//         appearance: none;
//       }
//       .flexing-span-plan-form{
//         display:flex !important;
        
//       }
//       .img-planfirm-upload-top{
//         // margin-top:10px;
//         // margin:auto;
//         width:70px;
//         height:70px;
//         // margin-right:20px;
//       }
//       .img-planfirm-upload{
//         margin-top:10px;
//         margin:auto;
//         width:50px;
//         height:50px;
//       }
//       .space{
//         // margin-bottom:10px;
//         margin-left:250px;
//       }
//       .space-mobile{
//         // margin-bottom:10px;
//         // margin-left:100px;
//       }
//       `}</style>
//     </>
//   );
// }

};

export default Withdrawal;
