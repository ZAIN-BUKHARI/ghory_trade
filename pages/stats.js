import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import html2canvas from 'html2canvas';
import { toast } from 'react-toastify';

const stats = () => {
  const { balance ,rank,teamlength ,teaminvestment , Userid, mobile,setLoader,perDayProfit} = useContext(ThemeContext)
 
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
    <p>TEAM <br/>
    </p>
    
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