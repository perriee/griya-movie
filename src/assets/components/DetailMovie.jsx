import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail } from '../../api/tmdb';

export const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const fetchDetailMovie = async () => {
    const data = await getMovieDetail(id);
    setMovie(data);
  };

  useEffect(() => {
    fetchDetailMovie();
  }, [id]);

  const background = {
    background: `url(${process.env.REACT_APP_IMG_URL}${movie.backdrop_path}) center/cover`,
    minHeight: '100vh',
  };

  return (
    <div style={background}>
      <div className="bg-black/50 min-h-screen">
        <div className="flex flex-col px-10 justify-center h-screen gap-7 w-1/2">
          <div className="text-white text-6xl font-bold">{movie.title}</div>
          <div className="text-white text-xl italic">{movie.genres?.map((value) => value.name).join(', ')}</div>
          <div className="text-white text-xl">{movie.overview}</div>
          <div className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" class="w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-white text-xl">{movie.vote_average}</span>
          </div>
          <div>
            <a href='#' className='bg-red-600 text-white px-4 py-3 rounded-lg'>Watch Trailer</a>
          </div>
        </div>
      </div>
    </div>
  );
};
