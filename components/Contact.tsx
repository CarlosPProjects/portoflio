"use client";

import React, { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Link as LinkScroll } from "react-scroll";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Result = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      progressStyle={{ backgroundColor: "gray" }}
    />
  );
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [result, setResult] = useState(false);
  const notify = () => toast("Message sent successfully!");
  const { EMAIL_JS_PUBLIC_KEY } = process.env;

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_748epf7",
          "template_zhtuj5a",
          form.current,
          EMAIL_JS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setResult(true);
    }
  };

  return (
    <div className="w-full lg:h-screen" id="contact">
      <div className="max-w-[1240px] gap-8 m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#14213d]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>

        <div className="grid grid-cols-2 gap-8">
          <div className="w-full h-auto max-md:col-span-2 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="h-full p-4 flex flex-col justify-between">
              <div>
                <div className="w-full h-80 bg-[url(/assets/CONTACT-IMAGE.jpg)] bg-center bg-cover rounded-xl"></div>
                <div className="py-6">
                  <h3 className="text-3xl">Carlos G.</h3>
                  <p className="py-2">Full Stack Developer</p>
                  <p className="">
                    I am available for freelance or full-time positions. Contact
                    me and let&apos;s talk.
                  </p>
                </div>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <Link href={"https://www.linkedin.com/in/cgaravitodev/"}>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href={"https://github.com/CarlosPProjects"}>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link
                    href={
                      "mailto:cg.fullstackdev@gmail.com?subject=Asunto&body=Mensaje"
                    }
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto max-md:col-span-2 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm p-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm p-2">Number</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm p-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm p-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="fullName"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm p-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    name="message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#14213d] to-[#222]"
                  onClick={notify}
                >
                  Send Message
                </button>
                <div>{result ? <Result /> : null}</div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <LinkScroll
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={25} className="text-[#14213d]" />
            </div>
          </LinkScroll>
        </div>
      </div>
    </div>
  );
};
export default Contact;
