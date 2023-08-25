import React from 'react'
import { FcRedo } from 'react-icons/fc';
import { ThemeContext } from '../Context/ThemeContext';
import { useState } from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';
const AuthForm = () => {
    //router
    const router=useRouter()
    // state variables 
    const [firstname,setfirstname]=useState("")
    const [lastname,setlastname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [cpassword,setcpassword]=useState("")

    const {setAuth,mobile}=useContext(ThemeContext)
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
               const data = {email,password,firstname,lastname,cpassword} 
                axios.post('/api/post/signup',data).then(res=>{
                    if(res.data.success==true){
                    toast.success('Successfully signup', {
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
                })
            
    }
    const signin =(e)=>{
                e.preventDefault()
                const data = {email,password} 
                console.log(email,password)
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
                        localStorage.setItem('token',res.data.user.email)
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
                        localStorage.setItem('token','no')
                    }
                })
            

    }
   
   if(mobile){

    return (
           <>
    
    <div className='authform-mobile'>
    <div className="form-auth form-auth-height-mobile" id='form-remove'>
    {ActiveLoginModal &&<p className="title">Login <span className='cross' onClick={hideModla}  >X</span></p>}
    {!ActiveLoginModal &&<p className="title">Register <span className='cross' onClick={hideModla}  >X</span></p>}
    
    
    {!ActiveLoginModal &&<p className="message">Signup now and get full access to our app. </p>}
    {ActiveLoginModal &&<p className="message">Signin now and get full access to our app. </p>}
    {!ActiveLoginModal && (  <div className="flex">
        <label>
            <input  required="" value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} placeholder="" type="text" className="input authform-input"/>
            <span className='authform-span'>Firstname</span>
        </label>

        <label>
            <input required="" value={lastname} onChange={(e)=>{setlastname(e.target.value)}} placeholder="" type="text" className="input mobile-left-field authform-input"/>
            <span className='authform-span'>Lastname</span>
        </label>
    </div>  )}
            
    <label>
        <input required=""  value={email} onChange={(e)=>{setemail(e.target.value)}}placeholder="" type="email" className="input authform-input"/>
        <span className='authform-span'>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="input authform-input"/>
        <span className='authform-span'>Password</span>
    </label>
   {!ActiveLoginModal && ( <label>
        <input required="" placeholder="" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}  type="password" className="input authform-input"/>
        <span className='authform-span'>Confirm password</span>
    </label>)}
    {!ActiveLoginModal &&  <button onClick={signup} className="submit">Signup</button>}
    {ActiveLoginModal &&  <button onClick={signin} className="submit">Signin</button>}
    {ActiveLoginModal && <p onClick={showsignup} className="signin authform-span  ">Don't have an account?<a className='authform-span'>Signup</a> </p>}
    {!ActiveLoginModal && <p onClick={showsignin} className="signin authform-span  ">Already have an account?<a className='authform-span'>Login</a> </p>}
   
</div>
</div>
    </>
  )
}
else{
    return (
        <>
 
 <div className='authform'>
 <div className="form-auth form-auth-height" id='form-remove'>
 {ActiveLoginModal &&<p className="title">Login <span className='cross' onClick={hideModla}  >X</span></p>}
 {!ActiveLoginModal &&<p className="title">Register <span className='cross' onClick={hideModla}  >X</span></p>}
 
 
 {!ActiveLoginModal &&<p className="message">Signup now and get full access to our app. </p>}
 {ActiveLoginModal &&<p className="message">Signin now and get full access to our app. </p>}
 {!ActiveLoginModal && (  <div className="flex">
     <label>
         <input  required="" value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} placeholder="" type="text" className="input authform-input"/>
         <span className='authform-span'>Firstname</span>
     </label>

     <label>
         <input required="" value={lastname} onChange={(e)=>{setlastname(e.target.value)}} placeholder="" type="text" className="input authform-input"/>
         <span className='authform-span'>Lastname</span>
     </label>
 </div>  )}
         
 <label>
     <input required=""  value={email} onChange={(e)=>{setemail(e.target.value)}}placeholder="" type="email" className="input authform-input"/>
     <span className='authform-span'>Email</span>
 </label> 
     
 <label>
     <input required="" placeholder="" type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="input authform-input"/>
     <span className='authform-span'>Password</span>
 </label>
{!ActiveLoginModal && ( <label>
     <input required="" placeholder="" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}  type="password" className="input authform-input"/>
     <span className='authform-span'>Confirm password</span>
 </label>)}
 {!ActiveLoginModal &&  <button onClick={signup} className="submit">Signup</button>}
 {ActiveLoginModal &&  <button onClick={signin} className="submit">Signin</button>}
 {ActiveLoginModal && <p onClick={showsignup} className="signin authform-span  ">Don't have an account?<a className='authform-span'>Signup</a> </p>}
 {!ActiveLoginModal && <p onClick={showsignin} className="signin authform-span  ">Already have an account?<a className='authform-span'>Login</a> </p>}

</div>
</div>
 </>
)
}
}

export default AuthForm