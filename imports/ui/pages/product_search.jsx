import React from 'react';
import { NavLink } from 'react-router-dom';

function detail() {
  return [
      { id: 1, name: 'Forks Over Knives: Flavor!', img: '/img/product.jpg', price: '$15.00', link: '/Books/Product_search' },
      { id: 2, name: 'Forks Over Knives: Flavor!', img: '/img/product.jpg', price: '$10.00', link: '/Books/Product_search' },
      { id: 3, name: 'Forks Over Knives: Flavor!', img: '/img/product.jpg', price: '$18.00', link: '/Books/Product_search' },
      { id: 4, name: 'Forks Over Knives: Flavor!', img: '/img/product.jpg', price: '$20.00', link: '/Books/Product_details' },
  ];
}


function ProductSearch() {
  return (
    <div class='ProductSearch'>
      <p>
        <NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/">Home</NavLink> > <NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/Books">Books</NavLink> > Search Result
      </p>
      <h2> 4 Results for search </h2>
      <div class='sort_search'>
        <p>Sorted by : &nbsp;
          <select>
            <option value="Price: Low to High" selected="selected">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Newest Arrivals">Newest Arrivals</option>
          </select>
        </p>
      </div>
      <div class='search-container'>
        {detail().map((item) => {
          return (
            <div className="search-product">
              <img class='search-product-detail-image' src={item.img} alt="" />
              <h3><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to={item.link}>{item.name}</NavLink></h3>
              <p>{item.price}</p>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default ProductSearch;
