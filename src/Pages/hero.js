import React from "react";
import "../css/hero.css";
import { Typewriter } from "react-simple-typewriter";
import Github from "../img/github.png";
import Linkdin from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import Vector from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import Boy from "../img/boy.png";
import FlotingCom from "./Components/FlotingCom";
import Thumb from "../img/thumbup.png";
import Crown from "../img/crown.png";
import Emoji from "../img/glassesimoji.png";


function Hero() {
  return (
    <div className="hero">
      <div className="hero-left"> 
        <div className="hero-name">
          <span>Hey! I Am </span>
          <span>
            {/* <Typewriter 
              className="type"
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["Ankush Das", "Flutter Devloper", "React Devloper"]}
            /> */}
            Ankush Das
          </span>
          <span>
            I Love To Build New Thing And Learn New Technology.<br></br>
            You Can Hire Me For Quality Web And App Devlopment .
          </span>
        </div>
        <button className="button hero-btn">Hier Me</button>
        <div className="hero-icon">
          <a href="https://github.com/anounman" target="_blank">
            <img src={Github} alt="" />
          </a>
          <img src={Linkdin} alt="" />
          <a href="https://www.instagram.com/anounman/" target="_blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={Vector} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <img src={Emoji} alt=""/>
        <div style={{left: '80%' , top: '25%'}}>
          <FlotingCom image={Crown} txt1="Web" txt2="Devloper"/>
        </div>
        
        <div style={{bottom: '11%'
        , left : "52%"}}>
          <FlotingCom image={Thumb} txt1="App" txt2="Devloper"/>
        </div>
       <div className="effect" style={{background : "rgb(238 210 255)"}}> </div> 
       <div className="effect" 
       style={{
         background : " #DDF8FE",
         top : '17rem'
        }}> </div>  
      </div>
    </div>
  );
}

export default Hero;
