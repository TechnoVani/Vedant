import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  ListItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="flex items-center font-semibold hover:text-pink-700 gap-x-2 p-1 "
      >
        <Link to="/" className="flex items-center" onClick={() => setOpenNav(false)}>
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-semibold hover:text-pink-700"
      >
        <Link to="/Videos" className="flex items-center" onClick={() => setOpenNav(false)}>
          Videos
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-semibold hover:text-pink-700"
      >
        <Link to="/about-us" className="flex items-center" onClick={() => setOpenNav(false)}>
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-semibold hover:text-pink-700"
      >
        <Link to="/contact" className="flex items-center" onClick={() => setOpenNav(false)}>
          Contact Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-semibold hover:text-pink-700"
      >
        {/* <Link to="/signin" className="flex hidden items-center px-3 py-0.5 border-2 rounded-full border-black hover:border-red-900" onClick={() => setOpenNav(false)}>
          Log In
        </Link> */}
      </Typography>
    </ul>
  );

  return (
    <Navbar className=" max-w-full px-4 py-2 lg:px-8 lg:py-2 rounded-none border-none shadow-none bg-[#FEFCF0]">
      <div className="container mx-auto flex items-center justify-between bg-white text-blue-gray-900 w-[99%] border rounded-full px-3 py-1 shadow-xl">
        <Typography
          as="a"
          href="#"
          className="mr-4 md:text-2xl lg:text-xl inline-flex items-center text-[#560A2C] gap-2  cursor-pointer lg:w-[17vw] py-1.5 font-medium"
        >
          <Link to='/' className="shrink-0">
            <img
              src="images/god gallery/vedanttttt.avif"
              className="h-10 rounded-full"
              alt="Flowbite Logo"
            />
          </Link>

          VEDANT{" "}
          <span className="text-[#560A2C]">
            <Typewriter
              words={["DEVOTIONS", "DEVOTIONS"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        {/* 
        <div className="flex items-center gap-x-1">
          <div className="relative w-64 hidden lg:inline-block">
            <input
              type="text"
              className="border border-gray-500 text-sm rounded-full px-4 py-2 focus:outline-none text-black focus:border-zinc-500 w-full"
              placeholder="Search..."
            />
            <button className="absolute right-0 top-0 mt-2 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>
         */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto px-10 bg-white shadow-sm pb-5">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
