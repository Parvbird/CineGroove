import { CiHome } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { VscFolderLibrary } from "react-icons/vsc";
import Image from "next/image";

export const sidebarLinks = [
  {
    icon: <Image src="/images/home.png" alt="Home" width={20} height={20} />,
    route: "/",
    label: "Home",
  },
  {
    icon: <MdOutlineExplore size={20} className="" />,
    route: "/explore",
    label: "Explore",
  },
  {
    icon: <TbUsersGroup size={20} className="" />,
    route: "/all-users",
    label: "Friends",
  },
  {
    icon: <CiHome size={20} className="" />,
    route: "/saved",
    label: "Saved",
  },
  {
    icon: <CiHome size={20} className="" />,
    route: "/create-post",
    label: "Create Post",
  },
];

export const bottombarLinks = [
  {
    icon: "",
    route: "/",
    label: "Home",
  },
  {
    icon: <MdOutlineExplore size={20} className="" />,
    route: "/explore",
    label: "Explore",
  },
  {
    icon: <CiSearch size={20} className="" />,
    route: "/saved",
    label: "Search",
  },
  {
    icon: <IoCreateOutline size={20} className="" />,
    route: "/create-post",
    label: "Create",
  },
];
