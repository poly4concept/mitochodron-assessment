import ProfileCard from "./ProfileCard";
import SocialsCard from "./SocialsCard";
import SubscriptionCard from "./SubscriptionCard";

const SideNav = () => {
  return (
    <div className="flex flex-col w-full border-r-[1px] border-outline min-h-[80vh] p-6">
      <ProfileCard />
      <SubscriptionCard />
      <SocialsCard />
    </div>
  );
};

export default SideNav;
