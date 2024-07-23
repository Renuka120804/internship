// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
};

export default App;


