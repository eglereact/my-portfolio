import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

function Skills() {
  const skillsFront = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React" },
    { id: 5, name: "TailwindCSS" },
    { id: 6, name: "Bootstrap" },
    { id: 7, name: "Git" },
  ];

  const skillsBack = [
    { id: 1, name: "Java" },
    { id: 2, name: "MySql" },
    { id: 3, name: "SpringBoot" },
    { id: 4, name: "Firebase" },
    { id: 5, name: "Photoshop" },
    { id: 6, name: "After Effects" },
    { id: 7, name: "Illustrator" },
  ];

  return (
    <section
      id="skills"
      className="flex items-center py-16 justify-center mx-auto flex-col w-5/6 md:w-3/4  max-w-5xl"
    >
      <div className="p-4 text-center">
        <p className="input-label">My Abilities</p>
        <h1 className="text-[#FF8377] py-3 font-bold text-2xl">My Skills</h1>
      </div>
      <div className="w-full md:flex items-center justify-center">
        <div className=" md:w-1/2 m-4 rounded-lg h-80 bg-[#F4F7F9]">
          <h2 className="text-gray-800 font-bold text-center text-2xl py-3 ">
            Frontend knowledge
          </h2>
          <div className=" flex flex-wrap p-4">
            {skillsFront.map((skill) => (
              <p
                key={skill.id}
                className="flex items-center w-1/2 p-4 font-bold text-gray-600"
              >
                <span className="mr-2 text-[#FF8377]">
                  <AiFillCheckCircle />
                </span>
                {skill.name}
              </p>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 m-4 rounded-lg bg-[#F4F7F9] h-80">
          <h2 className="text-gray-800 font-bold text-center text-2xl py-3">
            Other knowledge
          </h2>
          <div className=" flex flex-wrap p-4">
            {skillsBack.map((skill) => (
              <p
                key={skill.id}
                className="flex items-center w-1/2 p-4 font-bold text-gray-600"
              >
                <span className="mr-2 text-[#FF8377]">
                  <AiFillCheckCircle />
                </span>
                {skill.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
