import { CiMail } from "react-icons/ci";
import BanjiPic from "../../assets/banji-ogunyemi.png";
import { TbWorld } from "react-icons/tb";
const MobileSideNav = () => {
  return (
    <ul className="h-full text-sm w-full pt-5 pb-[150px] px-6 overflow-y-scroll">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={BanjiPic}
          alt="Banji Ogunyemi"
          className="w-10 h-10 rounded-[50%]"
        />
        <p className="text-lg font-medium">Banji Ogunyemi</p>
      </div>

      <div className="flex items-center gap-4">
        <CiMail size={20} /> banjiogunyemi@gmail.com
      </div>
      <div className="flex items-center gap-4 mt-2">
        <TbWorld size={20} /> Lagos, Nigeria
      </div>

      <div className="flex items-center justify-between gap-4 mt-8 mb-3">
        <p className="text-lg font-medium">TEAMS</p>
        <p className="text-sm bg-[#C5FCD6] p-2 rounded-lg">Basic User</p>
      </div>

      <div className="flex items-center text-lg justify-between">
        <span className="gap-1">Departments</span>
        <span>0</span>
      </div>
      <div className="flex items-center text-lg justify-between mt-2">
        <span className="gap-1">Units</span>
        <span>0</span>
      </div>

      <button className="border-[1px] w-full border-outline py-3.5 px-2 gap-2 flex items-center rounded-lg mt-8">
        <TbWorld size={24} />
        Linkedin
      </button>
    </ul>
  );
};

export default MobileSideNav;
