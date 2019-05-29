import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div className='About'>
        <p><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/">Home</NavLink> > About</p>
        <div className='about-container'>
          <div id='about-container'>
            <h1 className='pageHeader'>About</h1>

            <h2 className='aboout-headers'>History of Red River BookStore</h2>
            <p className='article'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
              Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
              luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
            </p>
            <h2 className='aboout-headers'>Business</h2>
            <p className='article'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
              Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
              luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
            </p>

            <h2 className='aboout-headers'>Mission</h2>
            <p className='article'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
              Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
              luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
            </p>
          </div>
          <div id='picture-container'>
            <p><img className='aboutpic' src="img/about1.jpg"/></p>
            <p><img className='aboutpic' src="img/about2.jpg"/></p>
          </div>
        </div>
      </div>
    );
  }
}

// export default About;