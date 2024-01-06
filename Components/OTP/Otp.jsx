import React, { useContext,useState } from 'react'
import styles from './Otp.module.css'
import { ThemeContext } from '../../Context/ThemeContext'
import axios from 'axios'
import { toast } from "react-toastify";
import {useRouter} from 'next/router'

const OtpPage = ({email,password,number,firstname,lastname,cpassword,otp,setSwitchUI,type,address,cnic,_id}) => {
	const {setLoader} = useContext(ThemeContext)
	const [btnToggle,setBtnToggle]=useState(true)
	const[one,setone]=useState('')
  const[hideBTN,setHideBtn]=useState(false)
	const router = useRouter()

	const confirmOTP =async(e)=>{
    e.preventDefault()
    alert('wait')
    setLoader(true)
    setHideBtn(true)
		setBtnToggle(false)
    if(otp==one)
      {
      try{
      const data = { email, password, firstname, lastname, cpassword };
      const res = await axios.post("/api/post/signup", data)
        if (res.data.success==true) {
          toast.success("Successfully signup", {
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
                router.push('/authentication?page=signin')
                setHideBtn(false)
            }else {
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
              setLoader(false)
              setHideBtn(false)
              setBtnToggle(false)
              setSwitchUI(false)
            }
        }catch(e)
         {
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
          setSwitchUI(false);
          setBtnToggle(false);
          setLoader(false);
         }
          }else{
            toast.error('OTP error :(', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
			setSwitchUI(false)
      setHideBtn(false)
			setBtnToggle(false)
      setLoader(false)
          }
    
      }
	
	const forgotOtp =async()=>{
		setLoader(true)
		setBtnToggle(true)
    setHideBtn(true)
    alert('wait')
    try{
		if(otp==one)
		{
		const data = {email,password}
	  const res = await axios.post('/api/post/forgot',data)
		toast.success('Password Changed', {
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
    setHideBtn(false)
		router.push('/')
	}else{
    setHideBtn(false)
	  toast.error('OTP error :(', {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
	  });
    setHideBtn(false)
    setLoader(false)
	  setSwitchUI(false)
	  setBtnToggle(false)
	}
}catch(e){
  toast.error('Network Error', {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
	  });
    setHideBtn(false)
    setLoader(false)
	  setSwitchUI(false)
	  setBtnToggle(false)
    setLoader(false)
}
	  }

	const referralSignup =async(e)=>{

    e.preventDefault()
    try{
    alert('wait')
		setLoader(true)
    setHideBtn(true)
		setBtnToggle(true)
    if(otp==one)
    { 
        const data = { email, password,cpassword, firstname, lastname,_id,number,address,cnic };
        let res = await axios.post("/api/post/referralsignup", data)
            if(res.data.success==true)
            {
              toast.success("Successfully signup", {
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
                        router.push('/')
                        setHideBtn(false)
                }
            else 
           {
					setSwitchUI(false)
          setLoader(false)
          setHideBtn(false)
                  toast.error(res.data.error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                }  
    } else{
      setone('')
      toast.error('OTP error :(', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
			setSwitchUI(false)
      setLoader(false)
      setHideBtn(false)

    }
    
    }catch(e)
    {
      toast.error('Network Error', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
setSwitchUI(false)
setLoader(false)
setHideBtn(false)
setBtnToggle(true)
    }
      
      }
  return (
    <>
    <div className={styles.body}>

	<div class={styles.container}>
		<h1 className={styles.h1}>OTP VERIFICATION CODE</h1>
		{/* <h1 className={styles.h2}>code has been send to {email.slice(0,1)}*****@gmail.com</h1> */}
		<div class={styles.userInput}>
			<input value={one} onChange={(e)=>{setone(e.target.value)}} className={styles.input} type="text" id='ist' maxlength="4" onkeyup="clickEvent(this,'sec')"/>
		</div>
{btnToggle && (
	<>
	{type=="signup"   && !hideBTN &&	<button onClick={confirmOTP} className={styles.btn}>CONFIRM</button>}
	{type=="forgot"   && !hideBTN &&	<button onClick={forgotOtp} className={styles.btn}>CONFIRM</button>}
	{type=="referral" && !hideBTN &&	<button onClick={referralSignup} className={styles.btn}>CONFIRM</button>}
	</>
)}
	</div>
    </div>

    </>
  )
}

export default OtpPage