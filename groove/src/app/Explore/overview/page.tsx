import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdFilterList } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto align-middle items-center lg:mt-12 md:mt-2 flex flex-col gap-3 p-3">
      <div className="max-w-[700px] w-full flex flex-col gap-5 align-middle items-center p-3">
        <h1 className="text-3xl font-bold flex items-center align-middle">
          Learning is a new experience
        </h1>
        <p className="text-sm flex flex-wrap text-gray-700">
          From gaming, music, to entertainment, there is a place for you Joshua
        </p>
        <div className="flex items-center w-full bg-white shadow-sm rounded-[3px] p-1">
          <input
            type="text"
            placeholder="Explore your favorite community"
            className="border-none w-full outline-none bg-transparent rounded-[3px] p-1 px-2 font-nunito max-md:mt-5 lg:mt-0"
          />
          <IoSearchOutline size={20} className="mr-2" />
        </div>
      </div>
      <div className="mt-5 flex w-full max-md:flex-wrap gap-5 justify-between align-middle items-center p-3">
        <h1 className="text-2xl font-bold">Featured communities</h1>
        <div className="flex gap-2 items-center">
          <button className="flex items-center gap-3 justify-center text-white bg-[#6b78ec] py-2 lg:py-2 px-4 rounded-lg hover:border-slate-gray md:w-auto hover:bg-black hover:text-white transition duration-500 ease-in cursor-pointer">
            <span className="pl-2">Filter</span>
            <span className="w-[12px] text-white">
              <MdFilterList size={13} />
            </span>
          </button>
          <a
            href="/createarticle"
            className="flex items-center gap-3 justify-center text-white bg-[#6b78ec] py-2 lg:py-2 px-4 rounded-lg hover:border-slate-gray md:w-auto hover:bg-black hover:text-white transition duration-500 ease-in cursor-pointer"
          >
            <span className="">Create</span>
            <span className="w-[12px] text-white">
              <AiOutlinePlus size={13} />
            </span>
          </a>
        </div>
      </div>
      <div className="mt-5 w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 align-middle items-center p-3">
      <a
          href=""
          className="bg-white shadow-sm rounded-lg"
        >
          <div className="relative w-full rounded-lg">
            <img
              src="/images/read.jpg"
              alt=""
              className="relative rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>

            <div className="absolute top-1 p-3">
              <div className="flex flex-wrap">
                <span className="bg-[#FFF5CC] text-[10px] font-bold py-1 inline-block rounded-[3px] uppercase align-middle items-center me-[6px] mb-[6px] px-3">
                  Health
                </span>
              </div>
            </div>
            <div className="absolute w-full bottom-1 p-3 flex justify-between align-middle items-center">
              <div className="flex flex-col gap-2 align-middle items-start">
                <h1 className="text-white text-xl font-bold">Parvixome</h1>
                <div className="flex gap-5 align-middle items-start">
                  <span className="flex gap-2 align-middle items-start">
                    {/* <AiOutlinePlus className="text-white" size={15} /> */}
                    <p className="text-white text-sm">Download</p>
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-full p-2">
                {/* <AiOutlinePlus className="" size={15} /> */}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default page;
