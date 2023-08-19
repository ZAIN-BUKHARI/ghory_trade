import React from 'react'
import { FcRedo } from 'react-icons/fc';
import { ThemeContext } from '../Context/ThemeContext';
import { useState } from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios from 'axios';
const AuthForm = () => {
    //router
    const router=useRouter()
    // state variables 
    const [firstname,setfirstname]=useState("")
    const [lastname,setlastname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [cpassword,setcpassword]=useState("")

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

    
    //SIGNUP
    const signup = (e) =>{
        e.preventDefault()
            if(email.length>=5 && firstname.length>=2 && lastname.length>=2 && password.length>=3 && password==cpassword ){
               const data = {email,password,firstname,lastname} 
                axios.post('/api/post/signup',data).then(res=>{
                    if(res.data.success==true){
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
                        setActiveLoginModal(true)
                        setAuth(false)
                    }else{
                        toast.error('Try again ', {
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
                })
            }else{
                toast.error('Try again ', {
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
    const signin =(e)=>{
        e.preventDefault()   
        if(email.length>=5 && password.length>=3 ){
                const data = {email,password} 
                axios.post('/api/post/signin',data).then(res=>{
                    console.log(res)
                    if(res.data.success==true){
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
                        localStorage.setItem('token',res.data.user._id)
                        setAuth(true)
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }else{
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
                        localStorage.removeItem('token')
                    }
                })
            }else{
                toast.error('Invalid Credentials', {
                    position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    localStorage.removeItem('token')

            }

    }
        return (
            <>
    
    <div className='authform'>
    <div class="form-auth form-auth-height" id='form-remove'>
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
    {!ActiveLoginModal &&  <button onClick={signup} class="submit">Signup</button>}
    {ActiveLoginModal &&  <button onClick={signin} class="submit">Signin</button>}
    {ActiveLoginModal && <p onClick={showsignup} class="signin authform-span  ">Don't have an account?<a className='authform-span'>Signup</a> </p>}
    {!ActiveLoginModal && <p onClick={showsignin} class="signin authform-span  ">Already have an account?<a className='authform-span'>Login</a> </p>}
   
</div>
</div>
    </>
  )

}

export default AuthForm