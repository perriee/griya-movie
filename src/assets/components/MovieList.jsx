import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ dataMovies }) => {
  if (!dataMovies) {
    return <div className="text-center text-xl italic">- Data Movies Tidak Tersedia -</div>;
  }

  return (
    <div className="flex flex-wrap justify-around gap-10">
      {dataMovies.slice(1, 5).map((movie) => (
        <div key={movie.id} className="flex flex-col w-[20rem] shadow-lg rounded-lg bg-slate-600">
          <div className="w-full">
            <img src={`${process.env.REACT_APP_IMG_URL}${movie.poster_path}`} alt={movie.title} className="rounded-lg h-full" />
          </div>
          <div className="flex flex-col p-4">
            <div className="text-slate-300 text-lg font-bold">{movie.title}</div>
            <div className="text-slate-400">Release: {movie.release_date}</div>
          </div>
          <div className="flex justify-end items-end px-4 pb-4">
            <Link to={`/movie/${movie.id}`} className="px-2 py-1 rounded-lg text-red-500 font-bold">
              See Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
