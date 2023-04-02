"use client";

import { Link } from "react-scroll";

const About = () => {
  return (
    <div id="about" className="w-full md:screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#14213d]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I am Carlos Garavito, a passionate FullStack developer with a focus
            on web development and technology. I create visually appealing and
            intuitive software solutions that provide value to end-users. I have
            skills in web application development, database management,
            performance optimization, and cybersecurity. I also enjoy staying
            active and maintaining a healthy lifestyle, as well as traveling to
            experience different cultures.
          </p>
          <p className="py-2 text-gray-600">
            In summary, I am a passionate, active, and curious developer who
            constantly seeks new challenges and opportunities to learn and grow.
            If you are looking for an experienced and creative developer who can
            take your projects to new heights, please do not hesitate to contact
            me. I look forward to speaking with you.
          </p>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-95 ease-in duration-300 col-span-1">
          <img
            src="/assets/ABOUT-IMAGE.jpg"
            alt="about image"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
