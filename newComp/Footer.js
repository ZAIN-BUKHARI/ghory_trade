import React from 'react'
import Balls from '../universe.io/Balls'
import { ThemeContext } from '../Context/ThemeContext'
import { useContext } from 'react'
const Footer = () => {
  const {router} = useContext(ThemeContext)
  var Hide = router.asPath
  return (
    <>
    {Hide!='/register' && Hide!='/work' && Hide!="/dailywork" && Hide!='/test' && !router.asPath.includes("admin")  && Hide!='/login' && Hide!='/intro' && Hide!='/investment'  && (
    <section id="footer">
    <div className="footer container">
      <div className="brand">
        <h1><span>g</span>hory <span>T</span>aders</h1>
      </div>
      <h2 className='media-footer-font'>Your Complete Investment Solution</h2>
      <div className="social-icon">
        <Balls/>
        {/* <div className="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
        </div>
        <div className="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
        </div>
        <div className="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" /></a>
        </div> */}
      </div>
      <p className='MEDIA-FOOTER-COPYRIGHT'>Copyright © 2023 ghory.trade. All rights reserved</p>
    </div>
  </section>)}
    </>
  )
}


export default Footer