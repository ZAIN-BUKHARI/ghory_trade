import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import html2canvas from 'html2canvas';
import { toast } from 'react-toastify';
import axios from 'axios';
import Dropdown from '../universe.io/Dropdown';


const stats = () => {
  const {yourinvestment, balance ,rank,teamlength ,teaminvestment , mobile,setLoader,perDayProfit} = useContext(ThemeContext)
  const [team,setteam]=useState([])
  const captureScreenshot = async () => {
    const elementToCapture = document.getElementById('ss'); // Replace with the ID of the element you want to capture
    if (elementToCapture) {
      const canvas = await html2canvas(elementToCapture);
      const screenshotURL = canvas.toDataURL('image/png');
       const downloadLink = document.createElement('a');
       downloadLink.href = screenshotURL;
       downloadLink.download = 'screenshot.png';
       downloadLink.click();
    }
  };
  const Copy = () =>{
    navigator.clipboard.writeText(`http://www.ghory.trade/invite?_id=${Userid}`)
    toast.success('Link copied to your clipboard  ', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
} 
useEffect(()=>{
  setLoader(true)
  let email =localStorage.getItem('token')
  const data = {email}
  axios.post(`api/TTL/teammemebers`,data).then(res=>{
    if(res.status==200)
    {
      setteam(res.data.members)
      setLoader(false)
    }
  })
  
    
  
},[])


  return (
    <>
    <div id='ss' className='stats-body'>

    <div class="stats-wrapper">
    <div class="stats-img-logo">
      <img className='stats-img-resize' src="remove_bg.png"/>
    </div>
    <h3 >Ghory Trading</h3>
    <div>TEAM <br/>
    <Dropdown team={team} />          
    </div>
    
    <div class="stats-media-info">
      <ul>
        <li>
          <span>{balance.toString().slice(0,8)}$</span><span  className='stats-lower-title-mob'  > Wallet </span>
        </li>
        <li>
          <span>{teamlength}</span><span  className='stats-lower-title-mob'  > Teams</span>
        </li>
        <li>
          <span>{teaminvestment}</span  > <span className='stats-lower-title-mob' > Investment</span>
        </li>
        <li>
          <span>{rank}</span> <span  className='stats-lower-title-mob'  > Rank </span> 
        </li>
      </ul>
    </div>
    <div class="stats-media-info">
      <ul>
        <li>
          <span>{perDayProfit.toString().slice(0,8)}$</span><span  className='stats-lower-title-mob'  > Daily Profit </span>
        </li>
        <li>
          <span>0</span><span  className='stats-lower-title-mob'  > Team Comission</span>
        </li>
       {yourinvestment>0 &&<li>
          <span>{yourinvestment}</span><span  className='stats-lower-title-mob'  > Your Investment</span>
        </li>
        }
      </ul>
    </div>
    <div class="stats-icons">
    </div>
    <div class="stats-btn">
      <button onClick={captureScreenshot}>Screenshot</button>
      {!mobile && <button onClick={Copy}>Invite more</button>}
    </div>
  </div>
  </div>

    </>
  )
}

export default stats