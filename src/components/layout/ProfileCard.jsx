import { CiMail } from "react-icons/ci";
import BanjiPic from "../../assets/banji-ogunyemi.png";
import { TbWorld } from "react-icons/tb";
const ProfileCard = () => {
  return (
    <div className="border-[1px] border-outline rounded-3xl py-4 px-6 ">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={BanjiPic}
          alt="Banji Ogunyemi"
          className="w-14 h-14 rounded-[50%]"
        />
        <p className="text-2xl font-medium">Banji Ogunyemi</p>
      </div>

      <div className="flex items-center text-lg gap-4">
        <CiMail size={24} /> banjiogunyemi@gmail.com
      </div>
      <div className="flex items-center text-lg gap-4 mt-2">
        <TbWorld size={24} /> Lagos, Nigeria
      </div>

      <button className="border-[1px] w-full mt-4 border-outline py-3.5 flex items-center justify-center text-lg font-medium text-center rounded-lg">
        Set up your account
      </button>
    </div>
  );
};

export default ProfileCard;
