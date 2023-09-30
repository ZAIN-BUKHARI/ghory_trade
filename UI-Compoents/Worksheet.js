import React from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { useContext,useEffect,useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { ThemeContext } from '../Context/ThemeContext'
import { FcLeft } from "react-icons/fc";
import Header from '../Responsiveness/Header'
const Worksheet = () => {
    //use Context 
    const {setLoader,Userid,fetchDailyWork,setvideoID,setLength,balance,sethideSidebar,hideSidebar,mobile,todayWork,views,level,email,setbalance,linktoLevel,Uname,perDayProfit,router,token,subscription,workStatus,workUploadedDate}=useContext(ThemeContext)
    const [hide,sethide]=useState(false)
    const [disable,setdisable]=useState(false)
    const [currentTime, setCurrentTime] = useState('');
  const [stop,setstop]=useState(true)
  const handleButtonClick = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    setstop(false)
    setCurrentTime(formattedTime);
  };
   
    const startWork = (link,length) =>{
        setvideoID(link)
        setLength(length)
        router.push(`/dailywork`)
    }
    const Complete=async()=>{
      setdisable(true)
      setLoader(true)
      // setTimeout(() => {
      const data = {Userid}
       axios.post('/api/post/balanceincrement',data).then(res=>{
         window.location.replace('/')
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
         setLoader(false)
        }).catch(e=>{
          alert('Sever error')
          window.location.replace('/')
          setLoader(false)
        })
        setLoader(false)
      // }, 1000);

    }
    useEffect(()=>{
      if(stop==true)
      {
        handleButtonClick()
      }
      if(mobile && hideSidebar)
      {
        sethideSidebar(false)
      }
      fetchDailyWork() 
    },[linktoLevel])

    
    return(
      <>
      {token && subscription == 'yes' && (
        <>
      <section class="main">
     

      <section class="attendance">
        <div class="attendance-list">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                {!mobile && <th>Name</th>}
                {!mobile &&<th>Assign</th>}
                {!mobile &&<th>Deadline</th>}
               {!mobile && <th>Time</th>}
                <th>Staus</th>
                <th>Start</th>
              </tr>
            </thead>

            {linktoLevel==0 &&  (
                <h1>Todays work is not uploaded yet</h1>
                )}
            {linktoLevel!=0 && linktoLevel.slice(0,parseInt(level)-views).map((item,index)=>{

              return(
            <tbody>
              <tr>
                <td>{index+1}</td>
                {!mobile && <td>{Uname}</td>}
                {!mobile &&<td>{workUploadedDate}</td>}
                {!mobile &&<td>11:59pm</td>}
               {!mobile && <td>{currentTime.slice(0,5)} {currentTime.slice(9,11)}</td>}
                <td><p className=" WorkSheet-Icon-Alert ">
                              {workStatus=="no"  && <FcHighPriority className='worsheet-stats-icon-web'/>}
                              {workStatus=="yes" &&  <FcOk className='worsheet-stats-icon-web'/> }
                    </p>
                </td>
                <td> {workStatus=="no" && <button onClick={()=>{startWork(item.link,item.length)}} >View</button>}</td>
              </tr>
              
            </tbody>)})}
          </table>
            {workStatus=='yes' && linktoLevel!=0 && <td> <p onClick={()=>{alert('All Task Done ')}} className="dim-btn-complete ">Complete</p> </td>} 
            {workStatus=='no'  && views!=parseInt(level) && <td> <p onClick={()=>{alert('Please complete your all tasks')}} className="Done dim-btn-incomplete">click when your task complete</p> </td>} 
            {views==parseInt(level) &&  <td> <p onClick={Complete}  className='dim-btn-click'>click here for submision</p> </td>} 
      
        </div>
      </section>
    </section>
    
    </>
    )}
    </>
    )




















}

export default Worksheet