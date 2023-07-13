import React from "react";
import { useEffect, useState } from "react";
import upArrow from "./Images/upArrow.png";
import "./BacktoTopButton.css"

const BackToTopButton = () => {
  const [backToTopButton, setBacktoTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktoTopButton(true);
      } else {
        setBacktoTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTopButton && (
        <span className="back-to-top-btn"
          onClick={() => scrollUp()}
        >
            <img id="btn-img" src={upArrow} />
        </span>
      )}
    </>
  );
};

export default BackToTopButton;
