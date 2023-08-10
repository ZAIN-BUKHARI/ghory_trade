import Sidebar from '../newComp/Sidebar'
import Header  from '../newComp/Header'
import Section  from '../newComp/Section'
import Service from '../newComp/Service'
import Project from '../newComp/Project'
import About from '../newComp/About'
import Footer from '../newComp/Footer'
import NewContact from '../newComp/NewContact'
export default function Home() {
  return (
    <>
      
    <div className=''>
      {/* <Header title={'Ghory - Home'} /> */}
      <Sidebar/>
      {/* <Header/> */}
      <Section/> 
      <Service/>
      <Project/>
      <About/>
      <NewContact/> 
     </div>
</>
  )
}
