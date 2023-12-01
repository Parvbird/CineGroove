import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import Movie from '@/app/movie/[id]/Movie'

type Props = {}

const Card = ({movie}) => {
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
  return (
    <div className="">
        <Link href={"/movie/" + movie.id}>
            <div className="flex flex-col w-full rounded-md gap-8 bg-slate-100 p-5">
                <img src={IMAGE_BASE_URL + movie.poster_path} alt=""  className="rounded-md w-full"  />
                <div className="flex flex-col gap-2 align-middle items-start w-full">
                    <h1 className="text-xl font-bold">{movie.title} </h1>
                    <p className="text-sm text-gray-600 overflow-y-auto"> {movie.overview} </p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card