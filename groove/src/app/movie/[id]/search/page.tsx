import React from 'react'
import { getMovies } from '../../../../../utils/request';
import searchResult from '@/components/searchResult';

async function Search ({searchParams})  {
    const searchText = searchParams.query;
    const movies = await getMovies(searchText);
  return (
      <searchResult searchText={searchText} movies={movies}>
        
      </searchResult>
  )
}

export default Search