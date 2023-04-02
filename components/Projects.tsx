import ProjectBlock from "./ProjectBlock";

const Projects = () => {
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#14213d]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectBlock
            title="Chat-Bot"
            description="Next.js"
            nameImg="CHATGPT"
          />
          <ProjectBlock
            title="Weather-App"
            description="Next.js"
            nameImg="WEATHER"
          />

          <ProjectBlock
            title="Diverfy"
            description="Wordpress"
            nameImg="DIVERFY"
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
