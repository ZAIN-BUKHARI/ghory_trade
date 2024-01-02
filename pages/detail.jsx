import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { ThemeContext} from '../Context/ThemeContext'
import Table from '../Responsiveness/Table'
import MemberDetails from '../Components/MemberDetail/MemberDetails'
import axios from 'axios'
import { toast } from "react-toastify";


const detail = () => {
    const {mobile,setLoader} =useContext(ThemeContext)
    const [list,setlist]=useState([])
    useEffect(()=>{
        try{
            setLoader(true)
            let email = localStorage.getItem('token')
            axios.post('/api/TTL/allmembersdata',{email}).then(res=>{
            if(res.status==200)
            {
                setlist(res.data.members)
                setTimeout(() => {
                    setLoader(false)
                }, 2000);
            }else
            {
                setLoader(false)

            }
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
        <MemberDetails list={list}/>
        </>
      )
    }else{
        return(
            <>
            <Table list={list}/>
            </>
        )
    }
}

export default detail