import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import html2canvas from 'html2canvas';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect,useState } from 'react';

const Adminstats = () => {
  const {  Userid, mobile , setLoader} = useContext(ThemeContext)
  const [users,setusers]=useState(0)
  const [sell,setsell]=useState(0)
  const [buy,setbuy]=useState(0)
  const [investment,setinvestment]=useState(0)
  useEffect(()=>{
    setLoader(true)
    axios.get('/api/get/noofusers').then(res=>{setusers(res.data.users)})
    axios.get('/api/sell/get').then(res=>{setsell(res.data.sell)})
    axios.get('/api/buy/get').then(res=>{setbuy(res.data.buy)})
    axios.get('/api/get/allinvestment').then(res=>{setinvestment(res.data.investment)})
    setLoader(false)
  })
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
  return (
    <>
    <div id='ss' className='stats-body'>

    <div class="stats-wrapper">
    <div class="stats-img-logo">
      <img className='stats-img-resize' src="remove_bg.png"/>
    </div>
    <h3 >Ghory Trading</h3>
    <p>ADMIN <br/>
    </p>
    
    <div class="stats-media-info">
      <ul>
        <li>
          <span>{users}</span> User
        </li>
        <li>
          <span>{investment}$</span> Investment
        </li>
        <li>
          <span>{buy}$</span> Buy
        </li>
        <li>
          <span>{sell}$</span> Sel
        </li>
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

export default Adminstats