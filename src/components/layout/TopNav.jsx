import { Link, NavLink } from "react-router-dom";
import VendPalLogo from "../../assets/vendpallogo.svg";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import {
  MdOutlineAccountBalance,
  MdOutlineAccountTree,
  MdOutlineMessage,
} from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";

const TopNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={`${
        nav ? "no-doc-scroll" : ""
      } fixed bg-accent lg:px-[4%] px-6 py-5 flex items-center gap-10 text-white lg:relative w-full z-[9999] border-b-[1px] border-outline h-[20vh]`}
    >
      <div className="flex items-center gap-2">
        <IoMenuOutline
          onClick={handleNav}
          size={35}
          className="text-white cursor-pointer lg:hidden"
        />
        <Link to="/">
          <div className="lg:w-[170px] w-[90px]">
            <img className="w-full" src={VendPalLogo} alt="Vend Pal" />
          </div>
        </Link>
      </div>

      <div className="hidden lg:flex w-full justify-between items-center">
        <ul className="flex items-center w-fit p-2 bg-[#EDEEEA] rounded-3xl text-lg">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 bg-white text-primary-black rounded-2xl py-3.5 px-5 font-medium"
                : "flex items-center gap-2 bg-transparent text-primary-black rounded-2xl py-3.5 px-5 font-medium"
            }
            to="/"
          >
            <RxDashboard size={24} />
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 bg-white text-primary-black rounded-2xl py-3.5 px-5 font-medium"
                : "flex items-center gap-2 bg-transparent text-primary-black rounded-2xl py-3.5 px-5 font-medium"
            }
            to="/workflow"
          >
            <MdOutlineAccountTree size={24} />
            Approval Workflow
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 bg-white text-primary-black rounded-2xl py-3.5 px-5 font-medium"
                : "flex items-center gap-2 bg-transparent text-primary-black rounded-2xl py-3.5 px-5 font-medium"
            }
            to="/budget"
          >
            <MdOutlineAccountBalance size={24} />
            Budget Rooms
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 bg-white text-primary-black rounded-2xl py-3.5 px-5 font-medium"
                : "flex items-center gap-2 bg-transparent text-primary-black rounded-2xl py-3.5 px-5 font-medium"
            }
            to="/analytics"
          >
            <TbBrandGoogleAnalytics size={24} />
            Analytics
          </NavLink>
        </ul>

        <div className="flex items-center gap-4">
          <Link to="/notifications" className="bg-[#EDEEEA] p-2 rounded-[50px]">
            <IoMdNotificationsOutline size={24} color="black" />
          </Link>
          <Link to="/support" className="bg-[#EDEEEA] p-2 rounded-[50px]">
            <MdOutlineMessage size={24} color="black" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
