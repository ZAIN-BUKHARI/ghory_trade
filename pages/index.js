import React,{ useContext,useEffect } from 'react'
import Section  from '../newComp/Section'
import Project from '../newComp/Project'
import About from '../newComp/About'
import NewContact from '../newComp/NewContact'
import Youtube from '../UI-Compoents/Youtube'
import { ThemeContext } from '../Context/ThemeContext'
export default function Home() {
  const {subscription} = useContext(ThemeContext)
  useEffect(()=>{
    console.log(subscription)
  },[])
  return (
    <>
    <div className=''>
    
      <Section/> 
      <Youtube/>
      <Project/>
      <About/>
      <NewContact/> 
     </div>
</>
  )
}
