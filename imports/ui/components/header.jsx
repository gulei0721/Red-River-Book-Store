import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

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
                      <li class='li-b'>All Books</li>
                      <li class='li-b'>Fiction</li>
                      <li class='li-b'>Nonfiction</li>
                      <li class='li-b'>Children</li>
                    </ul>
                  </a>
                  <a class='a-b' href="#">Comics
                    <ul class='ul-b'>
                      <li class='li-b'>All Comics</li>
                      <li class='li-b'>Children</li>
                    </ul>
                  </a>
                  <a href="#">Musics</a>
                  <a href="#">Movies</a>
                  <a href="#">Video Games</a>
                  <a href="#">MISC</a>
                </div>
              </div>
            </li>
            {/* <li class='nav-list'>Browse
              <ul class='ul-a'>
                <li class='li-b'>Books
                  <ul class='ul-b'>
                    <li>All Books</li>
                    <li>Fiction</li>
                    <li>Nonfiction</li>
                    <li>Children</li>
                  </ul>
                </li>
                <li class='li-b'>Comics
                  <ul class='ul-b'>
                  <li>All Comics</li>
                  <li>Children</li>
                  </ul>
                </li>
                <li class='li-b'>Musics</li>
                <li class='li-b'>Movies</li>
                <li class='li-b'>Video Games</li>
                <li class='li-b'>MISC</li>
              </ul>
            </li> */}

                {/* <li class='nav-list'>Browse</li> */}
              {/* <li class='nav-list'><DropdownButton id="dropdown-maincategory" title="Browse">
                      <p><Dropdown.Item href="#/action-1">Books</Dropdown.Item></p>
                      <p><Dropdown.Item href="#/action-2">Comics</Dropdown.Item></p>
                      <p><Dropdown.Item href="#/action-3">Miscellaneous</Dropdown.Item></p>
              </DropdownButton></li> */}
                <li class='nav-list'><NavLink style={{ textDecoration: 'none' }} activeClassName="active" to="/blog">Blog</NavLink></li>
                <li class='nav-list'><NavLink style={{ textDecoration: 'none' }} activeClassName="active" to="/about">About</NavLink></li>
                <li class='nav-list'><NavLink style={{ textDecoration: 'none' }} activeClassName="active" to="/contact">Contact</NavLink></li>

          </ul>
        </div>
      </header>
    );
  }
}