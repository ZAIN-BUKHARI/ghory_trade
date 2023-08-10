import Section  from '../newComp/Section'
import Service from '../newComp/Service'
import Project from '../newComp/Project'
import About from '../newComp/About'
import NewContact from '../newComp/NewContact'
export default function Home() {
  return (
    <>
      
    <div className=''>
      {/* <Sidebar/> */}
      <Section/> 
      <Service/>
      <Project/>
      <About/>
      <NewContact/> 
     </div>
</>
  )
}
