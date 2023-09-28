import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'
import Comment from './Comment'
import axios from 'axios';
const VideoPlayer = () => {

  
  const {videoID,Length,router,getVideoInfo,videoTitle,email,workStatus,mobile}=useContext(ThemeContext)
  
  // STATE VARIABLES
  const[HideCompleteWorkbtn,setHideCompleteWorkbtn]=useState(true)
  
  const AddclassforVideoPLayerControlsDisable = () =>{
    var doc = document.getElementById("zain");
    doc.classList.add('yt');
  }
  // const RemoveclassforVideoPLayerControlsEnables = () =>{
  //   var doc = document.getElementById("zain");
  //   doc.classList.remove('yt');
  // }
  
  useEffect(()=>{
    if(localStorage.getItem('youtube')=='true' && !mobile)
    {
      router.push('/')
      setTimeout(() => {
        window.location.reload()
        alert('Task Complete')
        
      },1000);
      localStorage.setItem('youtube','false');
    }
    else{

    if(workStatus=='yes'){
      router.push('/')
      toast.info('Not allowed here ', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setTimeout(() => {
      getVideoInfo(videoID)
    }, 500);
    setTimeout(()=>{
      if(!mobile)
      {
        AddclassforVideoPLayerControlsDisable()
      }
    },100)
    setTimeout(()=>{
      // RemoveclassforVideoPLayerControlsEnables()
      setHideCompleteWorkbtn(false)
    },parseInt(Length)*60000)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        router.push('/');
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }
  },[router])

  
  const Viewincrement=async()=>{
    const data = {email}
    try{

    let res = await axios.post('/api/post/videoswatch',data)
      if(res.data.success==true)
      {
        localStorage.setItem('youtube','true');
        window.location.href = `https://www.youtube.com/watch?v=${videoID}`

        
      }else{
        alert('Server error try again')
        router.push('/')
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      }
    }catch(e)
    {
      router.push('/')
        setTimeout(() => {
          window.location.reload()
        }, 1000);
    }

  }
  
  if(!mobile)
  {
  return (
    <>


    <div className='TestBody'>

    <main className="TestBody-container">
        <section className="TestBody-main-video">
    <iframe  id='zain' src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=0`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


            <h3 className="title">{videoTitle}</h3>
            <div className='test-bootom-sec'>
              <div className='test-comment-head'>
              </div>
              
          {!HideCompleteWorkbtn &&
           <button className='done-btn-videoplayer' onClick={Viewincrement} >Submit</button>
           }
           </div>

        </section>
        <section className="TestBody-video-playlist">
            <h3 className="title">{videoTitle}</h3>
            <p>video length &nbsp; . &nbsp; {Length} Minutes</p>
            <p className=' mobile-title-player  '>Disclaimer : Watch the whole video until you see a submit button on your screen and post a comment </p>
            <div className="TestBody-videos">
                <Comment/>
            </div>
        </section>
    </main>
    </div>
    
    </>
  )
}else
{
  return (
    <>

    <div className='iframe-body-left'></div>
    <div className='iframe-body-mid'></div>
    <div className='iframe-body-right'></div>
    <div className='TestBody-mobile'>
    <main className="TestBody-container-mob">
        <section className="TestBody-main-video">
    <iframe   src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3 className="title mobile-title-player">{videoTitle}</h3>
            <div className='test-bootom-sec'>
              <div>
          {!HideCompleteWorkbtn &&
           <button className='done-btn-videoplayer mobile-submit-player' onClick={Viewincrement} >Submit</button>}
            <p className=' mobile-title-player video-timer-player '>video length &nbsp; . &nbsp; {Length} Minutes</p>
            <p className=' mobile-title-player  '>Disclaimer : Watch the whole video until you see a submit button on your screen and post a comment </p>
              </div>
           </div>
        </section>

    </main>
    </div>
    
    </>
  )
}

}

export default VideoPlayer