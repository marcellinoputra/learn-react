import React from 'react';
import { Navigate, useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>

      <button onClick={() => navigate('/contact')}>
        Pindah Ke Contact
      </button>
      <button onClick={() => navigate('/about')}>Replace About</button>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(+1)}>Go Forward</button>
      <button onClick={() => navigate('/blog/1')}>Blog 1</button>
    </div>
  );
}
