import Image from "next/image";

type Props = {
  name: string;
  imageName: string;
};

const SkillBlock = ({ name, imageName }: Props) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-95 ease-in duration-300 grid place-items-center">
      <div className="grid grid-cols-2 gap-4 place-items-center">
        <div className="m-auto">
          <Image
            src={`/assets/logos/${imageName}.png`}
            width={64}
            height={64}
            alt="/"
            className="w-auto h-auto"
          />
        </div>
        <div className="grid place-items-center">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};
export default SkillBlock;
