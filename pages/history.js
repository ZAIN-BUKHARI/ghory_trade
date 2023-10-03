import React, { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { FcLeft } from "react-icons/fc";
import { useEffect } from 'react';
import axios from 'axios';

const history = () => {
    const {mobile,balance,setLoader} = useContext(ThemeContext)
   const [history,sethistory]=useState([])
    useEffect(()=>{
        setLoader(true)
        const email = localStorage.getItem('token')
        axios.get(`/api/get/history?email=${email}`).then(res=>{
            sethistory(res.data.history)
            setLoader(false)
        });  
        
    },[])
   
   


    return(
      
        <>
      <section class="main">
     

      <section class="attendance">
        <div class="attendance-list ">
          <table class="table">
            <thead>
              <tr>
                   {!mobile && <th> Email </th>}
                    <th> Amount </th>
                    {!mobile && <th> Address</th>}
                    {!mobile && <th> Method</th>}
                    <th> Date</th>
                    <th> Status</th>
              </tr>
            </thead>

            {history!=0 && history.map((item)=>{
                   return  <tbody>
                    <tr>
                    {!mobile &&<td> {item.email}   </td>}
                        <td> {item.amount}  </td>
                        {!mobile && <td> {item.address} </td>}
                        {!mobile && <td> {item.method}  </td>}
                        <td> {item.date}    </td>
                        <td> {item.status}  </td>
                    </tr>
                     
                </tbody>
                 }
                 )} 
          </table>
        </div>
      </section>
    </section>
    
    </>
  
    )




 
}
    


export default history
