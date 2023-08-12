import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';
import { FcRedo } from 'react-icons/fc';


const AuthForm = ({TopTitle,smallTitle,para,val}) => {
    const router = useRouter();
    const hideModla = ()=>{
        if(router.asPath=='/login')
        {
            router.push('/register')

        }else{
            router.push('/')
        }
        
    }
    const showsignin = ()=>{
        if(router.asPath!='/login'){
            router.push('/login')
        }
        else{
            router.push('/register')

        }
    }
  return (
    <>
    
    <div className='authform'>
    <form class="form">
    <p class="title">{TopTitle}  <FcRedo className='cross' onClick={hideModla}  /></p>
    
    
    <p class="message">{smallTitle} now and get full access to our app. </p>
    {router.asPath!='/login' && (  <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Lastname</span>
        </label>
    </div>  )}
            
    <label>
        <input required="" placeholder="" type="email" class="input"/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Password</span>
    </label>
   {router.asPath!='/login' && ( <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Confirm password</span>
    </label>)}
    <button class="submit">Submit</button>
    <p onClick={showsignin} class="signin">{para}<a>{val}</a> </p>
</form>
</div>
    </>
  )
}

export default AuthForm