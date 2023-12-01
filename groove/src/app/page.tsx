import React from "react";
import PostCard from "@/components/PostCard";
import HomeCreator from "@/components/HomeCreator";
import { useSession } from "next-auth/react";

export default function Home() {
  // const {data:session} = useSession();

  return (
    <main className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="text-left w-full lg:text-2xl md:text-lg sm:text-md md:h2-bold">Home Feed</h2>
          <div className="w-full flex justify-between align-middle items-center"></div>
            <ul className=" w-full relative">
              <PostCard />
            </ul>
        </div>
      </div>
        <div className="home-creators">
          <HomeCreator />
        </div>
    </main>
  );
}
