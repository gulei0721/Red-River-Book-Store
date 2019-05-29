import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div id='footer'>
          <ul class='footer-Nav'>
            <li class='footer_Nav'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" exact to="/">Home</NavLink></li>
            <li class='footer_Nav'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/blog">Blog</NavLink></li>
            <li class='footer_Nav'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/about">About</NavLink></li>
            <li class='footer_Nav'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/contact">Contact</NavLink></li>
            <li class='footer_Nav'>
              <ul class='footer-contact'>
                <li class='footer_contact'>Facebook</li>
                <li class='footer_contact'>Twitte</li>
                <li class='footer_contact'>Instagram</li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}