import { useRouter } from 'next/router'
import React from 'react'

const Intro = () => {
  const router = useRouter()
  const submit = () =>{
    setTimeout(()=>{
      router.push('/')
    },2000)
  }
  return (
      // <video className='videocss h-fullz  ' src='final.mp4 ' autoPlay muted loop />
     <>
     <div className='back-intro'>

     <div className='
     INTRO'>

    <form >
      <input type="checkbox" id="checkbox" onChange={submit}/>
    <label for="checkbox" class="switch">
        <div class="powersign"></div>
    </label>
    </form>
      
     </div>
       </div>
     </>
     
  )
}

export default Intro
