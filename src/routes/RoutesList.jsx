import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Search } from '../assets/components/Search';
import { Navbar } from '../assets/components/Navbar';
import { AllMovies } from '../assets/components/AllMovies';
import { DetailMovie } from '../assets/components/DetailMovie';
import { CarouselComponent } from '../assets/components/CarouselComponent';

export const RoutesList = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/popular-movies" element={<AllMovies />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
