import React from 'react'

const NewContact = () => {
  return (
    <>
    <section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title">Contact <span>info</span></h1>
      </div>
      <div className="contact-items MEDIA-LEFT-CONTACT">
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
          <div className="contact-info">
            <h1>Telegran</h1>
            <h2>+92 0322 4959827</h2>
            {/* <h2>+92 300 4360057</h2> */}
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2>usman@ghory.trade</h2>
            <h2>ghoryg7@gmail.com</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
          <div className="contact-info">
            <h1>Address</h1>
            <h2>Lahore, Pakistan</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default NewContact