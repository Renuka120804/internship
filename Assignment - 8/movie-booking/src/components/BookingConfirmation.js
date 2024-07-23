// src/components/BookingConfirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingConfirmation = () => {
  const { state } = useLocation();
  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div>
      <h1>Booking Confirmed</h1>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
    </div>
  );
};

export default BookingConfirmation;

