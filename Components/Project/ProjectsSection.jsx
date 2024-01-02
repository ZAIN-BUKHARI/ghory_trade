import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Trade Crud Oil",
    description: "Project 1 description",
    image: "https://media.istockphoto.com/id/1216766385/photo/oil-prices-moving-up.jpg?b=1&s=612x612&w=0&k=20&c=89pvreJq0HrfUbjlmsF9mM67Zm2tGeBMG3mbKq6SmKs=",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Trade in Gold",
    description: "Project 2 description",
    image: "https://images.pexels.com/photos/342945/pexels-photo-342945.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "UG FOOD",
    description: "https://media.istockphoto.com/id/1348212541/photo/red-play-icon-button-on-white-background-social-media-and-sign-concept-3d-illustration.jpg?b=1&s=612x612&w=0&k=20&c=DWQqBuuxy9BKExCifmW2Hk8X5Z6DZR4sZKzK57iOWI8=",
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Trade in Diamond",
    description: "Project 4 description",
    image: "https://media.istockphoto.com/id/184303311/photo/three-beautiful-diamonds-on-a-black-background.jpg?b=1&s=612x612&w=0&k=20&c=2Y1bt4JhgHJv0Wn8BkgO3eXu4v3VHu6jMHZbmjto880=",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "UG Vegetables",
    description: "Authentication and CRUD operations",
    image: "https://res.cloudinary.com/dklqbx5k0/image/upload/v1699781105/fkteidqjiucxdzdvuywk.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "UG Real Estate",
    description: "Project 5 description",
    image: "https://media.istockphoto.com/id/1140969740/photo/stock-financial-index-of-successful-investment-on-property-real-estate-business-and.jpg?b=1&s=612x612&w=0&k=20&c=XE6n6v6MU8ejqBEpUHm5DQUTe4sT6_jagVwxWm6KBjM=",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects snap-none  ">
      <h2 className="text-center text-4xl font-bold bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent mt-4 mb-8 md:mb-12">
        UG PROJECTS
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
