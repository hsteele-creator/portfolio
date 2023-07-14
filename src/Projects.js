import React from "react";
import "./Projects.css";
import ProjectData from "./ProjectData";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <>
      <div id="projects-container">
        {ProjectData.map((project) => {
          return (
            <ProjectCard
              image={project.image}
              name={project.name}
              description={project.description}
              skills={project.skills}
              link={project.link}
              github={project.github}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
