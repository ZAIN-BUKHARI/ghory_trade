import React, { useEffect } from 'react'
import LightButtonPlayer from '../universe.io/LightButton'
import { useState } from 'react'
import { useRouter } from 'next/router'
const VideoPlayer = () => {
  const [time,setIme]=useState(10000);
  const[buttonText,setButtonTex]=useState('Wait until the video is complete')
  const[DisableButton,setDsableButton]=useState(true)
  const router=useRouter();
  const Player = () =>{
    console.log('hello')
    var doc = document.getElementById("zain");
    doc.classList.add('yt');

  }
  useEffect(()=>{
    setTimeout(()=>{
      Player()
    },100)
    setTimeout(()=>{
      setDsableButton(false)
      setButtonTex('Next')
    },time)
  },[])

  
  return (
    <>
    <div className='flex'>

    <div className='Player-Main Player-Color'> 
    <iframe width="1000" height="700" id='zain' src="https://www.youtube.com/embed/OuaFVfN6eeQ?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <idv>
      <div className='Player-next '>
    {/* <LightButtonPlayer title={buttonText}   DisableButton={DisableButton}/> */}
    {/* <button onClick={push}  disabled={DisableButton}>{buttonText}</button> */}
      </div>
    </idv>
    </div>
   
    </div>

    </>
  )
}

export default VideoPlayer