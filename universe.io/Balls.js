import React from 'react'

const Balls = () => {
  return (
    <>
    
    <ul className="wrapper">
    <li className="icon facebook">
        <span className="tooltip">Facebook</span>
        <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
        <span><i className="fab fa-facebook-f"></i></span>
    </li>
    <li className="icon twitter">
        <span className="tooltip">Twitter</span>
        <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" /></a>
        <span><i className="fab fa-twitter"></i></span>
    </li>
    <li className="icon instagram">
        <span className="tooltip">Instagram</span>
        <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
        <span><i className="fab fa-instagram"></i></span>
    </li>
</ul>

    </>
  )
}

export default Balls