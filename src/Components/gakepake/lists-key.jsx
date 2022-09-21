import React from 'react';

export default function ListsAndKey(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()} value={numbers} />
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
