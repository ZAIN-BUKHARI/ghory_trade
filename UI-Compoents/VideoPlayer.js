import React, { useEffect } from 'react'
import LightButtonPlayer from '../universe.io/LightButtonPlayer'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import axios from 'axios';

const VideoPlayer = () => {
  const [time,setIme]=useState(10000);
  const[buttonText,setButtonTex]=useState('Wait')
  const[DisableButton,setDsableButton]=useState(true)
  const[comment,setcomment]=useState(true)
  const[textarea,settextarea]=useState("Post a comment ")
  const router=useRouter();
  const Player = () =>{
    console.log('hello')
    var doc = document.getElementById("zain");
    doc.classList.add('yt');

  }
  const postComment =()=>{
    // axios.post('something')
    if(textarea.length==0){
      toast.error('Write your comment properly', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }else{
      console.log("comment")
      setcomment(false)
    }
  }
  useEffect(()=>{
  toast.info('Post a comment & Watch the full video otherwise you cannot proceed furthur and your today earning will not be added to your wallet ', {
      position: "top-center",
      autoClose: 50000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
    <iframe width="1000" height="600" id='zain' src="https://www.youtube.com/embed/OuaFVfN6eeQ?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div>
      <div className='Player-next '>
      {/* <label for="story" className='dailywork-label'>Tell us your story:</label> */}
<div>
<textarea onChange={(e)=>{settextarea(e.target.value)}} value={textarea} className='dailywork-textarea'  rows="5" cols="33"/>
    {/* <button>df</button> */}
</div>

    <LightButtonPlayer func={postComment}  title={"Submit"}   DisableButton={false}/>
    {!comment && !DisableButton && <LightButtonPlayer title={buttonText}   DisableButton={DisableButton}/>}
      </div>
    </div>
    </div>
   
    </div>

    </>
  )
}

export default VideoPlayer