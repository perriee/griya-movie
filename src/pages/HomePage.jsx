import React, { useEffect, useState } from 'react';
import { MovieList } from '../assets/components/MovieList';
import { getPopularMovies } from '../api/tmdb';
import { CarouselComponent } from '../assets/components/CarouselComponent';

export const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const dataPopularMovies = async () => {
    const movies = await getPopularMovies();
    setPopularMovies(movies);
  };

  useEffect(() => {
    dataPopularMovies();
  }, []);

  return (
    <>
      <CarouselComponent />
      <div className="bg-slate-700 min-h-screen">
        <div className="px-10 py-6 flex justify-between">
          <div className="text-xl font-bold text-white">Popular Movies</div>
          <div className="text-xl font-bold text-red-600">
            <a href="/popular-movies">See All Movies</a>
          </div>
        </div>
        <div className="px-10">
          <MovieList dataMovies={popularMovies} />
        </div>
      </div>
    </>
  );
};
