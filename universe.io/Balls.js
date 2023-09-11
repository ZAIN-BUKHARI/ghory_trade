import React from 'react'

const Balls = () => {
  return (
    <>
    
    <ul className="wrapper">
    <li className="icon facebook">
        <span className="tooltip">Facebook</span>
        <a href="https://www.facebook.com/profile.php?id=61551249801661"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
        <span><i className="fab fa-facebook-f"></i></span>
    </li>
    
    <li className="icon instagram">
        <span className="tooltip">Instagram</span>
        <a href="https://www.instagram.com/usman777681/"><img  src="https://img.icons8.com/fluency/48/instagram-new.png" /></a>
        <span><i className="fab fa-instagram"></i></span>
    </li>
    <li className="icon youtube">
        <span className="tooltip">Youtube</span>
        <a href="https://www.youtube.com/@YMPGHORY4289"><img className='youtube-logo-footer' src="https://img.icons8.com/color/48/youtube-play.png" /></a>
        <span><i className="fab fa-youtube"></i></span>
    </li>
    <li className="icon tiktok">
        <span className="tooltip">Tiktok</span>
        <a href="https://www.tiktok.com/@ghory962"><img className='tiktok-logo-footer' src="https://img.icons8.com/ios-filled/50/tiktok--v1.png" /></a>
        <span><i className="fab fa-youtube"></i></span>
    </li>
</ul>

    </>
  )
}

export default Balls