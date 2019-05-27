import React from 'react';
import { NavLink } from 'react-router-dom';

function Contact() {
  return (
    <div className='Contact'>
      <p><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/">Home</NavLink> > Contact</p>
      <div className="contact-container">
        <div id='contactinfo'>
          <h1 className='pageHeader'>Contact Us!</h1>
          <h3 className='contact'>Address </h3>
          <p>92 Arthur Street <br /> Winnipeg, MB <br /> Canada <br /> R3B 1H3</p>
          <h3 className='contact'> Phone </h3>
          <p>(204) 943-9788 </p>
          <h3 className='contact'> Email </h3>
          <p> rrbooks@mts.net </p>
          <h3 className='contact'> Business Hours </h3>
          <ul className="hours" >
            <li><span width='100px'> Monday:</span> Closed </li>
            <li><span> Tuesday:</span> 10:00AM - 5:00PM </li>
            <li> Wednesday: 10:00AM - 5:00PM </li>
            <li> Thursday: 10:00AM - 5:00PM </li>
            <li> Friday: 10:00AM - 5:00PM </li>
            <li> Saturday: 10:00AM - 5:00PM </li>
            <li> Sunday: 10:00AM - 5:00PM </li>
          </ul>
        </div>
        <div className="map-image">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2570.048168008347!2d-97.140999!3d49.897899!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea715c6963e003%3A0x7d1118977efef9c8!2s92+Arthur+St%2C+Winnipeg%2C+MB+R3B+1H7!5e0!3m2!1sen!2sca!4v1558716610586!5m2!1sen!2sca" ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;