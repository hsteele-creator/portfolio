import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ image, name, description, skills, link }) => {
  return (
    <>
      <div className="project-card">
        <div className="project-image-container">
          <img className="project-img" src={image} />
        </div>
        <div className="project-text-container" >
          <h2>{name}</h2>
          {/* <p>{description}</p> */}
          <a href={link} target="_blank">
            <button className="project-link-btn">Check it out</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
