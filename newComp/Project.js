import React from "react";
import ProjectsData from ".././MappingData/ProjectsData";
const Project = () => {
  return (
    <>
      <section id="projects">
        <div className="projects container">
          <div className="projects-header">
            <h1 className="section-title MEDIA-LEFT-PROJECT">
              Our Yearly <span>Projects</span>
            </h1>
          </div>
          <div className="all-projects MEDIA-LEFT-PROJECT">
            {ProjectsData &&
              ProjectsData.map((item) => (
                <div key={item.id} className="project-item">
                  <div className="project-info">
                    <h1>Project {item.id}</h1>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                  </div>
                  <div className="project-img">
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
