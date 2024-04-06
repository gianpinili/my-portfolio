import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "/logo.png";
import FloatingNav from "./FloatingNav";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setIsClicked(!isClicked);
  };

  const closeMenu = () => {
    setShowMenu(false);
    setIsClicked(false);
  };

  return (
    <>
      <nav className="flex justify-between mb-4 mt-6 mx-12 xl:mx-24 ">
        <div className="flex items-center">
          {/* <p className="text-5xl font-bold">Ian Pinili</p> */}
          <img src={Logo} alt="Logo" className="w-52 h-52" />
        </div>
        <div className="flex my-3 items-center">
          <Link to="/">
            <p
              className={`hidden md:block mr-6 xl:mr-10 transition ease-in-out delay-75 hover:text-primary hover:border-b ${
                location.pathname === "/"
                  ? "text-lg border-b border-active"
                  : "text-base"
              }`}
              onClick={closeMenu}
            >
              Home
            </p>
          </Link>
          <Link to="/about">
            <p
              className={`hidden md:block mr-6 xl:mr-10 transition ease-in-out delay-75 hover:text-primary hover:border-b ${
                location.pathname === "/about"
                  ? "text-lg border-b border-active"
                  : "text-base"
              }`}
              onClick={closeMenu}
            >
              About
            </p>
          </Link>
          <Link to="/projects">
            <p
              className={`hidden md:block mr-6 xl:mr-10 transition ease-in-out delay-75 hover:text-primary hover:border-b ${
                location.pathname === "/projects"
                  ? "text-lg border-b border-active"
                  : "text-base"
              }`}
              onClick={closeMenu}
            >
              Projects
            </p>
          </Link>
          <Link to="/contacts">
            <p
              className={`hidden md:block mr-6 xl:mr-10 transition ease-in-out delay-75 hover:text-primary hover:border-b ${
                location.pathname === "/contacts"
                  ? "text-lg border-b border-active"
                  : "text-base"
              }`}
              onClick={closeMenu}
            >
              Contact
            </p>
          </Link>
          <div
            className={`md:hidden group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-[#E1E1E1] p-2 ${
              isClicked ? "hover:bg-slate-200" : ""
            }`}
            onClick={toggleMenu}
          >
            <div className="space-y-2">
              <span
                className={`block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out ${
                  isClicked
                    ? "group-hover:translate-y-1.5 group-hover:rotate-45"
                    : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out ${
                  isClicked
                    ? "group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"
                    : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
      </nav>
      {/* Menu for mobile view */}
      {showMenu && (
        <div className="md:hidden">
          <Link to="/">
            <p
              className={`block mb-2 text-3xl border-b mx-12 py-3 ${
                location.pathname === "/" ? "text-4xl text-primary" : "text-3xl"
              }`}
              onClick={closeMenu}
            >
              Home
            </p>
          </Link>
          <Link to="/about">
            <p
              className={`block mb-2 text-3xl border-b mx-12 py-3 ${
                location.pathname === "/about"
                  ? "text-4xl text-primary"
                  : "text-3xl"
              }`}
              onClick={closeMenu}
            >
              About
            </p>
          </Link>
          <Link to="/projects">
            <p
              className={`block mb-2 text-3xl border-b mx-12 py-3 ${
                location.pathname === "/projects"
                  ? "text-4xl text-primary"
                  : "text-3xl"
              }`}
              onClick={closeMenu}
            >
              Projects
            </p>
          </Link>
          <Link to="/contacts">
            <p
              className={`block mb-2 text-3xl border-b mx-12 py-3 ${
                location.pathname === "/contacts"
                  ? "text-4xl text-primary"
                  : "text-3xl"
              }`}
              onClick={closeMenu}
            >
              Contact
            </p>
          </Link>
        </div>
      )}
      {/* Floating Nav */}
      <FloatingNav />
    </>
  );
}

export default Nav;
