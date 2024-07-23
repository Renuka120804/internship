// src/components/MoviesList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MoviesList.css';

const movies = [
  { id: 1, title: 'Movie 1', image: 'image1.jpg' },
  { id: 2, title: 'Movie 2', image: 'image2.jpg' },
  { id: 3, title: 'Movie 3', image: 'image3.jpg' },
  { id: 4, title: 'Movie 4', image: 'image4.jpg' },
];

const MoviesList = () => {
  return (
    <div className="container">
      <h1>Movie Booking</h1>
    <div className="movies-grid">
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <Link to={`/movies/${movie.id}`}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MoviesList;
