import React from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { useContext,useEffect,useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { ThemeContext } from '../Context/ThemeContext'

const Worksheet = () => {
    //use Context 
    const {sethideSidebar,hideSidebar,mobile,todayWork,views,level,email,setbalance,linktoLevel,Uname,perDayProfit,balance,router,token,subscription,workStatus,workUploadedDate}=useContext(ThemeContext)
    const [hide,sethide]=useState(false)
   
    const startWork = (link,length) =>{
        router.push(`/dailywork?videoID=${link}&Length=${length}`)
    }
    const Complete=async()=>{
      const data = {email}
      await axios.post('/api/post/balanceincrement',data)
        toast.info('Congrats for completing tasks :) ', {
          position: "top-center",
          autoClose: 50000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        getBlalance()
  
    }
    function getBlalance()
    {
      const data={email}
      axios.post('/api/get/balance',data).then(res=>{
        if(res.data.success==true)
        {
          setbalance(parseFloat(res.data.balance))
          window.location.replace('/')
        }else{
          alert('server error try again')
        }
      })
    }
    useEffect(()=>{
      if(mobile && hideSidebar)
      {
        sethideSidebar(false)
      }
    })
    if(!mobile)
    {

  return (
    <>
    {token && subscription == 'yes' && (
    <>
    <div className='Worksheet-body'>
    <main className="table">
    <section className="table__header">
            <h1><strong className='strong-tag'> Daily Profit ${perDayProfit} </strong></h1>
            <h1 className='WORK-WALLET'>Wallet {balance}$</h1>
        </section>
        <section className="table__body">
            <table>
                <thead>
                    <tr>
                        <th> Work </th>
                        <th> Customer </th>
                        <th> Assign</th>
                        <th> Deadline</th>
                        <th className='work-start'> Status</th>
                        {/* <th> Amount </th> */}
                        <th className='work-start'> Start</th>
                    </tr>
                </thead>
                {linktoLevel==0 &&  (
                    <h1>Todays work is not uploaded yet</h1>
                )}
                 {linktoLevel!=0 && linktoLevel.slice(0,parseInt(level)-views).map((item,index)=>{


                   return  <tbody>
                    <tr>
                        <td> {index+1} </td>
                        <td> {Uname} </td>
                        <td> {workUploadedDate}</td>
                        <td> 11:49pm </td>
                        <td>
                            <p className=" WorkSheet-Icon-Alert ">
                             {workStatus=="no"  && <FcHighPriority/>}
                             {workStatus=="yes" &&  <FcOk/> }
                            </p>
                        </td>
                        {/* <td> <strong> ${(perDayProfit/parseInt(level))} </strong></td> */}
                       {workStatus=="no" && <td> <p onClick={()=>{startWork(item.link,item.length)}} className="Done">Start</p> </td>}
                    </tr>
                     
                </tbody>
                 }
                 )} 

            </table>
        
        {workStatus=='yes' && linktoLevel!=0 && <td> <p onClick={()=>{alert('All Task Done ')}} className="Done ">Complete</p> </td>} 
        {workStatus=='no'  && views!=parseInt(level) && <td> <p onClick={()=>{alert('Please complete your all tasks')}} className="Done dim-btn">click when your task complete</p> </td>} 
        {views==parseInt(level) &&  <td> <p onClick={Complete}  className={`Done dim `}>click here for submision</p> </td>} 
            
        </section>
        </main>
        </div>
       <style>{`
       .dim-btn{
        background-color:#f1807e;
        font-size:12px;
        color:black !important;
        width:200px;
        // cursor: none;

       }
       .strong-tag{
        font-size:20px;
       }
       .dim{
        width:200px;
       }
     
       `}</style>
       </>
       )}
       </>
    
  )
}
else{
  return (
    <>
    {token && subscription == 'yes' && (
    <>
    <div className='worksheet-flow'>
    <div className='Worksheet-body-mobile'>
    <main className="table">
    <section className="table__header">
            <h1><strong className='strong-tag'> Daily Profit ${perDayProfit} </strong></h1>
            <h1 className='WORK-WALLET'>Wallet {balance}$</h1>
        </section>
        <section className="table__body">
            <table>
                <thead>
                    <tr>
                        <th> Work </th>
                        <th> Customer </th>
                        <th> Assign</th>
                        <th> Deadline</th>
                        <th className='work-start'> Status</th>
                        {/* <th> Amount </th> */}
                        <th className='work-start'> Start</th>
                    </tr>
                </thead>
                {linktoLevel==0 &&  (
                    <h1>Todays work is not uploaded yet</h1>
                )}
                 {linktoLevel!=0 && linktoLevel.slice(0,parseInt(level)-views).map((item,index)=>{


                   return  <tbody>
                    <tr>
                        <td> {index+1} </td>
                        <td> {Uname} </td>
                        <td> {workUploadedDate}</td>
                        <td> 11:49pm </td>
                        <td>
                            <p className=" WorkSheet-Icon-Alert ">
                             {workStatus=="no"  && <FcHighPriority/>}
                             {workStatus=="yes" &&  <FcOk/> }
                            </p>
                        </td>
                        {/* <td> <strong> ${(perDayProfit/parseInt(level))} </strong></td> */}
                       {workStatus=="no" && <td> <p onClick={()=>{startWork(item.link,item.length)}} className="Done">Start</p> </td>}
                    </tr>
                     
                </tbody>
                 }
                 )} 

            </table>
        
        {workStatus=='yes' && linktoLevel!=0 && <td> <p onClick={()=>{alert('All Task Done ')}} className="Done ">Complete</p> </td>} 
        {workStatus=='no'  && views!=parseInt(level) && <td> <p onClick={()=>{alert('Please complete your all tasks')}} className="Done dim-btn">click when your task complete</p> </td>} 
        {views==parseInt(level) &&  <td> <p onClick={Complete}  className={`Done dim `}>click here for submision</p> </td>} 
            
        </section>
        </main>
        </div>
        </div>
       <style>{`
       .dim-btn{
        background-color:#f1807e;
        font-size:12px;
        color:black !important;
        width:200px;
        // cursor: none;

       }
       .strong-tag{
        font-size:20px;
       }
       .dim{
        width:200px;
       }
     
       `}</style>
       </>
       )}
       </>
    
  )
}
}

export default Worksheet