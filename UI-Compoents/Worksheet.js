import React from 'react'
import { FcHighPriority } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { useContext,useEffect,useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { ThemeContext } from '../Context/ThemeContext'

const Worksheet = () => {
    //use Context 
    const {setLoader,Userid,fetchDailyWork,isLogin,setvideoID,setLength,balance,sethideSidebar,hideSidebar,mobile,todayWork,level,email,setbalance,linktoLevel,Uname,perDayProfit,router,token,subscription,workStatus,workUploadedDate}=useContext(ThemeContext)
    const [hide,sethide]=useState(false)
    const [disable,setdisable]=useState(true)
    const [views,setviews]=useState(true)
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
      alert('Thanks for submitting tasks wait 10s 😃')
      setdisable(false)
        setLoader(true)
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
      //   

    }
    async function  updateViews()
    {
      const email = localStorage.getItem('token')
        axios.get(`/api/get/views?email=${email}`).then(res=>{
            setviews(res.data.views)
        }); 
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
      
      updateViews()
      fetchDailyWork() 
    },[])
    
    
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
                <th className='status-worksheet'>Staus</th>
                <th className=''>Start</th>
              </tr>
            </thead>

            {linktoLevel==0 &&  (
                <h1>Todays work is not uploaded yet</h1>
                )}
                
            {linktoLevel!=0 && views<=10 && linktoLevel.slice(0,parseInt(level)-views).map((item,index)=>{

              return(
            <tbody>
              <tr>
                <td>{index+1}</td>
                {!mobile && <td>{Uname}</td>}
                {!mobile &&<td>{workUploadedDate}</td>}
                {!mobile &&<td>11:59pm</td>}
               {!mobile && <td>{currentTime.slice(0,5)} {currentTime.slice(8,11)}</td>}
                <td><p className=" WorkSheet-Icon-Alert ">
                              {workStatus=="no"  && <FcHighPriority className='worsheet-stats-icon-web'/>}
                              {workStatus=="yes" &&  <FcOk className='worsheet-stats-icon-web'/> }
                    </p>
                </td>
                <td> {workStatus=="no" && <button onClick={()=>{startWork(item.link,item.length)}} >View</button>}</td>
              </tr>
              
            </tbody>)})}
          </table>
            {workStatus=='yes' && linktoLevel!=0 && <td> <p onClick={()=>{alert('All Task Done ')}}   className="dim-btn-complete ">Complete</p> </td>} 
            {workStatus=='no'  && views<parseInt(level) && <td> <p onClick={()=>{alert('Please complete your all tasks')}} className="Done dim-btn-incomplete">click when your task complete</p> </td>} 
            {views>=parseInt(level) &&  <td> {disable &&<p onClick={Complete}  className='dim-btn-click'>click here for submision</p>} </td>} 
      
        </div>
      </section>
    </section>
    
    </>
    )}
    <style>
      {`
      
      .status-worksheet {
        padding: .4rem 0;
        // border-radius: 2rem;
        text-align: center;
    }
      
      `}
    </style>
    </>

    )




















}

export default Worksheet