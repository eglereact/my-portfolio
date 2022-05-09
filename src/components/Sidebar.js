import { IoMdClose } from "react-icons/io";
import { Link as LinkScroll } from "react-scroll";

function Sidebar({ isOpen, toggle }) {
  return (
    <div
      className={`fixed z-50 w-full h-full bg-gray-800 grid items-center top-0 left-0
     transition duration-300 ease-in-out ${
       isOpen ? "opacity-100 left-0" : "opacity-0 -left-full"
     }`}
    >
      <div
        className="absolute right-0  top-0 -translate-x-full translate-y-[80%] bg-transparent text-3xl outline-none cursor-pointer"
        onClick={toggle}
      >
        <IoMdClose className="text-white" />
      </div>
      <div className="text-white">
        <ul className="grid grid-cols-1 grid-rows-6 text-center">
          <LinkScroll className="sidebarLink" to="home" onClick={toggle}>
            Home
          </LinkScroll>
          <LinkScroll className="sidebarLink" to="about" onClick={toggle}>
            About
          </LinkScroll>
          <LinkScroll className="sidebarLink" to="projects" onClick={toggle}>
            Projects
          </LinkScroll>
          <LinkScroll className="sidebarLink" to="skills" onClick={toggle}>
            Skills
          </LinkScroll>
          <LinkScroll className="sidebarLink" to="contact" onClick={toggle}>
            Contact
          </LinkScroll>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
