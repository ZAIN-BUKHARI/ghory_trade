import React from 'react'

const Balls = () => {
  return (
    <>
    
    <ul class="wrapper">
    <li class="icon facebook">
        <span class="tooltip">Facebook</span>
        <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
        <span><i class="fab fa-facebook-f"></i></span>
    </li>
    <li class="icon twitter">
        <span class="tooltip">Twitter</span>
        <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" /></a>
        <span><i class="fab fa-twitter"></i></span>
    </li>
    <li class="icon instagram">
        <span class="tooltip">Instagram</span>
        <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
        <span><i class="fab fa-instagram"></i></span>
    </li>
</ul>

    </>
  )
}

export default Balls