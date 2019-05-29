import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <div id='heading'>
          <div class='heading_title'>
            <h1> <NavLink activeClassName="none" exact to="/">Red River Book Store</NavLink></h1>
          </div>
          <div class='heading_search'>
            <div class="search bar">
              <form>
                <input type="text" placeholder="Search" />
                <select>
                  <option value="All Category" selected="selected">All Category</option>
                  <option value="Books">Books</option>
                  <option value="Comics ">Comics</option>
                  <option value="Musics">Musics</option>
                  <option value="Movies">Movies</option>
                  <option value="Video Games">Video Games</option>
                  <option value="MISC">MiSC</option>
                </select>
                <button type="submit"></button>
              </form>
            </div>
          </div>
        </div>
        <div className='topnav'>
          <ul>
            <li class='nav-list'>
              <div class="nav_dropdown">
                <a href="#" class="dropbtn">Browse</a>
                <div class="dropdown-content">
                  <a class='a-b' href="#">Books
                    <ul class='ul-b'>
                      <li class='li-b'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/Books">All Books</NavLink></li>
                      <li class='li-b'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" >Fiction</NavLink></li>
                      <li class='li-b'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" >Nonfiction</NavLink></li>
                      <li class='li-b'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" >Children</NavLink></li>
                    </ul>
                  </a>
                  <a class='a-b' href="#">Comics
                    <ul class='ul-b'>
                      <li class='li-b'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" >All Comics</NavLink></li>
                      <li class='li-b'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" >Children</NavLink></li>
                    </ul>
                  </a>
                  <a href="#">Musics</a>
                  <a href="#">Movies</a>
                  <a href="#">Video Games</a>
                  <a href="#">MISC</a>
                </div>
              </div>
            </li>
            <li class='nav-list'><NavLink style={{ textDecoration: 'none' }} activeClassName="active" to="/blog">Blog</NavLink></li>
            <li class='nav-list'><NavLink style={{ textDecoration: 'none' }} activeClassName="active" to="/about">About</NavLink></li>
            <li class='nav-list'><NavLink style={{ textDecoration: 'none' }} activeClassName="active" to="/contact">Contact</NavLink></li>

          </ul>
        </div>
      </header>
    );
  }
}