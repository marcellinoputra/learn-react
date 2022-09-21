import React0 from 'react';

function Stateless(props) {
  return (
    <div>
      <h3>Nama : {props.nama}</h3>
      <h3>Umur : {props.umur}</h3>
      <div>{props.hobi}</div>
      <h3>========================</h3>
    </div>
  );
}

export default Stateless;
