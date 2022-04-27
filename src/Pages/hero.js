import React from "react";
import "../css/hero.css";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-name">
          <span>Hey! I Am </span>
          <span>
            <Typewriter 
              className="type"
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["Ankush Das", "Flutter Devloper", "React Devloper"]}
            />
          </span>
          <span>
            I devloped what the f@#$ i want.<br></br>
            But you can hire me for Quality web and app devlopment .
          </span>
        </div>
        <button className="button hero-btn">Hier Me</button>
      </div>

      <div className="hero-right"></div>
    </div>
  );
}

export default Hero;
