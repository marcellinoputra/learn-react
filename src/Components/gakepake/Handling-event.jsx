import React from 'react';

export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('ini udah di klik');
  }

  return (
    <div>
      <h1>Contoh Handling Event</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
