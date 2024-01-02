import React from 'react'
import LoginPage from '../Components/Login/Login'
import SignupPage from '../Components/Signup/Signup'
import ForgotPage from '../Components/Forget/Forgot'
import {useRouter} from 'next/router'

const Authentication = () => {
    const router = useRouter();

    const {page} = router.query;
    if(page=="signup")
        return(<SignupPage/>)
    else if(page=="forgot")
        return(<ForgotPage/>)
    else 
        return(<LoginPage/>)
    
}

export default Authentication