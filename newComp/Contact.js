import React from 'react'
import { Phone } from 'react-feather'
import Email from '../SVG/Email'
import Home from '../pages'

const Contact = () => {
  return (
    <>
   
   
    
    <div className="containerContact">
      <div className="">        
        <div className="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div className="input-box">
              <input type="text" required name=""/>
              <span>Full Name</span>
            </div>
            
            <div className="input-box">
              <input type="email" required name=""/>
              <span>Email</span>
            </div>
            
            <div className="input-box">
              <textarea required name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div className="input-box">
              <input type="submit" value="Send" name=""/>
            </div>
          </form>
        </div>
        
      </div>
    </div>
 
    </>
  )
}

export default Contact