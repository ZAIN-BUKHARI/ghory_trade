import React,{useState,useContext} from 'react'
import { useRouter } from 'next/router'
import { ThemeContext } from '../Context/ThemeContext'
import { toast } from 'react-toastify';
import axios from 'axios'
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';


const invite = () => {

  //state variables
  const [firstname,setfirstname]=useState("")
  const [lastname,setlastname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [cpassword,setcpassword]=useState("")
  const [number,setnumber]=useState("")

  const[disable,setdisable]=useState(false)
  const[otpModal,setotpModal]=useState(false)
  const[otpcode,setotpcode]=useState('')

  //otp modal states
  const[one,setone]=useState('')
  const[two,settwo]=useState('')
  const[three,setthree]=useState('')
  const[four,setfour]=useState('')
  //showpasss type
  const [showpass,setshowpass]=useState('text')


  //useRouter
  const { mobile,setLoader } = useContext(ThemeContext)
  const router=useRouter()
  const {_id}=router.query

  const toggle = ()=>{
    if(showpass=='text')
      setshowpass('password')
    else 
      setshowpass('text')
  } 
  const hideModla = () =>{
    router.push('/')
  }
 
//   const signup =async (e) =>{
//     e.preventDefault()
//     setdisable(true)
//     if(email.includes('@')){
//         if(password==cpassword){
//             if(firstname.length>0 && lastname.length>0){
//         const data = {email,password,firstname,lastname,_id} 
//             axios.post('/api/post/referralsignup',data).then(res=>{
//                 if(res.data==true){
//                 toast.success('Account created now login', {
//                     position: "top-right",
//                         autoClose: 2000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "light",
//                     });
//                     router.push('/')
//                 }
//                 else{
//                     toast.error('Try again ', {
//                         position: "top-right",
//                             autoClose: 2000,
//                             hideProgressBar: false,
//                             closeOnClick: true,
//                             pauseOnHover: true,
//                             draggable: true,
//                             progress: undefined,
//                             theme: "light",
//                         });
//                 }
//             })
//         }
//         else{
//             toast.error('Please fill remaining data', {
//                 position: "top-right",
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "light",
//                 });
//         }  

//         }

//         else{
//             toast.error('Password and Confirm Password should be same ', {
//                 position: "top-right",
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "light",
//                 });
//         }   


//     }
//     else{
//         toast.error('inccorect email address ', {
//             position: "top-right",
//                 autoClose: 2000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });
//     }

      
        
// }


// new methods 

const confirmOTP =(e)=>{
  e.preventDefault()
  setLoader(true)

  if(otpcode==one+two+three+four)
  {
      const data = { email, password, firstname, lastname, cpassword,_id,number };
      axios.post("/api/post/referralsignup", data).then((res) => {
        window.location.replace('/')
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
      }).catch(e=>{
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
      setTimeout(() => {
        window.location.replace('/')
      }, 2000);
    });
  
      
    }else{
      setone('')
          settwo('')
          setthree('')
          setfour('')
      toast.error('OTP error :(', {
        position: "top-right",
        autoClose: 4000,
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

const signup = (e) => {
  e.preventDefault();
  if(number.length>0)
  {
  if(firstname.length>0 && lastname.length>0)
  {

  if(password==cpassword)
  {

  setdisable(true)
  setLoader(true)
  if(password.length>=10){
  const data = { email };
  axios.post("/api/post/otp", data).then((res) => {
    if (res.data.success == true) {
      setotpcode(res.data.otp)
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
}
else{
  setdisable(false)
toast.error('Name field empty', {
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
else{
  setdisable(false)
  toast.error('Mobile Number ', {
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


if (mobile) {
  return (
    <>
    { otpModal &&
      <div className="PlanForm-Head-modal-auth refferal-modal-invite">

      <div className='OPT-CENTER-MAI-mob'>

<div class="form-otp">
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
           <button class="action" onClick={confirmOTP}>verify me</button>
            </div>
</div>
</div>
}
{!otpModal && (
<>
    
      <div className="PlanForm-Head-modal-auth refferal-modal-invite">
        <div className="Invest-Container-mob-auth" id="zain">
          <div className="title  authform-cancel-modal-button">
          <img src="remove_bg.png" className="planform-logo-web"/>
            {" "}
          <span className="span-title-palnform-web">Sign up</span>

            <h1 onClick={hideModla}>X</h1>
          </div>
          <form className="content">
            <div>
              <div className="user-details">
             <div className="input-box">
                  <span className="details">First Name</span>
                  <input
                    type="text"
                    onChange={(e) => {setfirstname(e.target.value)}}
                    placeholder="Enter your name"
                    required
                  />
                </div>
           <div className="input-box">
                  <span className="details">Last Name</span>
                  <input
                    type="text"
                    onChange={(e) => {setlastname(e.target.value)}}
                    placeholder="Enter your lastname"
                    required
                  />
                </div>
                <div className="input-box">
               <div className="auth-form-span-password">
                  <span className=" ">Number </span>
                </div>
                  <input
                    type='text'
                    onChange={(e) => {setnumber(e.target.value)}}
                    placeholder="Enter your Number"
                    required
                  />
                </div>
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
                
                 <div className="auth-form-span-password"> 
                {showpass == "text" && (<><span className=" "> Password </span><AiOutlineEye onClick={toggle} className="eye-icon-auth"/></>)}
                {showpass == "password" && (<><span className=" "> Password </span><AiOutlineEyeInvisible onClick={toggle} className="eye-icon-auth"/></>)}
                </div>

                  <input
                    type={showpass}
                    onChange={(e) => {setpassword(e.target.value)}}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                 <div className="input-box">
               <div className="auth-form-span-password">
                   {showpass == "text" && (<><span className=" ">Confirm Password </span><AiOutlineEye onClick={toggle} className="eye-icon-auth"/> </>)}
                   {showpass == "password" && (<><span className=" ">Confirm Password </span><AiOutlineEyeInvisible onClick={toggle} className="eye-icon-auth"/> </>)}
                </div>
                  <input
                    type={showpass}
                    onChange={(e) => {setcpassword(e.target.value)}}
                    placeholder="Enter your password"
                    required
                  />
                </div>
               
              </div>
              

              <div className="button-auth input-box-auth">
               <input className="authform-text-submit" disabled={disable} type="button" value="Sign up" onClick={signup} /> 
              </div>
             
                {/* <span className="authform-invest-spanone">
                  Don't have an account?{" "}
                  <span
                    className="authform-invest-spantwo"
                    onClick={showsignup}
                  >
                    Signup
                  </span>
                </span> */}
              
             
            </div>
          </form>
        </div>
      </div>
    </>
    )}
    </>
  );
} else {
  return (
    <>
    { otpModal &&  
  <div className="PlanForm-Head-modal-auth refferal-modal-invite">

      <div className='OPT-CENTER-MAIN'>

<div class="form-otp">
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
           <button class="action" onClick={confirmOTP}>verify me</button>
           </div>
</div>
</div>
}
{!otpModal && (
<>

      <div className="PlanForm-Head-modal-auth refferal-modal-invite">
        <div className="Invest-Container-authform" id="window" >
          <div className="title  authform-cancel-modal-button">
          <img src="remove_bg.png" className="planform-logo-web"/>
            {" "}
             <span className="span-title-palnform-web">Sign up</span>
            <h1 onClick={hideModla}>X</h1>
          </div>
          <div className="content">
            <div >
              <div className="user-details-auth">
           
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
                  <div className="input-box-auth">
                     <div className="auth-form-span-password"> <span className=" ">Number </span></div>
                    <input
                      type='text'
                      onChange={(e) => {
                        setnumber(e.target.value);
                      }}
                      placeholder="Enter your number"
                      required
                      />

                  </div>
                
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
                 <div className="auth-form-span-password"> <span className=" "> Password </span><AiOutlineEye onClick={toggle} className="eye-icon-auth"/></div>
                
                  <input
                    type={showpass}
                    
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    placeholder="Enter your password"
                    required
                    
                  />

                </div>
                
                  <div className="input-box-auth">
                     <div className="auth-form-span-password"> <span className=" "> Confirm Password </span><AiOutlineEye onClick={toggle} className="eye-icon-auth"/></div>
                    <input
                      type={showpass}
                      onChange={(e) => {
                        setcpassword(e.target.value);
                      }}
                      placeholder="Enter your password"
                      required
                      />

                  </div>
                 
                
              <div className="button-auth input-box-auth">
                  <input className='input-btn-web-invite' type="button" disabled={disable} value="Signup" onClick={signup} />
              </div>
              </div>
               
                
              
            </div>
          </div>
        </div>
      </div>
      </>
      )}
    </>
  );
}


}

export default invite