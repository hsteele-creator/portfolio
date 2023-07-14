import React from "react";
import "./ProjectCard.css";
import githubpic from "./Images/github.png";

const ProjectCard = ({ image, name, description, skills, link, github }) => {
  return (
    <>
      <div className="project-card">
        <div className="project-image-container">
          <img className="project-img" src={image} />
        </div>
        <div className="project-text-container">
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="skills-container">
            {skills.map((skill) => (
              <img className="skill-img" src={skill} />
            ))}
          </div>
          <div className="btn-links-container">
            <a href={link} target="_blank">
              <button className="project-link-btn">Check it out</button>
            </a>{" "}
            <a href={github} target="_blank">
              <img className="github-img" src={githubpic} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
