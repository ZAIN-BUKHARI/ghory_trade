import React from 'react'
import { useRouter } from 'next/router'
const Footer = ({Hide}) => {
  const router = useRouter()
  console.log(router.asPath)
  if(!router.asPath=='/intro'){

  return (
    <>
    <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>g</span>hory <span>T</span>aders</h1>
      </div>
      <h2>Your Complete Investment Solution</h2>
      <div class="social-icon">
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
        </div>
        {/* <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/twitter.png" /></a>
        </div> */}
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" /></a>
        </div>
      </div>
      <p>Copyright © 2023 ghory.trade. All rights reserved</p>
    </div>
  </section>
    </>
  )
}
else{
  return(
    <>
    </>
  )
}
}

export default Footer