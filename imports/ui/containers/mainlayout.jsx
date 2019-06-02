import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/header.jsx';
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import Contact from '../pages/contact.jsx';
import Blog from '../pages/blog.jsx';
import Footer from '../components/footer.jsx';
import Genres from '../pages/product_genres.jsx';
import ProductDetails from '../pages/product_details.jsx';
import ProductSearch from '../pages/product_search.jsx';
import FileReader from '../pages/managedata.jsx';



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
              <Route exact path = '/Books' component={Genres} />
              <Route exact path = '/Books/Product_details' component={ProductDetails} />
              <Route exact path = '/Books/Product_search' component={ProductSearch} />
              <Route exact path = '/manage' component={FileReader} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}