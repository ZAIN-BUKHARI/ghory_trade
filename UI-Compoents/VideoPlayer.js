import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'
import {FaYoutube} from 'react-icons/fa'
import Comment from './Comment'
const VideoPlayer = () => {


 const {setbalance,router,PostComment,SubscribeChannel,channel,getVideoInfo,videoTitle,duration}=useContext(ThemeContext)


  // STATE VARIABLES
  const [time,setIme]=useState(10000);
  const[buttonText,setButtonTex]=useState('Wait')
  const[DisableButton,setDsableButton]=useState(true)
  const[comment,setcomment]=useState(true)
  const[textarea,settextarea]=useState("Post a comment ")
  const[SubscriberBtn,setSubscriberBtn]=useState(false)


  const Player = () =>{
    console.log('hello')
    var doc = document.getElementById("zain");
    doc.classList.add('yt');

  }
  const next =()=>{
    router.push('/work')
    setbalance(0.67)
  }
  const postComment =()=>{
    // axios.post('something')
    if(textarea.length==0){
      toast.error('Cannot post empty comment', {
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
     let bool =  PostComment(textarea)
     if(bool){
      toast.success('Comment Posted Successfully', {
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
      toast.error('login youtube with google account ', {
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
    }
  }
  const subscribe =()=>{
   
      let bool = SubscribeChannel()
     if(bool){
      toast.success('Subscribed channel  Successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setSubscriberBtn(true)
     }else{
      toast.info('Already Subscribed', {
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
  }
  const subscribed=()=>{
    toast.success('Subscribed :)', {
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
    getVideoInfo('EAyo3_zJj5c')
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
    },duration)
  },[])

  

  
//   return (
//     <>
//     <div className='flex'>

//     <div className='Player-Main Player-Color'> 
//     <iframe width="1000" height="600" id='zain' src="https://www.youtube.com/embed/OuaFVfN6eeQ?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//     <div>
//       <div className='Player-next '>
//       {/* <label for="story" className='dailywork-label'>Tell us your story:</label> */}
// <div>
// <textarea onChange={(e)=>{settextarea(e.target.value)}} value={textarea} className='dailywork-textarea'  rows="5" cols="33"/>
//     {/* <button>df</button> */}
//     <LightButtonPlayer func={postComment}  title={"Submit"}   DisableButton={false}/>
// </div>

//     {/* {!comment && !DisableButton && <LightButtonPlayer func={next} title={buttonText}   DisableButton={DisableButton}/>} */}
//      <Btn func={next} title={buttonText}   DisableButton={DisableButton}/>
//       </div>
//     </div>
//     </div>
   
//     </div>

//     </>
//   ) 
  // old video player 
  return (
    <>
   
    <div className='TestBody'>

    <main class="TestBody-container">
        <section class="TestBody-main-video">
            {/* <video src="videos/manipulate text background.mp4" controls autoplay muted></video> */}
    <iframe  id='zain' src="https://www.youtube.com/embed/OuaFVfN6eeQ?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <h3 class="title">{videoTitle}</h3>
            <div className='test-bootom-sec'>
              <div className='test-comment-head'>
            <textarea placeholder='Post a comment' onChange={(e)=>{settextarea(e.target.value)}}  className='test-textarea'></textarea>
            <div className='test-btn-p'>
            <button className='test-btn-css' onClick={postComment} >Post</button>

            </div>
              </div>
              {channel=="no" && !SubscriberBtn &&  <div className='test-btn'>
            <FaYoutube className='test-icon'/>
           <button className='test-btn-css' onClick={subscribe} >Subscribe</button>

            </div>}
              {SubscriberBtn &&  <div className='test-btn-subscribed'>
            <FaYoutube className='test-icon'/>
           <button className='test-btn-css' onClick={subscribed} >Subscribed</button>

            </div>}

            </div>
        </section>

        <section class="TestBody-video-playlist">
            <h3 class="title">{videoTitle}</h3>
            <p>10 lessions &nbsp; . &nbsp; 50m 48s</p>
            <div class="TestBody-videos">
                {/* <div className='playlist-video-test'></div>
                <div className='playlist-video-test'></div>
                <div className='playlist-video-test'></div>
                <div className='playlist-video-test'></div> */}
                <Comment/>
            </div>
        </section>
    </main>
    </div>
    
    </>
  )
}

export default VideoPlayer