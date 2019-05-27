import React, {Component} from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div id='footer'>
          <ul class='footer-Nav'>
            <li class='footer_Nav'>Home</li>
            <li class='footer_Nav'>Blog</li>
            <li class='footer_Nav'>Contact</li>
            <li class='footer_Nav'>About</li>
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