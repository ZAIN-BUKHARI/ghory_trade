import React from 'react'
import ServiceData from '../MappingData/ServiceData'
const Service = () => {
  return (
    <>
    <section id="services">
    <div class="services container">
      <div class="service-top">
        <h1 class="section-title">Serv<span>i</span>ces</h1>
        <p className='Service-Media-P'>We are a dynamic trading company specializing in the exchange of commodities that drive global markets - oil, gold, and Bitcoin. With a deep understanding of the intricacies of these diverse assets, we navigate the ever-evolving landscape of international trade, utilizing advanced strategies and technologies to seize opportunities and manage risks effectively. Our commitment to integrity, innovation, and maximizing value for our partners defines our approach, making us a trusted player in the complex world of commodity trading.</p>
      </div>
        <div  class="service-bottom">
      {ServiceData && ServiceData.map((item)=>(
        <div key={item.id} class="service-item">
          <div class="icon"><img src={item.img} /></div>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>
       
       ))}
      </div>
    </div>
  </section>
    </>
  )
}

export default Service