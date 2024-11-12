import { Link, NavLink } from "react-router-dom";
import VendPalLogo from "../../assets/vendpallogo.svg";
import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import {
  MdOutlineAccountBalance,
  MdOutlineAccountTree,
  MdOutlineMessage,
} from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import MobileSideNav from "./MobileSideNav";

const baseNavStyles =
  "flex items-center gap-2 text-primary-black rounded-2xl py-3.5 px-5 font-medium";
const TopNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={`${
        nav ? "no-doc-scroll bg-white" : ""
      } fixed bg-accent lg:px-[4%] px-6 py-5 flex items-center gap-10 text-white lg:relative w-full z-[9999] border-b-[1px] border-outline lg:h-[20vh]`}
    >
      <div className="flex items-center gap-2">
        <IoMenuOutline
          color="black"
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

      <div className="flex flex-row-reverse lg:flex-row w-full justify-between items-center">
        <ul className="hidden lg:flex items-center w-fit p-2 bg-[#EDEEEA] rounded-3xl text-lg">
          <NavLink
            className={({ isActive }) =>
              `${baseNavStyles} ${isActive ? "bg-white" : "bg-transparent"}`
            }
            to="/"
          >
            <RxDashboard size={24} />
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${baseNavStyles} ${isActive ? "bg-white" : "bg-transparent"}`
            }
            to="/workflow"
          >
            <MdOutlineAccountTree size={24} />
            Approval Workflow
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${baseNavStyles} ${isActive ? "bg-white" : "bg-transparent"}`
            }
            to="/budget"
          >
            <MdOutlineAccountBalance size={24} />
            Budget Rooms
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${baseNavStyles} ${isActive ? "bg-white" : "bg-transparent"}`
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

      <div
        className={`h-screen bg-[#00000069] w-full top-[83px] transition-all absolute ${
          nav ? " left-0 duration-200" : "left-[-100%] duration-500"
        }`}
      >
        <div
          className={`absolute transition-all text-primary-black ${
            nav
              ? "h-full w-[295px] md:w-[395px] bg-white left-0 duration-500"
              : "h-[100vh] w-full bg-black bg-opacity-20 left-[-100%] duration-200"
          }`}
        >
          <div className="rounded-full bg-white w-[35px] h-[35px] absolute top-0 -right-[40px] z-10">
            <IoCloseOutline
              onClick={handleNav}
              size={35}
              className="text-primary-black cursor-pointer lg:hidden"
            />
          </div>
          <MobileSideNav />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
