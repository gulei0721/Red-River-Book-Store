import React from 'react';
import { NavLink } from 'react-router-dom';
import { Book } from '../collections/books.jsx'

export default class Admin extends React.Component {
  render() {
    return (
      <div className='Admin'>
            <div className='dbcontainer'>
            <h2>Inventory</h2>
            <li class='database-list'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/admin/book">Books</NavLink></li>
            <li class='database-list'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/admin">Comics</NavLink></li>
            <li class='database-list'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/admin">Movies</NavLink></li>
            <li class='database-list'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/admin">Music</NavLink></li>
            <li class='database-list'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/admin">Video Games</NavLink></li>
            </div>

            <div className='editfeatures'>
            <h2>Features</h2>
            <li class='database-list'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/admin">About</NavLink></li>
            <li class='database-list'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/admin">Contact</NavLink></li>
            </div>
      </div>
    );
  }
}