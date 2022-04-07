function Categories({ filterProjects, categories }) {
  return (
    <div className="mb-10">
      {categories.map((category, index) => {
        return (
          <button
            className="focus:bg-[#EF310F] focus:text-white rounded-lg px-4 py-1 mx-2 capitalize"
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
