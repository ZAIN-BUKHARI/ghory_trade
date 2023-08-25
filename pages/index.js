import React,{ useContext,useEffect } from 'react'
import Section  from '../newComp/Section'
import Project from '../newComp/Project'
import About from '../newComp/About'
import NewContact from '../newComp/NewContact'
import { ThemeContext } from '../Context/ThemeContext'
export default function Home() {
  const {subscription} = useContext(ThemeContext)
  useEffect(()=>{
    console.log(subscription)
  },[])
  return (
    <>
    <div className=''>
      {/* <Header/> */}
      <Section/> 
      <Project/>
      <About/>
      <NewContact/> 
     </div>
</>
  )
}
