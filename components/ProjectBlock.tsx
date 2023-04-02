import Link from "next/link";

type Props = {
  title: string;
  description: string;
  nameImg: string;
};

const ProjectBlock = ({ title, description, nameImg }: Props) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full p-2 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#14213d] to-[#222]">
      <img
        src={`/assets/projects/${nameImg}-PJ.png`}
        alt="/"
        className="rounded-xl group-hover:opacity-10 duration-500"
      />
      <div className="hidden group-hover:block absolute">
        <h3 className="text-xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 text-white text-center">{description}</p>
        <Link href={`/projects/${encodeURIComponent(title)}`}>
          <p className="text-center py-2 px-8 rounded-lg bg-white text-gray-700 font-bold text-base cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};
export default ProjectBlock;
