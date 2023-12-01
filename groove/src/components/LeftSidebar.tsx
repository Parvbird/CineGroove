import { sidebarLinks } from "@/constants";
import React from "react";
import { CiHome } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

type Props = {};

const LeftSidebar = (props: Props) => {
  return (
    <nav className="leftsidebar shadow-sm">
      <div className="flex flex-col gap-11">
        <a href="/" className="flex gap-3 items-center rounded-full">
          {/* <div className="rounded-full p-2 bg-black">
            <img src="/images/parvixome-logo.png" alt="" className="w-6 rounded-full " />
          </div> */}
          <div className="text-black text-lg tracking-[7px] max-md:text-md font-hubballi font-semibold">
            CineGroove
          </div>
        </a>
        <a href="/Profile" className="flex gap-3 items-center">
          <img src="/images/joshua.jpg" alt="" className="w-8 rounded-full" />
          <div className="flex flex-col">
            <p className="text-lg font-bold">Joshua Ajayi</p>
            <p className="text-sm text-gray-500">@ CineGroove</p>
          </div>
        </a>
        <ul className="flex flex-col gap-3">
          <li className="leftsidebar-link">
            <a href="/" className="flex gap-4 items-center p-4">
              <CiHome size={20} className="" />
              <p className="">Home</p>
            </a>
          </li>
          <li className="leftsidebar-link">
            <a href="/Explore" className="flex gap-4 items-center p-4">
              <MdOutlineExplore size={20} className="" />
              <p className="">Explore</p>
            </a>
          </li>
        </ul>
      </div>
      <button className="shad-button_ghost flex gap-3">
        <CiLogout size={20} className="" />
        <p className="">Logout</p>
      </button>
    </nav>
  );
};

export default LeftSidebar;
