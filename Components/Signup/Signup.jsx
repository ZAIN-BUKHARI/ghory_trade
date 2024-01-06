import React, { useContext, useState } from 'react'
import styles from '../Login/Login.module.css'
import Link from 'next/link'
import { ThemeContext } from '../../Context/ThemeContext'
import OtpPage from '../OTP/Otp'
import { toast } from "react-toastify";
import axios from "axios";

const SingupPage = () => {
    const [toggle,setToggle]=useState("password")
    const {setLoader} = useContext(ThemeContext)
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [otp, setOtp] = useState("");

    const[switchUI,setSwitchUI]=useState(false);

    const showHidePass=()=>{
        if(toggle=="password")
          setToggle("text")
        else
          setToggle("password")
        
      }

    const signup =async (e) => {
        e.preventDefault();
        setLoader(true)
        try{   
        const data = { email };
        if(!email.includes('@'))
        {
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
        }else{
        const res = await axios.post("/api/post/otp", data)
          if (res.data.success == true) {
            setLoader(false)
            setOtp(res.data.otp);
            setSwitchUI(true)
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
        }
  }catch(e){
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
      };
     
  return (
    <>
    {switchUI && <OtpPage firstname={firstname} lastname={lastname} email={email} password={password}  cpassword={cpassword} setSwitchUI={setSwitchUI} otp={otp} type={"signup"} />}
    {!switchUI && (
    <>
    <div className={styles.body_signup}>
     <div className={styles.container}>
       <div className={styles.forms_container}>
         <div className={styles.signin_signup}>
          <form action="#" className={`${styles.signinform} ${styles.form}`}>
            <h2 className={styles.title}>Register</h2>
            <div className={styles.input_field}>
              <i className="fas  fa-user inputfield_icon"></i>
              <input required={true} value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} className={styles.input} type="text" placeholder="Firstname" />
            </div>
            <div className={styles.input_field}>
              <i className="fas  fa-user inputfield_icon"></i>
              <input required={true} value={lastname} onChange={(e)=>{setlastname(e.target.value)}} className={styles.input} type="text" placeholder="Lastname" />
            </div>
            <div className={styles.input_field}>
              <i className="fas  fa-user inputfield_icon"></i>
              <input required={true} value={email} onChange={(e)=>{setemail(e.target.value)}}  className={styles.input} type="text" placeholder="Email" />
            </div>
            <div className={styles.input_field}>
              <i onClick={showHidePass} className="fas  fa-lock inputfield_icon"></i>
              <input required={true} type={toggle} value={password} onChange={(e)=>{setpassword(e.target.value)}}   className={styles.input}  placeholder="Password" />
            </div>
            <div className={styles.input_field}>
              <i onClick={showHidePass} className="fas  fa-lock inputfield_icon"></i>
              <input required={true} value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}  className={styles.input}  type={toggle} placeholder="Confirm Password" />
            </div>
            
          </form>
            <input onClick={signup} type="submit" value="Sign up" className={styles.btn} />
            <p className={styles.social_text1}>Already have an account?<Link href="/authentication?page=signin"> <strong className={styles.social_text3} >Sign in</strong></Link> </p>
            
        </div>
      </div>
      
    </div>
  </div>
  </>
  )}
  </>
  )
}

export default SingupPage