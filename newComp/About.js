import React from 'react'
const About = () => {
  return (
    <>
    <section id="about-section">
            <div class="about-left">
                <img src="file.jpg" alt="About Img"/>
            </div>

            <div class="about-right ">
                {/* <h4>My Story</h4> */}
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis fugiat a dolorem at similique maxime dolorum dolore
                    enim dicta voluptatibus, illum recusandae, vel optio tempore
                    ipsum incidunt eum. Aspernatur, repellendus.
                </p>
                <div class="address">
                    <ul>
                        <li>
                            <span class="address-logo">
                                <i class="fas fa-paper-plane"></i>
                            </span>
                            <p>Address</p>
                            <span class="saprater">:</span>
                            <p>Jaipur, Rajasthan, India</p>
                        </li>
                        <li>
                            <span class="address-logo">
                                <i class="fas fa-phone-alt"></i>
                            </span>
                            <p>Phone No</p>
                            <span class="saprater">:</span>
                            <p>+91 987-654-4321</p>
                        </li>
                        <li>
                            <span class="address-logo">
                                <i class="far fa-envelope"></i>
                            </span>
                            <p>Email ID</p>
                            <span class="saprater">:</span>
                            <p>crowncoder@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div class="expertise">
                    {/* <h3>My Expertise</h3>
                    <ul>
                        <li>
                            <span class="expertise-logo">
                                <i class="fab fa-html5"></i>
                            </span>
                            <p>HTML</p>
                        </li>
                        <li>
                            <span class="expertise-logo">
                                <i class="fab fa-css3-alt"></i>
                            </span>
                            <p>CSS</p>
                        </li>
                        <li>
                            <span class="expertise-logo">
                                <i class="fab fa-node-js"></i>
                            </span>
                            <p>Java Script</p>
                        </li>
                        <li>
                            <span class="expertise-logo">
                                <i class="fab fa-react"></i>
                            </span>
                            <p>React Js</p>
                        </li>
                    </ul> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default About