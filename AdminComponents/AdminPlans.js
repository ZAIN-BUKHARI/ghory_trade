import React, { useEffect, useState } from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcRight } from "react-icons/fc";

import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'
import { useRouter } from 'next/router';
import axios from 'axios';


const AdminPlans = () => {
    //use Context 
    const {balance,customers,setLoader}=useContext(ThemeContext)
    
    //router
    const router = useRouter()
    //state variables
    const [status,setstatus]=useState("")
    //useEffect for checking path and set status default 
    useEffect(()=>{
        if(router.asPath=="/adminview")
            setstatus("verified")
        else if(router.asPath=="/adminjoin")
            setstatus("pending")
        else if(router.asPath=="/adminplanreject")
            setstatus("rejected")
    },[])
    
    const startWork = (id,email,investment) =>{
        api(id,email,investment)
    }
    const detail = (id) =>{
        var plan = "join"
        router.push(`/admindetail?id=${id}&plan=${plan}`)
    }
    async function api(id,email,investment){
        setLoader(true)
        let res =  await axios.get(`/api/admin/status?_id=${id}&status=${status}&email=${email}&investment=${investment}`)
        if(res.data.success==true){
            setLoader(false)
            window.location.reload()
        }else{
            setLoader(false)
            alert('Server error contact site developer for this issue')
        }
        setLoader(false)

    }


  return (
    <>
    <div className='AdminWorksheet-body'>
    <main className="table">
    <section className="table__header">
        </section>
        <section className="table__body">
            <table>
                        
                    <thead>
                    <tr>
                        <th> ID </th>
                        <th>  </th>
                        <th> Email </th>
                        <th> Join</th>
                        <th> Amount </th>
                        <th> Status </th>
                        <th> Update </th>
                        <th className='work-start'> Details</th>
                    </tr>
                </thead>
                {customers.map((item)=>(
                    <>
                <tbody key={item._id}>
                
                    <tr>
                        <td> {item._id.slice(0,5)} </td>
                        <td> {item.name} </td>
                        <td>{item.email}</td>
                        <td> {item.date} </td>
                        
                        <td> <strong> ${item.investment} </strong></td>
                        <td className=''>
                        <select 
                      name="select"
                      className="Admin-select"
                      value={status}
                    onChange={(e)=>{setstatus(e.target.value)}}
                      >
                    {status=="verified" && (
                        <>
                         <option className='admin-sheet-reviewed option-one' value={"verified"}>verified</option>
                         <option className='admin-sheet-reviewed option-two' value={"pending"}>pending</option>
                         <option className='admin-sheet-review   option-three' value={"rejected"}>rejected</option>
                        </>
                    )}
                    {status=="pending" && (
                        <>
                         <option className='admin-sheet-reviewed option-two' value={"pending"}>pending</option>
                         <option className='admin-sheet-reviewed option-one' value={"verified"}>verified</option>
                         <option className='admin-sheet-review   option-three' value={"rejected"}>rejected</option>
                        </>
                    )}
                    {status=="rejected" && (
                        <>
                         <option className='admin-sheet-review   option-three' value={"rejected"}>rejected</option>
                         <option className='admin-sheet-reviewed option-two' value={"pending"}>pending</option>
                         <option className='admin-sheet-reviewed option-one' value={"verified"}>verified</option>
                        </>
                    )}
                     
                    </select>
                        </td>
                        <td> <p onClick={(e)=>{startWork(item._id,item.email,item.investment)}} className='Left'><FcRight/></p> </td>
                        <td> <p onClick={(e)=>{detail(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
                    </tr>
                     
                        
                </tbody>
                          </>
                      ))}
            </table>
            </section>
        </main>
        </div>
        <style>{`
        .Left{
            font-size: 20px;
    cursor: pointer;
    margin-left: 10px;
        }
        .admin-sheet-reviewed{
            background:white !important;
            border:2px solid black;
            color:green;
            font-weight:bold;
        }
        .admin-sheet-review{
            background:white !important;
            border:2px solid black;
            font-weight:bold;
            color:red;
        }
        .Admin-select{
            background:white !important;
            border:2px solid black;
            outline:none;
            color:blue;
        }
        `}</style>
    </>
  )
}

export default AdminPlans