import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <footer className="bg-[#F4F7F9]  py-5">
      <div className="w-11/12 flex justify-between items-center mx-auto">
        <div className="flex">
          <a
            href="https://github.com/eglereact"
            className="text-gray-600 text-2xl mr-3 transition-all duration-150 ease-out hover:scale-125 hover:text-[#FF8377]"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://github.com/eglereact"
            className="text-gray-600 text-2xl transition-all duration-150 ease-out hover:scale-125 hover:text-[#FF8377]"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <p className="text-gray-600">
          Copyright ©{" "}
          <LinkScroll
            to="/"
            onClick={toggleHome}
            className="text-[#FF8377] font-bold cursor-pointer"
          >
            EgleReact
          </LinkScroll>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
