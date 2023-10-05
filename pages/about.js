import React from 'react'
import About from '../newComp/About'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { useEffect } from 'react'
import Documents from '../newComp/Documents'

const about = () => {
  const {mobile,sethideSidebar} = useContext(ThemeContext)
  useEffect(()=>{
    if(mobile)
      sethideSidebar(false) 
  },[])
  return (
    <>
    <About/>
    {!mobile && 
    <Documents/>}
    </>
  )
}

export default about