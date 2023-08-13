import { useRouter } from 'next/router'
import React from 'react'
import LightButton from '../universe.io/LightButton'
const IntroButton = () => {
  const router = useRouter()
  const submit = () =>{
    setTimeout(()=>{
      router.push('/')
    },2000)
  }
  return (
     <>
     <div className='back-intro'>

     <div className='
     INTRO'>
     <LightButton/>
      
     </div>
       </div>
     </>
     
  )
}

export default IntroButton
