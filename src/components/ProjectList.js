import { AiOutlineArrowRight, AiFillGithub } from "react-icons/ai";

function ProjectList({ projects }) {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-4">
      {projects.map((project) => {
        const { img, title, demo, git, id } = project;
        return (
          <div
            key={id}
            className="m-1 bg-white flex flex-col items-center justify-center rounded-lg hover:shadow-md hover:scale-105
            transition duration-300 ease-in-out"
          >
            <img
              src={img}
              alt=""
              className="rounded-lg  object-contain w-5/6 m-5"
            />
            <div className="w-5/6">
              <h1 className="items-start capitalize font-bold text-gray-600 text-lg">
                {title}
              </h1>
              <div className="flex items-center justify-between text-gray-800">
                <a
                  href={demo}
                  className="flex items-center py-2 cursor-pointer group "
                >
                  <span className="mr-1 font-thin text-lg ">Demo</span>
                  <AiOutlineArrowRight className="group-hover:ml-1 transition-all duration-150 ease-out" />
                </a>
                <a href={git}>
                  <AiFillGithub className="text-2xl hover:text-[#FF8377] cursor-pointer transition-all duration-150 ease-out hover:scale-125 " />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
