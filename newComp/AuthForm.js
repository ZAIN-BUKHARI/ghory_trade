import React from 'react'
import { FcRedo } from 'react-icons/fc';
import { ThemeContext } from '../Context/ThemeContext';
import { useState } from 'react';
import { useContext } from 'react';
const AuthForm = ({TopTitle,smallTitle,para,val}) => {
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
            <input  required="" placeholder="" type="text" class="input authform-input"/>
            <span className='authform-span'>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input authform-input"/>
            <span className='authform-span'>Lastname</span>
        </label>
    </div>  )}
            
    <label>
        <input required="" placeholder="" type="email" class="input authform-input"/>
        <span className='authform-span'>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" class="input authform-input"/>
        <span className='authform-span'>Password</span>
    </label>
   {!ActiveLoginModal && ( <label>
        <input required="" placeholder="" type="password" class="input authform-input"/>
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