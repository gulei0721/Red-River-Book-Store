import React from 'react';
import { NavLink } from 'react-router-dom';

function Blog() {
  return (
    <div className='Blog'>
    <p><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/">Home</NavLink> >  Blog</p> 
      <h1>Insert Blog Here</h1>
    </div>
  );
}

export default Blog;