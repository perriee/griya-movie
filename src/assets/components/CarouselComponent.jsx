import { Carousel } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { getNowPlayingMovies } from '../../api/tmdb';

export const CarouselComponent = () => {
  const [nowPlaying, setNowPlaying] = useState([]);

  const dataNowPlayingMovies = async () => {
    const movies = await getNowPlayingMovies();
    setNowPlaying(movies);
  };

  useEffect(() => {
    dataNowPlayingMovies();
  }, []);

  return (
    <Carousel
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill('').map((_, i) => (
            <span key={i} className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'}`} onClick={() => setActiveIndex(i)} />
          ))}
        </div>
      )}
    >
      {nowPlaying?.slice(13, 14).map((movie) => (
        <div key={movie.id}>
          <div className="bg-black/50 min-h-screen">
            <div className="relative bg-center">
              <img src={`${process.env.REACT_APP_IMG_URL}${movie.backdrop_path}`} alt={movie.title} className="rounded-lg h-full" />
            </div>
            <div className="absolute top-0 left-0 right-0">
              <div className="flex flex-col px-10 justify-center h-screen gap-7 w-1/2">
                <div className="text-white text-6xl font-bold">{movie.title}</div>
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
                  <a href="#" className="bg-red-600 text-white px-4 py-3 rounded-lg">
                    Watch Trailer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
