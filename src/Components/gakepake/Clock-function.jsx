import React from 'react';

function Clock(props) {
  function tick() {
    <Clock date={new Date()} />;
  }
  setInterval(tick, 1000);
  return (
    <div>
      <h1>Mulai Belajar Jam</h1>
      <h2>{props.date?.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;
