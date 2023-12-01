"use client"

import React, { useEffect, useState } from 'react'

type Props = {}

const searchResult = ( {searchText, movies} ) => {
    const [filteredMovies, setFilteredMovies] = useState(movies);
    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies]);

  return (
    <div>
        <div className="">
            <h1 className="text-md">Top search result for {searchText}</h1>
            <div className=""></div>
        </div>
    </div>
  )
}

export default searchResult