import React,{ Component } from "react";
import { NavLink } from 'react-router-dom';
import Pagination from "../components/pagination.jsx";

function Blog() {
  return (
    <div className='Blog'>
      <p><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/">Home</NavLink> > Blog</p>
      <h1>Insert Blog Here</h1>
      <article>
        <Pagination config = {{
          pageCurr:1,
          totalPage:5,
          paging(obj){
            console.log(obj)
        }
        }}></Pagination>
      </article>
    </div>
  );
}

export default Blog;