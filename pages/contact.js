import React, { useContext, useEffect } from 'react'
import NewContact from '../newComp/NewContact'
import Contact from "../newComp/Contact"
import { ThemeContext } from '../Context/ThemeContext'
const contact = () => {
  const {mobile,sethideSidebar} = useContext(ThemeContext)
  useEffect(()=>{
    if(mobile)
      sethideSidebar(false) 
  },[])
  return (
    <>
    <NewContact/>
    <Contact/>
    </>
  )
}

export default contact