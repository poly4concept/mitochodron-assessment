import { GoUpload } from "react-icons/go";

const SubscriptionCard = () => {
  return (
    <div className="border-[1px] border-outline rounded-3xl py-4 px-6 mt-5">
      <div className="flex items-center justify-between gap-4 mb-6">
        <p className="text-lg font-medium">TEAMS</p>
        <p className="text-sm font-medium bg-[#C5FCD6] p-3 text-center rounded-lg">
          Basic User
        </p>
      </div>

      <div className="flex items-center text-lg justify-between">
        <span className="font-medium gap-1">Departments</span>
        <span>0</span>
      </div>
      <div className="flex items-center text-lg justify-between mt-2">
        <span className="font-medium gap-1">Units</span>
        <span>0</span>
      </div>

      <button className="border-[1px] w-full mt-4 border-outline py-3.5 gap-2 flex items-center justify-center text-lg font-medium text-center rounded-lg">
        <GoUpload size={24} />
        Upgrade your plan
      </button>
    </div>
  );
};

export default SubscriptionCard;
