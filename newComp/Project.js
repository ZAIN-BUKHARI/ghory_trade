import React from "react";
import ProjectsData from ".././MappingData/ProjectsData";
const Project = () => {
  return (
    <>
      <section id="projects">
        <div class="projects container">
          <div class="projects-header">
            <h1 class="section-title MEDIA-LEFT-PROJECT">
              Our Yearly <span>Projects</span>
            </h1>
          </div>
          <div class="all-projects MEDIA-LEFT-PROJECT">
            {ProjectsData &&
              ProjectsData.map((item) => (
                <div  class="project-item">
                  <div class="project-info">
                    <h1>Project 1</h1>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                  </div>
                  <div class="project-img">
                    <img src={item.img} alt="img" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
