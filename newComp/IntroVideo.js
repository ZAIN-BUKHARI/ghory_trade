import React from 'react'
import IntroButton from './IntroButton'

const IntroVideo = () => {
  return (
    <div>
        <video className='videocss   ' src='INTRO.mp4' autoPlay muted loop />
        <IntroButton/>
       
    </div>
  )
}

export default IntroVideo