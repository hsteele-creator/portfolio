import React from "react";
import "./Main.css";
import navy from "./Images/navy.jpg"

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
        <h1 id="main-heading">Hi, My Name is Harry Steele</h1>
        <p id="main-text">Frontend developer, specializing in React and Redux.</p>
      </div>
    </>
  );
};

export default Main;
