import React,{ useContext } from 'react'
import Section  from '../newComp/Section'
// import Service from '../newComp/Service'
import Project from '../newComp/Project'
import About from '../newComp/About'
import NewContact from '../newComp/NewContact'

export default function Home() {
  return (
    <>
      
    <div className=''>
      <Section/> 
      {/* <Service/> */}
      <Project/>
      <About/>
      <NewContact/> 
     </div>
</>
  )
}
