import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { ThemeContext} from '../Context/ThemeContext'
import { toast } from "react-toastify";
import UserPlanDetailMobile from '../Responsiveness/UserPlanDetailMobile'
import PlanDetails from '../Components/PlanDetail/PlanDetails'
import axios from 'axios'
import {useRouter} from 'next/router';
const planDetails = () => {
    const router =useRouter()
    const {mobile,setLoader} =useContext(ThemeContext)
    const [list,setlist]=useState([])
    useEffect(()=>{
        try{
        setLoader(true)
        let email = localStorage.getItem('token')
        axios.post('/api/get/userPlanDetails',{email}).then(res=>{
            if(res.status==200)
            {
                setLoader(false)
                setlist(res.data.plan)
            }else
                setLoader(false)
        })
    }catch(e)
    {
        setLoader(false)
        router.push('/')
        toast.error("Network Error", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
    }
    },[])
    if(!mobile)
    {
        return (
        <>
        <PlanDetails list={list}/>
        </>
      )
    }else{
        return(
            <>
            <UserPlanDetailMobile list={list}/>
            </>
        )
    }
}

export default planDetails