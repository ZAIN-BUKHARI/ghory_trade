import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Link from 'next/link';
import {ThemeContext} from '../Context/ThemeContext'
import { useContext } from 'react';
const Adminlogin = () => {
    // Context
    const {setAdmin}=useContext(ThemeContext)
    // state variables 
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const router=useRouter();


   
   
    const adminlogin = () =>{
        setAdmin(true)
        // if(email=="usmanadmin123@gmail.com"){
        //     if(password=="123456789"){
        //         toast.success('successfully logged in', {
        //             position: "top-right",
        //             autoClose: 2000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "light",
        //           });
        //         router.push('/admin')
        //     }else{
        //         toast.error('incorrect password', {
        //             position: "top-right",
        //             autoClose: 2000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "light",
        //           });
        //     }
        // }else{
        //     toast.error('incorrect email', {
        //         position: "top-right",
        //         autoClose: 2000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //       });
        // }
    }

        return (
            <>
    
    <div className='authform'>
    <form className="form-auth " id='form-remove'>
    <p className="title">Admin</p>

    
    
    <p className="message">Login now and get full access to our app. </p>
    
            
    <label>
        <input required="" onChange={(e)=>{setemail(e.target.value)}} placeholder="" type="email" className="input authform-input"/>
        <span className='authform-span'>Email</span>
    </label> 
        
    <label>
        <input required="" onChange={(e)=>{setpassword(e.target.value)}} placeholder="" type="password" className="input authform-input"/>
        <span className='authform-span'>Password</span>
    </label>
    {email=="usmanadmin123@gmail.com" && password=="usmanadmin123"&&<Link onClick={adminlogin} href="/admin"><button className="submit">Submit</button></Link>}

</form>
</div>
    </>
  )

}

export default Adminlogin