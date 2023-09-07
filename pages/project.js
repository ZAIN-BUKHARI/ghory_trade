import React from 'react'
import Project from '../newComp/Project'
import { ThemeContext } from '../Context/ThemeContext'
import { useContext } from 'react'
import { useEffect } from 'react'

const project = () => {
  const {mobile,sethideSidebar} = useContext(ThemeContext)
  useEffect(()=>{
    if(mobile)
      sethideSidebar(false) 
  },[])
  return (
    <>
    <Project/>
    </>
  )
}

export default project