"use client";

import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/components/Loading";
import axios from "axios";
import Genres from "@/components/Genres";
import { getTrendingMovies } from "../../../utils/request";
import Card from "@/components/Card";

type Props = {};

export default async function Explore() {
  const movies = await getTrendingMovies();

  return (
    <div className="w-full p-5 mx-auto overflow-scroll custom-scrollbar  flex flex-col align-middle items-start">
      <div className="lg:flex justify-between max-md:flex-wrap gap-5 w-full align-middle items-center lg:mt-10 md:mt-0">
        <h1 className="lg:text-3xl flex items-start md:text-xl sm:text-lg font-bold">
          Explore
        </h1>
        <form className="flex items-center bg-white shadow-sm rounded-[3px] p-1">
          <input
            type="text"
            placeholder="Explore favorite movies"
            className="border-none w-full outline-none bg-transparent rounded-[3px] p-0.5 px-2 font-nunito max-md:mt-5 lg:mt-0"
          />
          <button type="submit" className="">
            <IoSearchOutline size={20} className="mr-2" />
          </button>
        </form>
      </div>
      <div className="lg:mt-5 max-md:mt-8 flex align-middle items-start">
        <h1 className="text-gray-600 lg:text-lg md:text-md sm:text-sm font-bold">
          Welcome Jane, Let explore something today.
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-10 sm:grid-cols-1 gap-8 w-full align-middle items-center">
        {movies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </div>
    </div>
  );
}
