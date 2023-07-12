import React from "react";
import "./Main.css";
import navy from "./Images/navy.jpg";
import developer from "./Images/developer.jpg"

const Main = () => {
  return (
    <>
      <div
        id="main"
        style={{
          backgroundImage: `url(${navy})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div id="main-text">
          <h1 id="main-heading">Hi! My Name is Harry Steele</h1>
          <p id="main-subtext">
            I am a frontend developer, specializing in React and Redux.
          </p>
          <button id="main-btn">View My Projects</button>
        </div>
        <div id="main-other">
            <img id="main-img" src={developer} />
        </div>
      </div>
    </>
  );
};

export default Main;
