function Categories({ filterProjects, categories, active }) {
  return (
    <div className="mb-10">
      {categories.map((category, index) => {
        return (
          <button
            className={`text-gray-600 ${
              active === category && "bg-[#FF8377] text-white"
            } rounded-lg px-4 py-1 mx-1 sm:mx-2 capitalize`}
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
