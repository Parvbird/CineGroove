"use client"

import React, { useState } from "react";
import { BsBalloonHeartFill } from "react-icons/bs";
import Image from "next/image"
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";

type Props = {};

const HomeCreator = ({movie}) => {

  const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

  const profile = "/images/model 2.jpg";
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/movies/search?query=${searchText}`);
    }
  }

  return (
    <div className="flex shadow-sm flex-col align-middle items-start gap-5">
      <div className="mt-10 flex flex-col align-middle items-start w-full">
        <form action="" role="search" onSubmit={e => handleSubmit(e)} className="">
        <input type="text" onChange={e => setSearchText(e.target.value)} placeholder="Search" className="w-full rounded-md px-5 py-2 bg-white shadow-sm outline-none mb-10 relative" />
        <button className="absolute m-3 right-2 mr-5 "> <CiSearch size={20} className="" /> </button>
        </form>
        <div className="bg-slate-50 p-5 w-full rounded-md shadow-sm flex flex-col align-middle items-start">
          <div
            className="flex justify-between w-full align-middle
           items-center"
          >
            <h1 className="text-lg font-bold">Recommended Artists</h1>
            <BsBalloonHeartFill
              size={20}
              className="cursor-pointer"
            />
          </div>
          <div className="mt-5 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-7 align-middle items-center">
            <a href="" className="bg-slate-100 rounded-md p-5 flex flex-col gap-3 align-middle items-center">
              <img src={IMAGE_BASE_URL + movie?.poster_path} alt="" className="w-12 rounded-full" />
              <h1 className="text-lg font-bold">Nia</h1>
              <button className="bg-[#6b78ec] rounded-[32px] px-5 py-1 text-sm text-white font-semibold">View profile</button>
            </a>
            <a href="" className="bg-slate-100 rounded-md p-5 flex flex-col gap-3 align-middle items-center">
              <img src="/images/joshua.jpg" alt="" className="w-12 rounded-full" />
              <h1 className="text-lg font-bold">Nia</h1>
              <button className="bg-[#6b78ec] rounded-[32px] px-5 py-1 text-sm text-white font-semibold">View profile</button>
            </a>
            <a href="" className="bg-slate-100 rounded-md p-5 flex flex-col gap-3 align-middle items-center">
              <img src="/images/joshua.jpg" alt="" className="w-12 rounded-full" />
              <h1 className="text-lg font-bold">Nia</h1>
              <button className="bg-[#6b78ec] rounded-[32px] px-5 py-1 text-sm text-white font-semibold">View profile</button>
            </a>
            <a href="" className="bg-slate-100 rounded-md p-5 flex flex-col gap-3 align-middle items-center">
              <img src="/images/joshua.jpg" alt="" className="w-12 rounded-full" />
              <h1 className="text-lg font-bold">Nia</h1>
              <button className="bg-[#6b78ec] rounded-[32px] px-5 py-1 text-sm text-white font-semibold">View profile</button>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full flex flex-col align-middle items-start">
        <h1 className="text-md font-bold mb-5">Song of the week</h1>
        <div className="flex flex-col w-full align-middle items-center p-5 rounded-md bg-slate-100">
          <div className="flex w-full justify-between align-middle items-center">
            <h1 className="text-md font-bold">Player</h1>
            <button className="">
            <BsBalloonHeartFill
              size={20}
              className="cursor-pointer"
            />
            </button>
          </div>
          <div className="flex flex-col gap-3 align-middle items-center w-full">
            <div className="rounded-lg w-full items-center align-middle justify-center mx-auto mt-5">
              <Image src={profile} width="80" height="80" alt="" className="rounded-lg mx-auto" />
            </div>
            <div className="flex flex-col align-middle items-center w-full text-center gap-1">
              <h1 className="text-lg font-bold">Butterfly Effect</h1>
              <p className="text-md">Travis scott</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCreator;
