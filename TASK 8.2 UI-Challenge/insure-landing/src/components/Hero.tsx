import React from "react";
import Image from "../assets/insure-landing-page-master/images/image-intro-desktop.jpg"
import MapLine from '../assets/insure-landing-page-master/images/bg-pattern-intro-right-desktop.svg'
function Hero() {
  return (
    <section className="hero">
      <div className="container hero__content">
        <div className="heading">
          <h1 className="horizontal horizontal--hero">
            Humanizing your insurance.
          </h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your loved ones are protected.
          </p>
          <a href="#" className="cta cta--hero">View plans</a>
        </div>
        <div className="heroImage">
          <img
            src={Image}
            // sizes="(min-width:768px) 768px, 375px"
            alt="Insure family"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
