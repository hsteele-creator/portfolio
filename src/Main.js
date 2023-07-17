import React from "react";
import "./Main.css";
import navy from "./Images/navy.jpg";
import developer from "./Images/developer.jpg";
import linkedin from "./Images/linkedin.png";
import github from "./Images/github.png";
import home from "./Images/home.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div id="links-container">
        <a href="/">
          <img className="nav-img" src={home} />
        </a>

        <div>
          <a href="https://www.linkedin.com/in/harry-b-steele/" target="_blank">
            <img className="nav-img" src={linkedin} />
          </a>
          <a href="https://github.com/hsteele-creator" target="_blank">
            <img className="nav-img" src={github} />
          </a>
        </div>
      </div>

      <div
        id="main"
        style={{
          backgroundImage: `url(${navy})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div id="main-text" data-aos="fade-right">
          <h1 id="main-heading">Hi! My Name is Harry Steele</h1>
          <p id="main-subtext">
            I am a frontend developer, specializing in React and Redux.
          </p>
          <div id="main-btns-container">
            <a href="#projects-container">
              <button className="main-btn">View My Projects</button>
            </a>
            <a href="#contact-container">
              <button className="main-btn">Contact Me</button>
            </a>
          </div>
        </div>
        <div id="main-other" data-aos="fade-left">
          <img id="main-img" src={developer} />
        </div>
      </div>
    </>
  );
};

export default Main;
