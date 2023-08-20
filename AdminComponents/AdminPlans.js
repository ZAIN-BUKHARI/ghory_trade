import React, { useEffect, useState } from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcRight } from "react-icons/fc";

import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'
import { useRouter } from 'next/router';
import axios from 'axios';


const AdminPlans = () => {
    //use Context 
    const {balance,customers}=useContext(ThemeContext)
    
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
    
    const startWork = (id) =>{
        api(id)
    }
    const detail = (id) =>{
        router.push(`/admindetail?id=${id}`)
    }
    async function api(id){
        await axios.get(`/api/admin/status?_id=${id}&status=${status}`)
        window.location.reload()
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
                        <th> Customer </th>
                        <th> Address </th>
                        <th> Join</th>
                        <th> Level</th>
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
                        <td> 1 </td>
                        <td> Zain </td>
                        <td>{item.email}</td>
                        <td> 17 Dec, 2022 </td>
                        <td> 1 </td>
                        
                        <td> <strong> $ </strong></td>
                        <td className=''>
                        <select 
                      name="select"
                      className="Admin-select"
                      value={status}
                    onChange={(e)=>{setstatus(e.target.value)}}
                      >
                    {status=="verified" && (
                        <>
                         <option className='admin-sheet-reviewed' value={"verified"}>verified</option>
                         <option className='admin-sheet-reviewed' value={"pending"}>pending</option>
                         <option className='admin-sheet-review' value={"rejected"}>rejected</option>
                        </>
                    )}
                    {status=="pending" && (
                        <>
                         <option className='admin-sheet-reviewed' value={"pending"}>pending</option>
                         <option className='admin-sheet-reviewed' value={"verified"}>verified</option>
                         <option className='admin-sheet-review' value={"rejected"}>rejected</option>
                        </>
                    )}
                    {status=="rejected" && (
                        <>
                         <option className='admin-sheet-review' value={"rejected"}>rejected</option>
                         <option className='admin-sheet-reviewed' value={"pending"}>pending</option>
                         <option className='admin-sheet-reviewed' value={"verified"}>verified</option>
                        </>
                    )}
                     
                    </select>
                        </td>
                        <td> <p onClick={(e)=>{startWork(item._id)}} className='WorkSheet-Icon-Alert'><FcRight/></p> </td>
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
        // .admin-sheet-reviewed{
        //     color:green;
        //     font-weight:bold;
        // }
        // .admin-sheet-review{
        //     font-weight:bold;
        //     color:red;
        // }
        // .Admin-select{
        //     outline:none;
        //     color:green;
        // }
        `}</style>
    </>
  )
}

export default AdminPlans