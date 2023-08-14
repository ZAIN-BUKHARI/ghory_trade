import { useRouter } from 'next/router'
import React from 'react'
import Balls from '../universe.io/Balls'
const Footer = () => {
const router = useRouter()
  return (
    <>
    {router.asPath!='/register' && router.asPath!='/test'  && router.asPath!='/login' && router.asPath!='/intro' && router.asPath!='/investment'  && (
    <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>g</span>hory <span>T</span>aders</h1>
      </div>
      <h2 className='media-footer-font'>Your Complete Investment Solution</h2>
      <div class="social-icon">
        <Balls/>
        {/* <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
        </div>
        <div class="social-item">
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