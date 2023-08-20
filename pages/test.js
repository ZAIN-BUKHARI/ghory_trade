import React from 'react'
import {FaYoutube} from 'react-icons/fa'
const test = () => {
  return (
    <>
   
    <div className='TestBody'>

    <main class="TestBody-container">
        <section class="TestBody-main-video">
            {/* <video src="videos/manipulate text background.mp4" controls autoplay muted></video> */}
    <iframe  id='zain' src="https://www.youtube.com/embed/OuaFVfN6eeQ?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <h3 class="title">Title of the playing Video.</h3>
            <div className='test-bootom-sec'>
              <div className='test-comment-head'>
            <textarea placeholder='Post a comment'  className='test-textarea'></textarea>
            <div className='test-btn-p'>
            <button className='test-btn-css' >Post</button>

            </div>
              </div>
            <div className='test-btn'>
            <FaYoutube className='test-icon'/>
            <button className='test-btn-css' >Subscribe</button>

            </div>

            </div>
        </section>

        <section class="TestBody-video-playlist">
            <h3 class="title">Title of Video Playlist</h3>
            <p>10 lessions &nbsp; . &nbsp; 50m 48s</p>
            <div class="TestBody-videos">
                <div className='playlist-video-test'></div>
                <div className='playlist-video-test'></div>
                <div className='playlist-video-test'></div>
                <div className='playlist-video-test'></div>
            </div>
        </section>
    </main>
    </div>
    
    </>
  )
}

export default test