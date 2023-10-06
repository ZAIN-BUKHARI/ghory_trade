import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { ThemeContext} from '../Context/ThemeContext'
import Table from '../Responsiveness/Table'
import Members from '../UI-Compoents/Members'
import axios from 'axios'

const detail = () => {
    const {mobile,setLoader} =useContext(ThemeContext)
    const [list,setlist]=useState([])
    useEffect(()=>{
        setLoader(true)
        let email = localStorage.getItem('token')
        axios.post('/api/TTL/allmembersdata',{email}).then(res=>{
            console.log(res.data.members)
            if(res.status==200)
            {
                setlist(res.data.members)
            }
        })
        setLoader(false)
    },[])
    if(!mobile)
    {
        return (
        <>
        <Members list={list}/>
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