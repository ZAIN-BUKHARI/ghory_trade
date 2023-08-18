import React from 'react'
import { FcRedo } from 'react-icons/fc';
import { ThemeContext } from '../Context/ThemeContext';
import { useState } from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios from 'axios';
const AuthForm = () => {
    // state variables 
    const [firstname,setfirstname]=useState("")
    const [lastname,setlastname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [cpassword,setcpassword]=useState("")
    const router=useRouter();

    const {setAuth}=useContext(ThemeContext)
    const [ActiveLoginModal,setActiveLoginModal]=useState(false)

    const hideModla = ()=>{
        setAuth(false)
        
    }
    const showsignin = ()=>{
       setActiveLoginModal(true)
       document.getElementById("form-remove").classList.remove("form-auth-height")
    }
    const showsignup = ()=>{
       setActiveLoginModal(false)
       document.getElementById("form-remove").classList.add("form-auth-height")
    }

    // toast.error('incorrect email', {
    //     position: "top-right",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //SIGNUP
    const auth = () =>{
        var data;
        if(!ActiveLoginModal){
            if(email.length>=5 && firstname.length>=2 && lastname.length>=2 && password.length>=3 && password==cpassword ){
                data = {email,password,firstname,lastname} 
                axios.post('/api/user/signup',data).then(res=>{
                    toast.success('successfully signup', {
                        position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        localStorage.setItem('login')
                        setAuth(true)
                })
            }else{
                toast.error('Try again', {
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
        // LOGIN SINGIN 
        else{
            if(email.length>=5 && password.length>=3 ){
                data = {email,password} 
                axios.post('/api/user/singin',data).then(res=>{
                    toast.success('successfully logged in', {
                        position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        localStorage.setItem('login')
                        setAuth(true)
                })
            }else{
                toast.error('Try again', {
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
        
    }

        return (
            <>
    
    <div className='authform'>
    <form class="form-auth form-auth-height" id='form-remove'>
    {ActiveLoginModal &&<p class="title">Login <span className='cross' onClick={hideModla}  >X</span></p>}
    {!ActiveLoginModal &&<p class="title">Register <span className='cross' onClick={hideModla}  >X</span></p>}
    
    
    {!ActiveLoginModal &&<p class="message">Signup now and get full access to our app. </p>}
    {ActiveLoginModal &&<p class="message">Signin now and get full access to our app. </p>}
    {!ActiveLoginModal && (  <div class="flex">
        <label>
            <input  required="" value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} placeholder="" type="text" class="input authform-input"/>
            <span className='authform-span'>Firstname</span>
        </label>

        <label>
            <input required="" value={lastname} onChange={(e)=>{setlastname(e.target.value)}} placeholder="" type="text" class="input authform-input"/>
            <span className='authform-span'>Lastname</span>
        </label>
    </div>  )}
            
    <label>
        <input required=""  value={email} onChange={(e)=>{setemail(e.target.value)}}placeholder="" type="email" class="input authform-input"/>
        <span className='authform-span'>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} class="input authform-input"/>
        <span className='authform-span'>Password</span>
    </label>
   {!ActiveLoginModal && ( <label>
        <input required="" placeholder="" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}  type="password" class="input authform-input"/>
        <span className='authform-span'>Confirm password</span>
    </label>)}
    <button class="submit">Submit</button>
    {ActiveLoginModal && <p onClick={showsignup} class="signin authform-span  ">Don't have an account?<a className='authform-span'>Signup</a> </p>}
    {!ActiveLoginModal && <p onClick={showsignin} class="signin authform-span  ">Already have an account?<a className='authform-span'>Login</a> </p>}

    {/* <p onClick={showsignin} class="signin ">{para}<a>{val}</a> </p> */}
</form>
</div>
    </>
  )

}

export default AuthForm