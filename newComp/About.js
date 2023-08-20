import React from "react";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about container">
          <div className="col-left">
            <div className="about-img MEDIA-LEFT-ABOUT">
              <img src="go2.png" alt="img" />
            </div>
          </div>
          <div className="col-right">
            <h1 className="section-title">
              About <span>us</span>
            </h1>
            <h2>ghory trade</h2>
            <p className="Service-Media-P">
              We are a dynamic trading company specializing in the exchange of
              commodities that drive global markets - oil, gold, and Bitcoin.
              With a deep understanding of the intricacies of these diverse
              assets, we navigate the ever-evolving landscape of international
              trade, utilizing advanced strategies and technologies to seize
              opportunities and manage risks effectively. Our commitment to
              integrity, innovation, and maximizing value for our partners
              defines our approach, making us a trusted player in the complex
              world of commodity trading.
            </p>
            <a href="#" className="cta">
              Join us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
