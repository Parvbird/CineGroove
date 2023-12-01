import React from 'react'
import { getMoviesDetails, getSimilarMovies } from '../../../../utils/request'

type Props = {}

async function Movie({params}) {
  const movieDetails = await getMoviesDetails(params.id);
  const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
  const similarMovies = await getSimilarMovies(params.id);
  return (
    <div className='container mx-auto w-full align-middle items-start  overflow-scroll custom-scrollbar flex flex-col gap-2  m-5 p-3'>
      <div className="lg:flex max-md:flex-col gap-5 w-full align-middle items-start">
        <div className=" w-full  lg:flex max-md:flex-col gap-5 align-middle items-start">
          <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} alt="" className="w-30 rounded-md" />
          <div className="flex flex-col  align-middle items-start w-full">
            <div className="">
              <h1 className="text-2xl font-bold"> {movieDetails.title} </h1>
              <p className="text-sm text-gray-700">Release date: {movieDetails.release_date} </p>
              <p className="text-sm text-gray-700">Release status: {movieDetails.status} </p>
            </div>
          <h1 className="text-lg mt-5">Description</h1>
          <p className="mt-5 text-md text-gray-800">{movieDetails.overview}</p>
          <p className=""> {movieDetails.genres.map(genre => {
            return <button key={genre.id} className="mt-5 px-5 py-1 rounded-md bg-green-100 border border-green-500 text-green-700 text-sm font-bold mr-5"> {genre.name} </button>
          })} </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-5 w-full align-middle items-start">
        <h1 className="text-md">Related Movies</h1>
        <div className="flex flex-col gap-5 align-middle items-center">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-1 gap-8 w-full align-middle items-center">
            {similarMovies.map(movie => {
              return (
                <div className="w-full">
                  <img src={IMAGE_BASE_URL + movie.poster_path} alt="" className="" />
                  <div className="">
                    <h1 className="mt-2 text-lg font-bold"> {movie.title} </h1>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
  export default Movie