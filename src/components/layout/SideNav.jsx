import Footer from "./Footer";
import ProfileCard from "./ProfileCard";
import SocialsCard from "./SocialsCard";
import SubscriptionCard from "./SubscriptionCard";

const SideNav = () => {
  return (
    <section className="hidden lg:flex flex-col w-full border-r-[1px] border-outline lg:min-h-[80vh] pt-6">
      <div className="px-6">
        <ProfileCard />
        <SubscriptionCard />
        <SocialsCard />
      </div>
      <Footer />
    </section>
  );
};

export default SideNav;
