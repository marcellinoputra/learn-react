import React, { useState } from 'react';

export default function FormInput() {
  const [nama, setNama] = useState('');
  const [umur, setUmur] = useState(Number);
  const [asal, setAsal] = useState('');

  return (
    <div>
      <div>
        <p>Nama Saya: {nama}</p>
        <input
          type="Text"
          name="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <div>
        <p>Umur Saya: {umur}</p>
        <input
          type="Number"
          name="umur"
          value={umur}
          onChange={(e) => setUmur(e.target.value)}
        />
      </div>
      <div>
        <p>Asal Saya: {asal}</p>
        <input
          type="Text"
          name="asal"
          value={asal}
          onChange={(e) => setAsal(e.target.value)}
        />
      </div>
    </div>
  );
}
