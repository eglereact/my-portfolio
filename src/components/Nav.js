import { GiFlowerTwirl, GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

function Nav({ toggle }) {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="bg-white h-20 -mt-20 flex justify-center items-center text-base sticky top-0 z-10">
      <div className="flex justify-between h-20 z-10 w-full px-6 max-w-5xl">
        <Link
          to="/"
          className="justify-self-start flex items-center font-bold text-[#0B2154]"
          onClick={toggleHome}
        >
          <span className="text-3xl text-[#EF310F] mr-1 ">
            <GiFlowerTwirl />
          </span>
          EgleReact
        </Link>
        <div
          className="md:hidden block absolute  text-[#0B2154] cursor-pointer
         right-0 text-3xl top-0 -translate-x-full translate-y-[80%]"
          onClick={toggle}
        >
          <GiHamburgerMenu />
        </div>
        <ul className="hidden md:flex items-center list-none text-center -mr-[22px]">
          {links.map((link) => (
            <li className="h-20" key={link.id}>
              <LinkScroll
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="border-b-4 border-[#EF310F]"
                className={`text-[#0B2154] flex text-center px-4 h-full cursor-pointer items-center `}
                to={link.link}
              >
                {link.name}
              </LinkScroll>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

const links = [
  { id: 1, name: "Home", link: "home" },
  { id: 2, name: "About", link: "about" },
  { id: 3, name: "Projects", link: "projects" },
  { id: 4, name: "Skills", link: "skills" },
  { id: 5, name: "Contact", link: "contact" },
];
