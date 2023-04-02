"use client";

import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ background: "#ecf0f3" }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <LinkScroll className="cursor-pointer" href="/" to="/">
          <Image src="/assets/logos/logo.png" alt="/" width={65} height={65} />
        </LinkScroll>

        <div>
          <ul className="hidden md:flex">
            <LinkScroll
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </LinkScroll>
            <LinkScroll
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </LinkScroll>
            <LinkScroll
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </LinkScroll>
            <LinkScroll
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </LinkScroll>
            <LinkScroll
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </LinkScroll>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 duration-500"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src={"/assets/logos/logo.png"}
                width={50}
                height={50}
                alt="Mobile logo"
              ></Image>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something unique together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col justify-between">
            <ul className="uppercase">
              <LinkScroll
                to="/"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleNav}
              >
                <li className="py-4 text-sm">Home</li>
              </LinkScroll>
              <LinkScroll
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleNav}
              >
                <li className="py-4 text-sm">About</li>
              </LinkScroll>
              <LinkScroll
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleNav}
              >
                <li className="py-4 text-sm">Skills</li>
              </LinkScroll>
              <LinkScroll
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleNav}
              >
                <li className="py-4 text-sm">Projects</li>
              </LinkScroll>
              <LinkScroll
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleNav}
              >
                <li className="py-4 text-sm">Contact</li>
              </LinkScroll>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#14213d]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link href={"https://www.linkedin.com/in/cgaravitodev/"}>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href={"https://github.com/CarlosPProjects"}>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link
                  href={
                    "mailto:cg.fullstackdev@gmail.com?subject=Asunto&body=Mensaje"
                  }
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
