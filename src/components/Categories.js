function Categories({ filterProjects, categories, active }) {
  return (
    <div className="mb-10">
      {categories.map((category, index) => {
        return (
          <button
            className={`${
              active === category && "bg-[#EF310F] text-white"
            } rounded-lg px-4 py-1 mx-2 capitalize`}
            key={index}
            onClick={() => filterProjects(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
