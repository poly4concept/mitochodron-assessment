import { TbWorld } from "react-icons/tb";

const SocialsCard = () => {
  return (
    <div className="border-[1px] border-outline rounded-3xl py-4 px-6 mt-5">
      <p className="text-lg font-medium">LINKS</p>

      <button className="border-[1px] w-full mt-4 border-outline py-3.5 px-2 gap-2 flex items-center text-lg font-medium rounded-lg">
        <TbWorld size={24} />
        Linkedin
      </button>
    </div>
  );
};

export default SocialsCard;
