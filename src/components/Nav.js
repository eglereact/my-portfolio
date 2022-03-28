import { useState } from "react";
import { GiFlowerTwirl, GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavHashLink } from "react-router-hash-link";
import { HashLink } from "react-router-hash-link";

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", link: "top" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Skills", link: "skills" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-[#0B2154]">
          <span className="text-3xl text-[#EF310F] mr-1 ">
            <GiFlowerTwirl />
          </span>
          EgleReact
        </div>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0
        w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-20 opacity-100" : "top-[-490px]"
        } md:opacity-100 opacity-0`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl text-[#0B2154] hover:text-[#EE410E] duration-500
              md:my-0 my-7"
            >
              {/* <a href={link.link}>{link.name}</a> */}
              <HashLink smooth to={`/#${link.link}`}>
                {link.name}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
