import React ,{useContext, useState} from 'react'
import styles from './Login.module.css'
import { toast } from "react-toastify";
import Link from 'next/link'
import axios from 'axios';
import {useRouter} from 'next/router'
import { ThemeContext } from '../../Context/ThemeContext';

const LoginPage = () => {
  const {settoken,getUser,setLoader}=useContext(ThemeContext)
  const router = useRouter();
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [toggle,setToggle]=useState("password")
  
  const signin = (e) => {
    e.preventDefault();
    try{
    setLoader(true)
    const data = { email, password };
    axios.post("/api/post/signin", data).then((res) => {
      if (res.data.success == true) {
        toast.success("successfully logged in", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        localStorage.setItem("token", res.data.user.email);
          settoken(true)
          getUser()
          router.push('/')
          setLoader(false)
      } else {
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
        setLoader(false)
        localStorage.setItem("token", "no");
      }
    });
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

    // setLoader(false)
  };

  const showHidePass=()=>{
    if(toggle=="password")
      setToggle("text")
    else
      setToggle("password")
    
  }



  return (
    <>
    <div className={styles.body}>
      
     <div className={styles.container}>
       <div className={styles.forms_container}>
         <div className={styles.signin_signup}>
          <form action="#" className={`${styles.signinform} ${styles.form}`}>
            <h2 className={styles.title}>Sign in</h2>
            <div className={styles.input_field}>
              <i className="fas  fa-user inputfield_icon"></i>
              <input value={email} onChange={(e)=>{setemail(e.target.value)}} className={styles.input} type="text" placeholder="Email" />
            </div>
            <div className={styles.input_field}>
              <i onClick={showHidePass}  className="fas  fa-lock inputfield_icon"></i>
              <input value={password} onChange={(e)=>{setpassword(e.target.value)}} className={styles.input}  type={toggle} placeholder="Password" />
            </div>
          </form>
            <input onClick={signin}  type="submit" value="Login" className={styles.btn} />
            <p className={styles.social_text1}>Don't have an account? <Link href="/authentication?page=signup"> <strong className={styles.social_text3}  >Sign up</strong></Link> </p>
            <p className={styles.social_text_forgot}><Link href="/authentication?page=forgot"> <strong className={styles.social_text4}  >{"Forgot Password ->"} </strong></Link> </p>
        </div>
      </div>  
    </div>
  </div>
 
    
    </>
  )
}

export default LoginPage