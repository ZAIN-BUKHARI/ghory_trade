import React from 'react'
// import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'




const login = () => {

  
  const router =useRouter()
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')


  const clickHandler = (e) =>{
    if(e.target.name=='email'){
     setEmail(e.target.value)
   }
    else if(e.target.name=='password'){
     setPassword(e.target.value)
     
   }

 }
 

  const submitHandler = async (e) =>{
    e.preventDefault()
    if(password!='' && email!=''){

    
    const data = {email,password}
    // let response =  await fetch(`/api/adminLogin`,{
    let response =  await fetch(`/api/adminLogin`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let a =await response.json()
    
   
   
    setEmail('')
    setPassword('')
    if(a.success){
      
      localStorage.setItem('adminToken',a.token)
      setTimeout(()=>{toast.success('You are successfully logged in', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      },100)
      router.push(`/admin`)

    }else{
      toast.error('Invalid Credentials', {
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
  }
  else{
    toast.error('Cannot set empty fields', {
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
      
      
    
   


  }
  
    
  return (
    <>
   
  
<div className='topper '>
    <div className='box'>
      <span className='borderLine'></span>
      <form  >
        <h2>Admins Login</h2>
        <div className='inputBox'>
          <input onChange={clickHandler} value={email} name='email' type='email' required='required' />
          <span>Email</span>
          <i></i>
        </div>
        <div className='inputBox'>
          <input onChange={clickHandler} value={password} name='password'  type='password' required='required' />
          <span>Password</span>
          <i></i>
        </div>
        <div className='Link' >
              {/* <Link href={'/forgot'}>Forgot password</Link> */}
              {/* <Link href={'/signup'}>Signup</Link> */}
        </div>
        <input onClick={submitHandler} className='butt mt-10' type='button' value='login' />
      </form>
    </div>
    </div>
      
      
  </>
 
  )
}

export default login