import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearchClick = () => {
    setIsSearchClicked(true);
    navigate('/search');
  };

  return (
    <div className="flex justify-between items-center bg-slate-800 px-10 py-4">
      <div>
        <div className="text-3xl font-bold text-red-600">
          <a href="/">Griya Movie</a>
        </div>
      </div>
      <div className={isSearchClicked ? 'hidden' : 'block px-3 py-2 rounded-lg border-2 border-slate-300'}>
        <button onClick={handleSearchClick}>
          <span className="text-slate-400">Search Movie</span>
        </button>
      </div>
      <div className="flex gap-4">
        <div className="bg-slate-800 border-2 border-red-600 rounded-lg px-3 py-2">
          <a href="/" className="text-red-600">
            Login
          </a>
        </div>
        <div className="bg-red-600 rounded-lg px-3 py-2">
          <a href="/" className="text-white">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};
