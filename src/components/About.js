import AboutImg from "../images/about1.svg";

function About() {
  return (
    <div className="py-20 flex-col  md:flex-row md:flex md:items-center md:justify-between">
      <div>
        <h1>About Me</h1>
      </div>
      <div>
        <img className="lg:w-[600px]" src={AboutImg} alt="about me" />
      </div>
    </div>
  );
}

export default About;
