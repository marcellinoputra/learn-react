import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Post from '../Components/Post';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    // console.log('ada data');
    axios({
      method: 'GET',
      url: `${baseUrl}`,
    }).then((result) => {
      setPosts(result.data);
    });
  };

  return (
    <>
      <div>
        {posts.length > 0 ? (
          posts.map((post, i) => {
            return (
              <div key={i}>
                <Post
                  title={post.title}
                  body={post.body}
                  userId={post.userId}
                  id={post.id}
                />
              </div>
            );
          })
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    </>
  );
}
