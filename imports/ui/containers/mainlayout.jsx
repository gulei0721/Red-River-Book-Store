import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/header.jsx';
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import Contact from '../pages/contact.jsx';
import Blog from '../pages/blog.jsx';
import Footer from '../components/footer.jsx';


export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path = '/blog' component={Blog} />
              <Route path = '/about' component={About} />
              <Route path = '/contact' component={Contact} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}