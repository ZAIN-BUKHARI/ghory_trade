import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import Link from 'next/link'

const download = () => {
  const {mobile,sethideSidebar,router} = useContext(ThemeContext)
  useEffect(()=>{
    router.push('/download')
    if(mobile)
      sethideSidebar(false) 
  },[])
  return (
    <>
    <div className='download-body'>
        <div className='download-white-box'>
          <div className='download-left-side'>
            <h1 className='ios-head'>IOS </h1>
            <h1 className='android-head'>ANDROID</h1>
            <img src='remove_bg.png' className='ghory-logo-android'/>
            <img src='remove_bg.png' className='ghory-logo-ios'/>
            <img src='both-phone-remove.png' />
            <button class="Btn android-btn">
              <Link href='https://play.google.com/store/apps/details?id=com.invest.ghory.trading'>Download</Link>
  
</button>
            <button class="Btn android-ios" onClick={()=>{alert('Not available for ios')}}>
  Download
</button>
          </div>
          
        </div>
    </div>
    </>

  )
}

export default download