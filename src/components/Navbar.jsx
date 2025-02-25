import { useEffect, useState } from "react";
import logo from '../assets/logo.png'

import { Link } from "react-scroll";

// import icons from react icons
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
        setIsMenuOpen(false)
      }
      else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];
  return (
    <header className=" bg-gray-500 bg-opacity-50 fixed top-0 left-0 right-0 boder-">
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 right-0 left-0 border bg-white transition-all duration-300" : ""
        }`}>
        <div className="flex justify-between items-center text-base gap-8">
          {/* <a href="" className="text-2xl font-semibold flex items-center space-x-3"><img src={logo} alt="" className="w-10 inline-block items-center"/><span>GREENWARRIOR</span></a> */}
          <div className="flex gap-2 items-center">
            <div className="bg-[#E8F5E9] w-14 h-14 rounded-tl-3xl rounded-br-3xl flex items-center justify-center">
              <img src={logo} alt="" className="" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-lg font-bold">GreenWarrior</h5>
            </div>
          </div>

          <ul className="md:flex space-x-12 hidden">

            {
              navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={link} href={path} className="block text-base text-gray900 hover:text-brandPrimary first:font-medium">
                {link}
              </Link>)
            }
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <a href="/" className="hidden lg:flex items-center text-brandPrimary hover:text-gray900">Login</a>
            <button className="bg-brandPrimary text-white  py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">Sign up</button>
          </div>

          {/* menu btn, visible on mobile screen */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray900 focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-primary" />
              ) : (
                <FaBars className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}
        >
          {
            navItems.map(({ link, path }) => <Link
              to={path} spy={true} smooth={true} offset={-90}
              key={link}
              onClick={toggleMenu}
              className="block  text-white hover:text-gray-500"
            >
              {link}
            </Link>)
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;