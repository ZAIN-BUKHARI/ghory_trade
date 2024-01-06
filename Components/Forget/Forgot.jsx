import React,{useState,useContext} from 'react'
import styles from '../Login/Login.module.css'
import Link from 'next/link'
import axios from 'axios'
import { ThemeContext } from '../../Context/ThemeContext'
import OtpPage from '../OTP/Otp'
import { toast } from "react-toastify";

const ForgotPage = () => {
    const {setLoader} = useContext(ThemeContext)
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [otp,setotp]=useState("")
    const [switchUI,setSwicthUI]=useState(false)
    const [toggle,setToggle]=useState("password")
  
  const forgot =async (e) =>{
    setLoader(true)
    try{
    const res = await axios.get(`/api/post/otp?email=${email}`)
      if (res.data.success == true) {
        setLoader(false)
        setotp(res.data.otp)
        setSwicthUI(true)
      } else {
        setLoader(false)
        toast.error('Email is not correct', {
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
    }catch(e)
    {
      setLoader(false)
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
    }

  }

  const showHidePass=()=>{
    if(toggle=="password")
      setToggle("text")
    else
      setToggle("password")
    
  }

  

  return (
    <>
   {switchUI && <OtpPage otp={otp} email={email} password={password} type={"forgot"} setSwitchUI={setSwicthUI} />}
   {!switchUI && (
    <>
   <div className={styles.body}>
     <div className={styles.container}>
       <div className={styles.forms_container}>
         <div className={styles.signin_signup}>
          <form action="#" className={`${styles.signinform} ${styles.form}`}>
            <h2 className={styles.title}>Forgot Password</h2>
            <div className={styles.input_field}>
              <i className="fas  fa-user inputfield_icon"></i>
              <input value={email} onChange={(e)=>{setemail(e.target.value)}} className={styles.input} type="text" placeholder="Email" />
            </div>
            <div className={styles.input_field}>
              <i onClick={showHidePass} className="fas  fa-lock inputfield_icon"></i>
              <input value={password} onChange={(e)=>{setpassword(e.target.value)}} className={styles.input}  type={toggle} placeholder="Password" />
            </div>
          </form>
            <input onClick={forgot} type="submit" value="Forgot" className={styles.btn} />
            <p className={styles.social_text1}>Don't have an account? <Link href="/authentication?page=signin"><strong className={styles.social_text3} >Sign in</strong></Link> </p>
        </div>
      </div>
      
    </div>
  </div>
  </>)}
    
    </>
  )
}

export default ForgotPage