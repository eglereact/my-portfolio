import { useState } from "react";
import projectsInfo from "./../data.js";
import Categories from "./Categories.js";
import ProjectList from "./ProjectList.js";

const allCategories = [
  "all",
  ...new Set(projectsInfo.map((project) => project.category)),
];
console.log(allCategories);

function Projects() {
  const [projects, setProjects] = useState(projectsInfo);
  const [categories, setCategories] = useState(allCategories);

  const filterProjects = (category) => {
    if (category === "all") {
      setProjects(projectsInfo);
      return;
    }
    const newProjects = projectsInfo.filter(
      (project) => project.category === category
    );
    setProjects(newProjects);
  };

  return (
    <div>
      <header className="flex flex-col items-center justify-content mb-10">
        <p className="text-sm text-[#0B2154]">My Portfolio</p>
        <h1 className="text-[#EF310F] font-bold text-2xl">Recent Works</h1>
      </header>
      <section className="flex items-center justify-center">
        <Categories categories={categories} filterProjects={filterProjects} />
      </section>
      <section>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}

export default Projects;
