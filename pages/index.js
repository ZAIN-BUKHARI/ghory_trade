import React,{ useContext } from 'react'
import Section  from '../newComp/Section'
import Project from '../newComp/Project'
import About from '../newComp/About'
import NewContact from '../newComp/NewContact'
import Youtube from '../UI-Compoents/Youtube'
export default function Home() {
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
