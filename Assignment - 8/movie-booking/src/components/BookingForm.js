// src/components/BookingForm.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/confirmation', { state: { ...form } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Mobile:</label>
        <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;

