import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { ThemeContext} from '../Context/ThemeContext'
import UserPlanDetailMobile from '../Responsiveness/UserPlanDetailMobile'
import UserPlanDetail from '../UI-Compoents/UserPlanDetail'
import axios from 'axios'

const detail = () => {
    const {mobile,setLoader} =useContext(ThemeContext)
    const [list,setlist]=useState([])
    useEffect(()=>{
        setLoader(true)
        let email = localStorage.getItem('token')
        axios.post('/api/get/userPlanDetails',{email}).then(res=>{
            if(res.status==200)
            {
                console.log(res.data)
                setlist(res.data.plan)
            }
        })
        setLoader(false)
    },[])
    if(!mobile)
    {
        return (
        <>
        <UserPlanDetail list={list}/>
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

export default detail