import React from 'react';

export default function Photo(props) {
  return (
    <div>
      <p>{props.albumId}</p>
      <p>{props.id}</p>
      <p>{props.title}</p>
      <p>{props.url}</p>
      <p>{props.thumbnailUrl}</p>
    </div>
  );
}
