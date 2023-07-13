import React from "react";
import "./Projects.css";
import ProjectData from "./ProjectData";
import ProjectCard from "./ProjectCard";
console.log(ProjectData);

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
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
