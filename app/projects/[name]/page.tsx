import { randomUUID } from "crypto";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const projects = [
  {
    id: "project_01",
    name: "Chat-Bot",
    subtitle: "Next.js - Tailwind - Firebase",
    description: [
      "ChatBot was created using the ChatGPT API. This chatbot has the same functionalities as ChatGPT, but I adapted its interface and design to my project. With this project, I learned how to use Firestore database, Google authentication, and API integration.",
      "This chatbot is a useful tool for those who want to interact with an artificial intelligence that can understand and respond to questions in a natural way. In addition, the integration of Google authentication ensures the security of users and the protection of their personal information.",
      "Throughout the development of this project, I acquired skills in database management and user authentication implementation. I also learned how to integrate APIs to improve the functionality of an application.",
    ],
    languages: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "React",
      "Firebase",
      "ChatGPT API",
      "Google API",
    ],
    imageName: "CHATGPT-PJ.png",
    demoURL: "https://chatgpt-clone-cr.vercel.app/",
    codeURL: "https://github.com/CarlosPProjects/chatgpt-clone-cr"
  },
  {
    id: "project_02",
    name: "Weather-App",
    subtitle: "Next.js - Tailwind",
    description: [
      "Weather App it is a web application that asks you to enter a location and displays its weather conditions, using the OpenWeather API. The design is minimalist and intuitive, making it easy for users to navigate.",
      "I learned the usage of APIs, Tailwind CSS, and Next.js while building this application. By integrating these technologies, I was able to create a highly functional and visually appealing application.",
      "Through this project, I learned how to leverage APIs to retrieve information and how to create a visually appealing user interface. Additionally, my proficiency with Tailwind CSS and Next.js improved significantly.",
    ],
    languages: ["Next.js", "Typescript", "Tailwind", "React", "Weather API"],
    imageName: "WEATHER-PJ.png",
    demoURL: "https://min-weather-app.vercel.app/",
    codeURL: "https://github.com/CarlosPProjects/min-weather-app"
  },
  {
    id: "project_03",
    name: "Diverfy",
    subtitle: "Wordpress",
    description: [
      "Diverfy, which was built using WordPress is an eCommerce website that offers a wide range of products across Spain, including events, products, and travel packages. The website features various plugins and was designed with PHP and CSS.",
      "To promote the website and its products, we collaborated with influencers from all over Spain, who receive commissions for every sale they generate. This has resulted in increased traffic and sales for the website.",
      "Working on this project, I gained valuable experience in building and designing eCommerce websites, as well as utilizing WordPress plugins. In addition, I learned how to effectively collaborate with influencers to drive traffic and generate sales.",
    ],
    languages: ["Wordpress", "WooCommerce", "WCFM", "Yith", "WPBakery"],
    imageName: "DIVERFY-PJ.png",
    demoURL: "https://diverfy.com/",
    codeURL: ""
  },
];

interface pageProps {
  params: { name: string };
}

const page = ({ params }: pageProps) => {
  const uuid = randomUUID();

  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="w-full">
          {project.name === params.name && (
            <>
              <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60">
                  <Image
                    src={`/assets/projects/${project.imageName}`}
                    fill={true}
                    className="object-cover absolute -z-10"
                    alt="/"
                  />
                  <div className="absolute p-4 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
                    <h2 className="py-2"> {project.name} </h2>
                    <p className="px-1">{project.subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8">
                <div className="col-span-4">
                  <p>Project</p>
                  <h2>Overview</h2>
                  <div className="mb-6">
                    {project?.description!.map((item) => (
                      <p className="py-4 max-w-2xl" key={uuid}>
                        {item}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={project.demoURL}
                    className="px-8 py-2 mt-4 mr-8 text-gray-100 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#14213d] to-[#222]"
                  >
                    <span>Demo</span>
                  </Link>
                  {project.codeURL !== "" && (
                    <Link
                      href={project.codeURL}
                      className="px-8 py-2 mt-4 mr-8 text-gray-100 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#14213d] to-[#222]"
                    >
                      <span>Code</span>
                    </Link>
                  )}
                </div>
                <div className="col-span-4 md:col-span-1 h-fit shadow-xl shadow-gray-400 rounded-xl p-4">
                  <div className="p-2">
                    <p className="text-center font-bold pb-2">Technologies </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1">
                      {project.languages.map((item) => (
                        <p
                          key={item}
                          className="text-gray-600 py-2 flex items-center gap-2"
                        >
                          <RiRadioButtonFill size={10} />
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <Link href={"/"}>
                  <p className="underline cursor-pointer">Back</p>
                </Link>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};
export default page;
