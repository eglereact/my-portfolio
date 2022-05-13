import { useState } from "react";
import projectsInfo from "./../data.js";
import Categories from "./Categories.js";
import ProjectList from "./ProjectList.js";

const allCategories = [
  "all",
  ...new Set(projectsInfo.map((project) => project.category)),
];

// TODO: animations, active button stays styled
function Projects() {
  const [projects, setProjects] = useState(projectsInfo);
  const [categories, setCategories] = useState(allCategories);
  const [active, setActive] = useState(categories[0]);

  const filterProjects = (category) => {
    if (category === "all") {
      setProjects(projectsInfo);
      setActive(category);
      return;
    }
    const newProjects = projectsInfo.filter(
      (project) => project.category === category
    );
    setProjects(newProjects);
    setActive(category);
  };

  return (
    <div id="projects" className="py-16 bg-[#F4F7F9]">
      <header className="flex flex-col items-center justify-content">
        <p className="input-label">My Portfolio</p>
        <h1 className="text-[#FF8377] py-3 font-bold text-2xl">Recent Works</h1>
      </header>
      <section className="flex items-center justify-center">
        <Categories
          categories={categories}
          active={active}
          filterProjects={filterProjects}
        />
      </section>
      <section>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}

export default Projects;
