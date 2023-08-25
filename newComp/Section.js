import React, { useEffect,useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const Section = () => {
  const {mobile}=useContext(ThemeContext)
  useEffect(()=>{
    var videotag=document.getElementById('video')
    // videotag.muted=false
    
  },[])
  return (
    <>
    
    
  <style jsx>{`
    #VIDEO-PAGE-CSS {
      
    }
    #VIDEO-PAGE-CSS::after {
      content: '';
     
    }
    #VIDEO-PAGE-CSS .VIDEO-PAGE-CSS {
      
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 50px;
      justify-content: flex-start;
    }
    #VIDEO-PAGE-CSS h1 {
      display: block;
      width: fit-content;
      font-size: 6rem;
      position: relative;
      color: transparent;
      animation: text_reveal 0.5s ease forwards;
      animation-delay: 1s;
    }
    #VIDEO-PAGE-CSS h1:nth-child(1) {
      animation-delay: 1s;
    }
    #VIDEO-PAGE-CSS h1:nth-child(2) {
      animation-delay: 2s;
    }
    #VIDEO-PAGE-CSS h1:nth-child(3) {
      animation: text_reveal_name 0.5s ease forwards;
      animation-delay: 3s;
    }
    #VIDEO-PAGE-CSS h1 span {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      /* background-color: crimson; */
      // background-color: rgb(35, 68, 177);
      // background-color:#00C0F0;
      background-color:#00A1C9;
      animation: text_reveal_box 1s ease;
      animation-delay: 0.5s;
    }
    #VIDEO-PAGE-CSS h1:nth-child(1) span {
      animation-delay: 0.5s;
    }
    #VIDEO-PAGE-CSS h1:nth-child(2) span {
      animation-delay: 1.5s;
    }
    #VIDEO-PAGE-CSS h1:nth-child(3) span {
      animation-delay: 2.5s;
    }
    
        .Head{
            background-Color:black;
            width:100vw;
            position:relative;
        }
        .VIDEO{
          width:100%;
        }
        .Ab{
          position:absolute;
          top:0%;
          left:10%;

        }
        h1{
      color:#00A1C9;

        }
    
    `}</style>
    <div className='Head'
    >
        <video className='VIDEO   ' id='video' src='ghory-intro-sound.mp4' autoPlay muted={true} loop />
        <section id="VIDEO-PAGE-CSS">
        <div className="VIDEO-PAGE-CSS container Ab ">
      {!mobile && <div className='MEDIA-CON-SECTION'>
        <h1>Welcome, <span></span></h1>
        <h1>We are <span></span></h1>
        <h1>ghory.traders <span></span></h1>
        <a href="#projects" type="button" className="cta">Start</a>
      </div>}
    </div>
    </section>
    </div>
    </>
  )
}

export default Section