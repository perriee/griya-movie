import React, { useState, useEffect } from 'react';
import { searchMovies } from '../../api/tmdb';
import { Link } from 'react-router-dom';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const searchDataMovies = async () => {
      if (searchQuery) {
        try {
          const results = await searchMovies(searchQuery);
          setSearchResults(results);
        } catch (error) {
          throw error;
        }
      } else {
        setSearchResults([]);
      }
    };

    searchDataMovies();
  }, [searchQuery]);

  return (
    <div className="bg-gray-700 min-h-screen">
      <div className="px-10 py-5">
        <input type="text" className="border-2 border-gray-300 rounded-lg p-2" placeholder="Search for a movie..." value={searchQuery} onChange={handleSearch} />
      </div>
      <div className="flex flex-wrap justify-around gap-10 px-10 py-15">
        {searchResults?.map((movie) => (
          <div key={movie.id} className="flex flex-col w-[20rem] shadow-lg rounded-lg bg-gray-600">
            <div className="w-full">
              <img src={`${process.env.REACT_APP_IMG_URL}${movie.poster_path}`} alt={movie.title} className="rounded-lg h-full" />
            </div>
            <div className="flex flex-col p-4">
              <div className="text-gray-300 text-lg font-bold">{movie.title}</div>
              <div className="text-gray-400">Release: {movie.release_date}</div>
            </div>
            <div className="flex justify-end items-end px-4 pb-4">
              <Link to={`/movie/${movie.id}`} className="px-2 py-1 rounded-lg font-bold">
                See Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
