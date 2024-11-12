import { FaPlus } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";

const AddTeam = () => {
  return (
    <div className="flex flex-col-reverse rounded-3xl bg-[#F3F4EF] h-full px-5 py-4 pb-6">
      <button className="w-full flex items-center rounded-2xl py-4 text-lg font-medium bg-white justify-center justify-self-end gap-1">
        <IoCreateOutline size={20} />
        Create a department
      </button>
      <div className="self-center mb-[20%] bg-[#00361D] rounded-[50%] w-[72px] h-[72px] flex items-center justify-center">
        <FaPlus color="white" size={24} />
      </div>
    </div>
  );
};

export default AddTeam;
