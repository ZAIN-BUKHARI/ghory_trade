import React from "react";
import { FcRedo } from "react-icons/fc";
import { ThemeContext } from "../Context/ThemeContext";
import { useState } from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import Otp from "../universe.io/Otp";
const AuthForm = () => {
  //router
  const router = useRouter();
  // state variables
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const {Auth, setAuth, mobile,setLoader } = useContext(ThemeContext);
  const [ActiveLoginModal, setActiveLoginModal] = useState(false);
  const [forgotModal, setforgotModal] = useState(false);

  const[ disable,setdisable]=useState(false)
  const[otpModal,setotpModal]=useState(false)
  const[otpcode,setotpcode]=useState('')
  const[forgotOTPBTN,setforgotOTPBTN]=useState(false)

  //otp modal states
  const[one,setone]=useState('')
  const[two,settwo]=useState('')
  const[three,setthree]=useState('')
  const[four,setfour]=useState('')

  //showpasss type
  const [showpass,setshowpass]=useState('text')
  const hideModla = () => {
    setAuth(false);
  };
  const showsignin = () => {
    if(mobile)
    {
      setshowpass('password')
      setActiveLoginModal(true);
      setforgotModal(false)
      document.getElementById("zain").classList.remove("signup-height");
      document
      .getElementById("zain")
      .classList.add("signin-height");
    }else{
      setshowpass('password')
      setforgotModal(false)
      setActiveLoginModal(true);
      document.getElementById("window").classList.remove("Invest-Container-authform");
      document.getElementById("window").classList.add("Invest-Container-authform-singin-height");

    }
  };
  const showsignup = () => {
    if(mobile)
    {
      setshowpass('text')
      setActiveLoginModal(false);
      setforgotModal(false)
      document.getElementById("zain").classList.remove('signin-height')
      document
      .getElementById("zain")
      .classList.add("signup-height");
    }else{
      setshowpass('text')
      setActiveLoginModal(false);
      setforgotModal(false)
      document.getElementById("window").classList.remove("Invest-Container-authform-singin-height");
      document.getElementById("window").classList.add("Invest-Container-authform");
    }
  };
  const showforgot =() =>{
    setshowpass('password')
    setforgotModal(true)
    
  }
 useEffect(()=>{
    
 },[])
  //SIGNUP
  const signup = (e) => {
    e.preventDefault();
    if(password==cpassword)
    {

    setdisable(true)
    setLoader(true)
    if(password.length>=10){
    const data = { email, password, firstname, lastname, cpassword };
    axios.post("/api/post/otp", data).then((res) => {
      if (res.data.success == true) {
        setotpcode(res.data.otp)
        setActiveLoginModal(true);
        setotpModal(true)
        setLoader(false)
      } else {
        setdisable(false)
        setLoader(false)
        toast.error(res.data.error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setLoader(false)
    }).catch(e=>{alert('Check your network');setdisable(false);setLoader(false)});
  }
else{
  setdisable(false)
  toast.error('Password must be 10 characters', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  setLoader(false)
}
}
else{
  setdisable(false)
  toast.error('Password not match', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

  };
  const signin = (e) => {
    e.preventDefault();
    setdisable(true)
    setLoader(true)
    const data = { email, password };
    axios.post("/api/post/signin", data).then((res) => {
      setLoader(true)
      alert('Wait......')
      if (res.data.success == true) {
        toast.success("successfully logged in", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem("token", res.data.user.email);
        setAuth(true);
        setLoader(false)
        router.push('/')
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      } else {
        setdisable(false)
        setLoader(false)
        toast.error(res.data.error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem("token", "no");
      }
    });
    setLoader(false)
  };
  const forgot = (e) =>{
    setdisable(true)
    setforgotOTPBTN(true)
    setLoader(true)
    axios.get(`/api/post/otp?email=${email}`).then((res) => {
      alert(res.data.otp)
      if (res.data.success == true) {
        setotpcode(res.data.otp)
        setLoader(false)
        setActiveLoginModal(true);
        setotpModal(true)

      } else {
        setdisable(false)
        setLoader(false)
        toast.error('Email is not correct', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setLoader(false)
    }).catch(e=>{alert('Check your network');setdisable(false)});
    setdisable(false)
    
  }
  const confirmOTP =()=>{
    setLoader(true)
    if(otpcode==one+two+three+four)
    {
      alert('Wait......')
        const data = { email, password, firstname, lastname, cpassword };
        axios.post("/api/post/signup", data).then((res) => {
        setLoader(true)
          if (res.data.success==true) {
            toast.success("Successfully signup", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setLoader(false)
            setActiveLoginModal(true);
            setAuth(false);

    
          } else {
            setdisable(false)
            setLoader(true)
            toast.error(res.data.error, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setTimeout(() => {
              window.location.reload()
            }, 2000);
          }
        }).catch(e=>{alert('Check your network');setdisable(false);setLoader(false)});
        
      }else{
        toast.error('OTP error :(', {
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
      setLoader(false)

  }
  const forgotOtp =()=>{
    setLoader(true)
    if(otpcode==one+two+three+four)
    {
    setdisable(true)
    const data = {email,password}
   axios.post('/api/post/forgot',data).then(res=>{
    toast.success('Password Changed', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setLoader(false)
    setAuth(false);
    setforgotOTPBTN(false)
  })
}else{
  setLoader(false)
  toast.success('OTP error :(', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
  }
  const toggle = ()=>{
    if(showpass=='text')
      setshowpass('password')
    else 
      setshowpass('text')
  }



  if (mobile) {
    return (
      <>
      { otpModal &&  <div className='OPT-CENTER-MAI-mob'>

<form class="form-otp">
    <div class="title">OTP
    </div> 
    <div class="title">Verification Code
    </div> 
    <p class="message">We have sent a verification code to your email</p>
    <div class="inputs">
         <input value={one} onChange={(e)=>{setone(e.target.value)}} id="input1" type="text" maxlength="1"/>
         <input value={two} onChange={(e)=>{settwo(e.target.value)}} id="input2" type="text" maxlength="1"/>
        <input value={three} onChange={(e)=>{setthree(e.target.value)}} id="input3" type="text" maxlength="1"/>
        <input value={four} onChange={(e)=>{setfour(e.target.value)}} id="input4" type="text" maxlength="1"/>
            </div>
            {!forgotOTPBTN && <button class="action" onClick={confirmOTP}>verify me</button>} 
            {forgotOTPBTN && <button class="action" onClick={forgotOtp}>verify me</button> }
              </form>
</div>}
{!otpModal && (
  <>
      
        <div className="PlanForm-Head-modal-auth">
          <div className="Invest-Container" id="zain">
            <div className="title  authform-cancel-modal-button">
            <img src="remove_bg.png" className="planform-logo-web"/>
              {" "}
              {!ActiveLoginModal &&  <span className="span-title-palnform-web">Sign up</span>}
              {ActiveLoginModal && !forgotModal &&  <span className="span-title-palnform-web">Sign in</span>}
              {forgotModal &&  <span className="span-title-palnform-web">Forgot Password</span>}

              <h1 onClick={hideModla}>X</h1>
            </div>
            <div className="content">
              <form action="#">
                <div className="user-details">
                {!ActiveLoginModal &&  <div className="input-box">
                    <span className="details">First Name</span>
                    <input
                      type="text"
                      onChange={(e) => {setfirstname(e.target.value)}}
                      placeholder="Enter your name"
                      required
                    />
                  </div>}
                 {!ActiveLoginModal && <div className="input-box">
                    <span className="details">Last Name</span>
                    <input
                      type="text"
                      onChange={(e) => {setlastname(e.target.value)}}
                      placeholder="Enter your lastname"
                      required
                    />
                  </div>}
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input
                      type="text"
                      onChange={(e) => {setemail(e.target.value)
                      }}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="input-box">
                  {forgotModal && <div className="auth-form-span-password"> 
                  {showpass == "text" && (<><span > New Password </span><AiOutlineEye onClick={toggle} className="eye-icon-auth"/></>)}
                  {showpass == "password" && (<><span > New Password </span><AiOutlineEyeInvisible onClick={toggle} className="eye-icon-auth"/></>)}
                  </div>}
                  {!forgotModal && <div className="auth-form-span-password"> 
                  {showpass == "text" && (<><span className=" "> Password </span><AiOutlineEye onClick={toggle} className="eye-icon-auth"/></>)}
                  {showpass == "password" && (<><span className=" "> Password </span><AiOutlineEyeInvisible onClick={toggle} className="eye-icon-auth"/></>)}
                  </div>}

                    <input
                      type={showpass}
                      onChange={(e) => {setpassword(e.target.value)}}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  {!ActiveLoginModal && <div className="input-box">
                  {!forgotModal && <div className="auth-form-span-password">
                     {showpass == "text" && (<><span className=" ">Confirm Password </span><AiOutlineEye onClick={toggle} className="eye-icon-auth"/> </>)}
                     {showpass == "password" && (<><span className=" ">Confirm Password </span><AiOutlineEyeInvisible onClick={toggle} className="eye-icon-auth"/> </>)}
                  </div>}
                    <input
                      type={showpass}
                      onChange={(e) => {setcpassword(e.target.value)}}
                      placeholder="Enter your password"
                      required
                    />
                  </div>}
                </div>

                <div className="button-auth">
                 {!ActiveLoginModal && (<input className="authform-text-submit" disabled={disable} type="button" value="Sign up" onClick={signup} /> )}
                 {ActiveLoginModal && !forgotModal && (<input className="authform-text-submit" disabled={disable} type="button" value="Sign in" onClick={signin} /> )}
                 {forgotModal && ( <input type="button" value="Forgot" disabled={disable} onClick={forgot} /> )}
                </div>
                {!ActiveLoginModal && (
                  <span className="authform-invest-spanone">
                    Already have an account?{" "}
                    <span
                      className="authform-invest-spantwo"
                      onClick={showsignin}
                    >
                      Signin
                    </span>
                  </span>
                )}
                {ActiveLoginModal && (
                  <span className="authform-invest-spanone">
                    Don't have an account?{" "}
                    <span
                      className="authform-invest-spantwo"
                      onClick={showsignup}
                    >
                      Signup
                    </span>
                  </span>
                )}
                {ActiveLoginModal && (
                    <h1 onClick={showforgot} className="forgot-planform-mob">
                      Forgot Password
                    </h1>
                )}
              </form>
            </div>
          </div>
        </div>
      </>
      )}
      </>
    );
  } else {
    return (
      <>
      { otpModal &&  <div className='OPT-CENTER-MAIN'>

<form class="form-otp">
    <div class="title">OTP
    </div> 
    <div class="title">Verification Code
    </div> 
    <p class="message">We have sent a verification code to your email</p>
    <div class="inputs">
         <input value={one} onChange={(e)=>{setone(e.target.value)}} id="input1" type="text" maxlength="1"/>
         <input value={two} onChange={(e)=>{settwo(e.target.value)}} id="input2" type="text" maxlength="1"/>
        <input value={three} onChange={(e)=>{setthree(e.target.value)}} id="input3" type="text" maxlength="1"/>
        <input value={four} onChange={(e)=>{setfour(e.target.value)}} id="input4" type="text" maxlength="1"/>
            </div>
            {!forgotOTPBTN && <button class="action" onClick={confirmOTP}>verify me</button>} 
            {forgotOTPBTN && <button class="action" onClick={forgotOtp}>verify me</button> }
             </form>
</div>}
{!otpModal && (
  <>
  
        <div className="PlanForm-Head-modal-auth">
          <div className="Invest-Container-authform" id="window" >
            <div className="title  authform-cancel-modal-button">
            <img src="remove_bg.png" className="planform-logo-web"/>
              {" "}
              {!ActiveLoginModal &&  <span className="span-title-palnform-web">Sign up</span>}
              {ActiveLoginModal && !forgotModal &&  <span className="span-title-palnform-web">Sign in</span>}
              {forgotModal &&  <span className="span-title-palnform-web">Forgot Password</span>}
              <h1 onClick={hideModla}>X</h1>
            </div>
            <div className="content">
              <form action="#">
                <div className="user-details-auth">
                  {!ActiveLoginModal && (
                    <>
                      <div className="input-box-auth">
                        <span className="details auth-authform-fields">
                          First Name
                        </span>
                        <input
                          type="text"
                          onChange={(e) => {setfirstname(e.target.value)}}
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="input-box-auth">
                        <span className="details ">Last Name</span>
                        <input
                          type="text"
                          onChange={(e) => {
                            setlastname(e.target.value);
                          }}
                          placeholder="Enter your lastname"
                          required
                        />
                      </div>
                    </>
                  )}
                  <div className="input-box-auth">
                    <span className="details">Email</span>
                    <input
                      type="text"
                      onChange={(e) => {setemail(e.target.value)}}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box-auth">
                  {forgotModal && <div className="auth-form-span-password"> <span > New Password </span><AiOutlineEye onClick={toggle} className="eye-icon-auth"/></div>}
                  {!forgotModal && <div className="auth-form-span-password"> <span className=" "> Password </span><AiOutlineEye onClick={toggle} className="eye-icon-auth"/></div>}
                  
                    <input
                      type={showpass}
                      
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                      placeholder="Enter your password"
                      required
                      
                    />
                        {/* {!ActiveLoginModal && toggle=='password' && <AiOutlineEye onClick={toggleBtn} className="securityToggle"/>}
                        {ActiveLoginModal && toggle=='password' &&  <AiOutlineEye onClick={toggleBtn} className="securityToggle-signin"/>}

                        {!ActiveLoginModal && toggle=='text' && <AiOutlineEyeInvisible onClick={toggleBtn} className="securityToggle"/>}
                        {ActiveLoginModal && toggle=='text' &&  <AiOutlineEyeInvisible onClick={toggleBtn} className="securityToggle-signin"/>} */}

                  </div>
                  {!ActiveLoginModal && (
                    <div className="input-box-auth">
                      {!forgotModal && <div className="auth-form-span-password"> <span className=" "> Confirm Password </span><AiOutlineEye onClick={toggle} className="eye-icon-auth"/></div>}
                      <input
                        type={showpass}
                        onChange={(e) => {
                          setcpassword(e.target.value);
                        }}
                        placeholder="Enter your password"
                        required
                        />
                       {/* {toggle=='password' && <AiOutlineEye onClick={toggleBtn} className="securityToggle-confirm"/>}
                       {toggle=='text' && <AiOutlineEyeInvisible onClick={toggleBtn} className="securityToggle-confirm"/>} */}

                    </div>
                  )}
                  {/* {forgotModal && (
                    <div className="input-box-auth">
                      <span className="details">Confirm password</span>
                      <input
                        type='password'
                        onChange={(e) => {
                          setcpassword(e.target.value);
                        }}
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  )} */}
                </div>
                <div className="button-auth">
                  {!ActiveLoginModal && (
                    <input type="button" disabled={disable} value="Signup" onClick={signup} />
                  )}
                  {ActiveLoginModal && !forgotModal &&  (
                    <input type="button" disabled={disable} value="Signin" onClick={signin} />
                  )}
                  {forgotModal && (
                    <input type="button" disabled={disable} value="Forgot" onClick={forgot} />
                  )}
                </div>
                {!ActiveLoginModal &&  (
                  <span className="authform-invest-spanone">
                    Already have an account?{" "}
                    <span
                      className="authform-invest-spantwo"
                      onClick={showsignin}
                    >
                      Signin
                    </span>
                  </span>
                )}
                {ActiveLoginModal && (
                  <span className="authform-invest-spanone">
                    Don't have an account?{" "}
                    <span
                      className="authform-invest-spantwo"
                      onClick={showsignup}
                    >
                      Signup
                    </span>
                  </span>
                )}
                {ActiveLoginModal && !forgotModal && (
                    <h1 onClick={showforgot} className="forgot-planform">
                      Forgot Password
                    </h1>
                )}
              </form>
            </div>
          </div>
        </div>
        </>
        )}
      </>
    );
  }
};

export default AuthForm;
