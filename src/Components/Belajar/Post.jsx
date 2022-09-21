import React from 'react';

export default function Post(props) {

  // const hasilPosts = () => {
  //   console.log('disini ada console.log');
  //   axios({
  //     method: 'GET',
  //     url: `${baseUrl}`,
  //   }).then((result) => {});
  // };

  return (
    <div>
      <h2>{props.userId}</h2>
      <h2>{props.id}</h2>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
}
