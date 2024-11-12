import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

const Layout = () => {
  return (
    <div>
      <TopNav />
      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="lg:col-span-3">
          <SideNav />
        </div>
        <div className="lg:col-span-7 mt-14 lg:mt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
