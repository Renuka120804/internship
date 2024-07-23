// src/components/MovieDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Movie 1', description: 'Description 1', image: 'image1.jpg' },
  { id: 2, title: 'Movie 2', description: 'Description 2', image: 'image2.jpg' },
  // Add more movie objects here
];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));
  const navigate = useNavigate();

  const handleBookSeat = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <button onClick={handleBookSeat}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;

