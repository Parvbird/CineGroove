import React from "react";
import { BsBalloonHeartFill } from "react-icons/bs";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { CiDollar } from "react-icons/ci";
import { getTrendingMovies } from "../../utils/request";
import Card from "./Card";

type Props = {};

// const PostCard = (props: Props) => {
//   const movies = await getTrendingMovies();

//   return (
//     <div className="post-card bg-gray-50 relative">
//       <div className="">
//         {movies.map(movie => {
//           return movie.id
//         })}
//       </div>
//     </div>
//   );
// };

// export default async PostCard;

// onClick={getElementById('video').play()}

export default async function PostCard() {
  const movies = await getTrendingMovies();

  return (
    <div className="post-card bg-gray-50 relative">
      <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-8 w-full align-middle items-center">
        {movies.map(movie => {
          return <Card movie={movie}/>
        })}
      </div>
    </div>
  );
}