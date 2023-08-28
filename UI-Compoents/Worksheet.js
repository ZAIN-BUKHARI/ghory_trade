import React,{useState} from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { useContext,useEffect } from 'react';
import { toast } from 'react-toastify';
import { ThemeContext } from '../Context/ThemeContext'
import axios from 'axios';
const Worksheet = () => {
    //use Context 
    const {balance,router,token,subscription,workStatus}=useContext(ThemeContext)
    const [dailywork,setdailywork]=useState('')
    const startWork = () =>{
        router.push('/dailywork')
    }
    async function getWorkdoc()
    {
        let response = await axios.get('/api/get/links')
        setdailywork(response.data.links[0])
    }
    useEffect(()=>{
        if(!token && subscription=="no")
        {
          router.push('/')
          toast.info("Not allowed here", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        getWorkdoc()
      },[])
  return (
    <>
    <div className='Worksheet-body'>
    <main className="table">
    <section className="table__header">
            <h1>Daily Assignments</h1>
            <h1 className='WORK-WALLET'>Wallet {balance}$</h1>
        </section>
        <section className="table__body">
            <table>
                <thead>
                    <tr>
                        <th> Day </th>
                        <th> Customer </th>
                        <th> work Assign</th>
                        <th> Deadline</th>
                        <th className='work-start'> Status</th>
                        <th> Amount </th>
                        <th className='work-start'> Start</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 1 </td>
                        <td> Zain </td>
                        <td> {dailywork.createdAt}</td>
                        <td> 11:49pm </td>
                        <td>
                            <p className=" WorkSheet-Icon-Alert ">
                             {workStatus=="no"  && <FcHighPriority/>}
                             {workStatus=="yes" &&  <FcOk/> }
                            </p>
                        </td>
                        <td> <strong> $0.67 </strong></td>
                       {workStatus=="no" && <td> <p onClick={startWork} className="Done">Start</p> </td>}
                    </tr>
                     
                </tbody>
            </table>
        </section>
        </main>
        </div>
    </>
  )
}

export default Worksheet