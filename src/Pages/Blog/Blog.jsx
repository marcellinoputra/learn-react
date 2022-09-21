import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export default function Blog() {
  let { id } = useParams();

  return (
    <div
      style={{
        paddingTop: '20px',
      }}
    >
      <div
        style={{
          paddingTop: '20px',
        }}
      >
        Blog
      </div>
      <div
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        id {id}
      </div>
      <div
        style={{
          float: 'left',
          width: '50px',
        }}
      >
        <NavLink
          to="/blog/1"
          style={{
            paddingRight: '20px',
          }}
        >
          blog1
        </NavLink>
        <NavLink
          to="/blog/2"
          style={{
            paddingRight: '20px',
          }}
        >
          blog2
        </NavLink>
        <NavLink to="/blog/3">blog3 </NavLink>
      </div>
    </div>
  );
}
