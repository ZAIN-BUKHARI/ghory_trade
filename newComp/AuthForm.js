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
  // const [forgotModal, setforgotModal] = useState(false);

  const[ disable,setdisable]=useState(false)

  const hideModla = () => {
    setAuth(false);
  };
  const showsignin = () => {
    if(mobile)
    {

      setActiveLoginModal(true);
      // setforgotModal(false)
      document.getElementById("zain").classList.remove("signup-height");
      document
      .getElementById("zain")
      .classList.add("signin-height");
    }else{
      // setforgotModal(false)
      setActiveLoginModal(true);
      document.getElementById("window").classList.remove("Invest-Container-authform");
      document.getElementById("window").classList.add("Invest-Container-authform-singin-height");

    }
  };
  const showsignup = () => {
    if(mobile)
    {
      setActiveLoginModal(false);
      // setforgotModal(false)
      document.getElementById("zain").classList.remove('signin-height')
      document
      .getElementById("zain")
      .classList.add("signup-height");
    }else{
      setActiveLoginModal(false);
      // setforgotModal(false)
      document.getElementById("window").classList.remove("Invest-Container-authform-singin-height");
      document.getElementById("window").classList.add("Invest-Container-authform");
    }
  };
  // const showforgot =() =>{
  //   setforgotModal(true)
    
  // }
 useEffect(()=>{
    
 },[])
  //SIGNUP
  const signup = (e) => {
    e.preventDefault();
    setdisable(true)
    if(password.length>=10){

    const data = { email, password, firstname, lastname, cpassword };
    axios.post("/api/post/signup", data).then((res) => {
    setLoader(true)
      if (res.data.success == true) {
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
        setActiveLoginModal(true);
        setAuth(false);

      } else {
        setdisable(false)
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
    }).catch(e=>{alert('Check your network');setdisable(false)});
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
}
  };
  const signin = (e) => {
    e.preventDefault();
    setdisable(true)
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
          theme: "light",
        });
        localStorage.setItem("token", res.data.user.email);
        setAuth(true);
        router.push('/')
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      } else {
        setdisable(false)
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
  const signinmobile = (e) => {
    e.preventDefault();
    setdisable(true)
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
          theme: "light",
        });
        localStorage.setItem("token", res.data.user.email);
        setAuth(true);
        alert('Login')
        router.push('/')
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      } else {
        setdisable(false)
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
  // const forgot = (e) =>{
  //   setdisable(true)
  //   const data = {email,password,cpassword}
  //  axios.post('/api/post/forgot',data).then(res=>{
  //   if(res.data.success==true)
  //   {
  //     setAuth(false);
  //     toast.success("Password changed :)", {
  //       position: "top-right",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }else{
  //     setdisable(false)
  //     toast.success(res.data.error, {
  //       position: "top-right",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  //  }).catch(err=>{
  //   toast.success('Server down try again later', {
  //     position: "top-right",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  //  })
  // }
  const toggleBtn = (e)=>{
    if(toggle=='password')settoggle('text');
    else settoggle('password');
  }
  if (mobile) {
    return (
      <>
        <div className="PlanForm-Head-modal-auth">
          <div className="Invest-Container" id="zain">
            <div className="title  authform-cancel-modal-button">
            <img src="remove_bg.png" className="planform-logo-web"/>
              {" "}
              {!ActiveLoginModal &&  <span className="span-title-palnform-web">Sign up</span>}
              {ActiveLoginModal &&   <span className="span-title-palnform-web">Sign in</span>}
              {/* {forgotModal &&  <span className="span-title-palnform-web">Forgot Password</span>} */}

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
                    <span className="details">Password</span>
                    <input
                      type="password"
                      onChange={(e) => {setpassword(e.target.value)}}
                      placeholder="Enter your password"
                      required
                    />

                  </div>
                  {/* {password && password.length<10 && (
                  <span className="PlanForm-investment-error">
                        Minimum investment 100$
                  </span>)} */}
                {/* {forgotModal && (  <div className="input-box">
                    <span className="details">New Password</span>
                    <input
                      type="password"
                      onChange={(e) => {setpassword(e.target.value)}}
                      placeholder="Enter your password"
                      required
                    />
                    
                  </div>)} */}
                  {!ActiveLoginModal && <div className="input-box">
                    <span className="details">Confirm password</span>
                    <input
                      type="password"
                      onChange={(e) => {setcpassword(e.target.value)}}
                      placeholder="Enter your password"
                      required
                    />
                  </div>}
                </div>
                <div className="button-auth">
                 {!ActiveLoginModal && (<input className="authform-text-submit" disabled={disable} type="button" value="Sign up" onClick={signup} /> )}
                 {ActiveLoginModal && (<input className="authform-text-submit" disabled={disable} type="button" value="Sign in" onClick={signinmobile} /> )}
                 {/* {forgotModal && ( <input type="button" value="Forgot" disabled={disable} onClick={forgot} /> )} */}
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
                {/* {ActiveLoginModal && (
                    <h1 onClick={showforgot} className="forgot-planform-mob">
                      Forgot Password
                    </h1>
                )} */}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="PlanForm-Head-modal-auth">
          <div className="Invest-Container-authform" id="window" >
            <div className="title  authform-cancel-modal-button">
            <img src="remove_bg.png" className="planform-logo-web"/>
              {" "}
              {!ActiveLoginModal &&  <span className="span-title-palnform-web">Sign up</span>}
              {ActiveLoginModal &&  <span className="span-title-palnform-web">Sign in</span>}
              {/* {forgotModal &&  <span className="span-title-palnform-web">Forgot Password</span>} */}
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
                    <span className="details">Password</span>
                    <input
                      type='password'
                      
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
                      <span className="details">Confirm password</span>
                      <input
                        type='password'
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
                  {ActiveLoginModal &&  (
                    <input type="button" disabled={disable} value="Signin" onClick={signin} />
                  )}
                  {/* {forgotModal && (
                    <input type="button" disabled={disable} value="Forgot" onClick={forgot} />
                  )} */}
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
                {/* {ActiveLoginModal && !forgotModal && (
                    <h1 onClick={showforgot} className="forgot-planform">
                      Forgot Password
                    </h1>
                )} */}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default AuthForm;
