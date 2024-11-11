import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

const Layout = () => {
  return (
    <div>
      <TopNav />
      <div className="grid grid-cols-10">
        <div className="col-span-3">
          <SideNav />
        </div>
        <div className="col-span-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
