import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-[86px] h-full pt-24 border-r  ">
      <ul>
        <li className="flex items-center justify-center p-5 cursor-pointer text-xl">
          <NavLink to="/">
            <IoMdHome className="" />{" "}
          </NavLink>
        </li>
        <li className="flex items-center justify-center p-5 cursor-pointer text-xl">
          <NavLink to="account">
            <MdManageAccounts />
          </NavLink>
        </li>
        <li className="flex items-center justify-center p-5 cursor-pointer text-2xl">
          <NavLink to="settings">
            <IoSettingsOutline />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
