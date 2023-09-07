import React,{useContext,useEffect} from 'react'
import Section  from '../newComp/Section'
import Project from '../newComp/Project'
import About from '../newComp/About'
import NewContact from '../newComp/NewContact'
import { ThemeContext } from '../Context/ThemeContext'

export default function Home() {
  const {mobile,sethideSidebar} = useContext(ThemeContext)
  useEffect(()=>{
    if(mobile)
      sethideSidebar(false) 
  },[])
  return (
<>
      <Section/> 
      <Project/>
      <About/>
      <NewContact/> 
</>
  )
}
