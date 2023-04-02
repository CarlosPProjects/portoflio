import Image from "next/image";
import SkillBlock from "./SkillBlock";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2" id="skills">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#14213d]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillBlock name="HTML" imageName="HTML-LOGO" />
          <SkillBlock name="CSS" imageName="CSS-LOGO" />
          <SkillBlock name="JavaScript" imageName="JS-LOGO" />
          <SkillBlock name="TypeScript" imageName="TYPESCRIPT-LOGO" />
          <SkillBlock name="React" imageName="REACT-LOGO" />
          <SkillBlock name="Next.js" imageName="NEXTJS-LOGO" />
          <SkillBlock name="Tailwind" imageName="TAILWIND-LOGO" />
          <SkillBlock name="Firebase" imageName="FIREBASE-LOGO" />
          <SkillBlock name="Prisma" imageName="PRISMA-LOGO" />
          <SkillBlock name="MongoDB" imageName="DB-LOGO" />
          <SkillBlock name="Wordpress " imageName="WP-LOGO" />
        </div>
      </div>
    </div>
  );
};
export default Skills;
