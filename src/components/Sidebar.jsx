import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activebutton, setActiveButton] = useState(1);
  useEffect(() => {
    if (location.pathname === "/home") setActiveButton(1);
    else if (location.pathname === "/home") setActiveButton(2);
  }, [location.pathname]);
  return (
    <div className=" hidden w-1/5 mds:flex flex-col border-r font-lexend border-[#FF8C42] shadow-lg shadow-gray-400/50 h-full justify-start px-4 items-start pt-[%] bg-white">
      <div className="pt-4 w-full flex flex-col  justify-start items-center">
        <div className="flex gap-2 flex-col pb-[80px] text-[#FF8C42] justify-start w-full text-[24px] font-extrabold">
        <h1 className="text-blue">Final Year Project</h1>
        <h1 className="">Akinsanya A. A.</h1>
        <h1>215571</h1>
        </div>
        <Link
          to="/home"
          className={
            activebutton === 1
              ? "flex justify-between text-[20px] text-white items-center font-bold  rounded-full px-4 bg-blue w-full h-[60px]"
              : "flex justify-between text-[20px] text-[#6B7276] items-center font-bold  px-4  w-full h-[60px]"
          }
        >
          <h4 className="">Home</h4>
          <FaHome className="text-[24px]"/>
        </Link>
        <Link
          to="/home"
          className={
            activebutton === 2
              ? "flex justify-between text-[20px] text-white items-center font-bold  rounded-full px-4 bg-[#4488AC] w-full h-[60px]"
              : "flex justify-between text-[20px] text-[#6B7276] items-center font-bold  px-4  w-full h-[60px]"
          }
        >
          <h4 className="">Profile</h4>
          <BiSolidUserCircle className="text-[24px]"/>
        </Link>

        <button
          onClick={() => navigate("/login")}
          className="flex justify-between text-[20px] mt-4 text-[#B82323] items-center  font-bold  px-4  w-full "
        >
          Logout
          <HiOutlineLogout className="text-[24px]"/>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
