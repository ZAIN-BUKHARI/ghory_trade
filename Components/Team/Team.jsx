import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import html2canvas from 'html2canvas';
import { toast } from 'react-toastify';
import axios from 'axios';
import Dropdown from '../../universe.io/Dropdown';


const Team = () => {
  const {planCount,commission,yourinvestment,Uname, balance ,rank,teamlength  , mobile,setLoader,perDayProfit,Userid} = useContext(ThemeContext)
  const [investmentData,setInvestmentData]=useState({})

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
    navigator.clipboard.writeText(`http://www.ug-trading.services/invite?_id=${Userid}`)
    toast.success('Link copied to your clipboard  ', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  } 

async function investmentCalculations()
{
  let email =localStorage.getItem('token')
  const data={email}
  axios.post('/api/get/allteaminvestment',data).then(res=>{
    setInvestmentData(res.data.data)
})
}

useEffect(()=>{
  setLoader(true)
  investmentCalculations()
  setLoader(false)

  
    
  
},[])


  return (
    <>
    <div id='ss' className='stats-body'>

    <div class="goldShadow stats-wrapper">
    <div class="stats-img-logo">
      <img className=' goldShadow stats-img-resize' src="remove_bg.png"/>
    </div>
    <h3 className='text-[#ffdb1a] font-bold text-3xl' >UG Trading</h3>
    <div className='text-[#ffdb1a] mt-5 font-extrabold' >{Uname} TEAM <br/>
    <div className='Dates-div'>
      <div className='dropdown-list'>
    <Dropdown subtitle={'Members'} teamlength={teamlength} title={'Team List click me'} type={1} />   
      </div>
      <div className='dropdown-list'>
    <Dropdown subtitle={'Plan'} title={'Plan Details'} type={2}  />   
      </div>
      <div className='dates-list'>
      </div>
      </div> 
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
          <span>{investmentData.investment}</span  > <span className='stats-lower-title-mob' >Total Team Investment</span>
        </li>
        <li>
          <span>{rank}</span> <span  className='stats-lower-title-mob'  > Rank </span> 
        </li>
      </ul>
    </div>
    <div class="stats-media-info">
      <ul>
        <li>
          <span>{perDayProfit.toString().slice(0,6)}$</span><span  className='stats-lower-title-mob'  > Daily Profit </span>
        </li>
        
        <li>
          <span>{commission.toString().slice(0,7)}$</span><span  className='stats-lower-title-mob'  >Daily Comission</span>
        </li>
       {yourinvestment>0 &&<li>
          <span>{yourinvestment}</span><span  className='stats-lower-title-mob'  > Your Investment</span>
        </li>
        }
      </ul>
    </div>
    <div class="stats-media-info">
      <ul>
        <li>
          <span>{investmentData.directteam}$</span><span  className='stats-lower-title-mob'  > Direct Investment </span>
        </li>
        <li>
          <span>{planCount}</span><span  className='stats-lower-title-mob'  >Plans</span>
        </li>
        <li>
          <span>{investmentData.indirectteam}$</span><span  className='stats-lower-title-mob'  >Indirect Investment </span>
        </li>
        
      </ul>
    </div>
    <div class="stats-icons">
    </div>
    <div class="stats-btn">
      <button  className='goldShadow bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent hover:bg-gradient-to-r hover:from-white hover:via-[#ffdb1a] hover:to-[#ffdb1a]' onClick={captureScreenshot}>Screenshot</button>
      {!mobile  && <button className='goldShadow bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent hover:bg-gradient-to-r hover:from-white hover:via-[#ffdb1a] hover:to-[#ffdb1a]' onClick={Copy}>Invite more</button>}
    </div>
  </div>
  </div>

    </>
  )
}

export default Team