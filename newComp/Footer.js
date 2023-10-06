import React from 'react'
import Balls from '../universe.io/Balls'
import { ThemeContext } from '../Context/ThemeContext'
import { useContext } from 'react'
const Footer = () => {
  const {router} = useContext(ThemeContext)
  var Hide = router.asPath
  return (
    <>
    {!Hide.includes('/dailywork')  && Hide!='/history' && Hide!='/currency' && Hide!='/currency#' &&Hide!="/chart" && Hide!='/register' && Hide!='/download' && !router.asPath.includes('/invite') && Hide!='/work' && Hide!="/dailywork" && Hide!='/test' && !router.asPath.includes("admin")  && Hide!='/login' && Hide!='/intro' && Hide!='/investment'  && (
    <section id="footer">
    <div className="footer container">
      <div className="brand">
        <h1><span className='footer-G'>G</span>hory <span className='footer-T'>T</span>aders</h1>
      </div>
      <h2 className='media-footer-font'>Your Complete Investment Solution</h2>
      <div className="social-icon">
        <Balls/>
      </div>
      <p className='MEDIA-FOOTER-COPYRIGHT'>Copyright © 2023 ghory.trade. All rights reserved</p>
    </div>
  </section>)}
    </>
  )
}


export default Footer