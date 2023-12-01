import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="container mx-auto overflow-scroll custom-scrollbar lg:mt-14 md:mt-5 align-middle w-full items-center flex flex-col gap-5">
      <div className="rounded-xl flex w-full justify-between align-middle bg-slate-100 bg-opacity-10 items-center p-5 m-5">
        <div className="lg:flex max-md:flex-col max-md:gap-5 gap-7 align-middle items-center w-full">
          <img
            src="/images/joshua.jpg"
            alt=""
            className="w-20 rounded-full align-middle items-center"
          />
          <div className="flex w-full flex-col gap-3 align-middle items-start">
            <h1 className="text-xl font-bold">Joshua Kendu</h1>
            <p className="text-sm text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              incidunt!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col w-full">
        <h1 className="">Favorite music</h1>
      </div>
      <div className="mt-10 flex flex-col w-full">
        <h1 className="">Favorite movie</h1>
      </div>
    </div>
  );
};

export default Profile;
