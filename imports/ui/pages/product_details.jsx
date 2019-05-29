import React from 'react';
import { NavLink } from 'react-router-dom';

function bookDetail() {
  return [
    {
      id: 1, name: 'Forks Over Knives: Flavor!', description: 'Delicious, Whole- Food, Plant - Based Recipes to Cook Every Day', Publisher: 'Harper Wave',
      Author: 'Darshana Thacker', ISBN: 12345678, price: '$20.00', picture: '/img/product.jpg'},
  ];
}

function ProductDetails() {
  return (
    <div class='ProductDetails'>
      <p>
        <NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/">Home</NavLink> > <NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/Books">Books</NavLink> > Product Details
      </p>
      <div className="product">
        <div className="product-image">
          {bookDetail().map((item2) => {
            return (
              <div>
                <img src={item2.picture} />
                <br />
                <h2>Product Information</h2>
                <p>Publisher: {item2.Publisher} <br />
                  Author: {item2.Author} <br />
                  ISBN: {item2.ISBN}
                </p>
              </div>
            )
          })}
        </div>
        <div className="product-details">
          <div>
            {bookDetail().map((item1) => {
              return (
                <div>
                  <h1>{item1.name}</h1>
                  <h3>{item1.description}</h3>
                  <p> by {item1.Author}
                    <br /> Hardcover
                    <span> | </span>
                    CDN {item1.price}
                  </p>
                </div >
              )
            })}
            <h5> 2 more Same Products: <NavLink activeClassName="none" to="/Books/Product_search">See all</NavLink> </h5>
            <br />
            <p className="description"> The first four-color Forks Over Knives cookbook: head chef Darshana Thacker offers 150 delicious, all-new, easy-to-prepare whole-food, plant-based recipes for internationally inspired meals.
              <br/>
              The 2011 documentary Forks Over Knives ignited a revolution, empowering people to live healthier and happier lives. The film revealed the indisputable link between the average American diet-heavy in meat, dairy, and
              refined foods and heart disease, stroke, cancer, and diabetes. It also showed how, by focusing on a whole-food, plant-based diet, these chronic illnesses could not only be prevented, but sometimes even reversed. Through its meal plans, website,
              and New York Times bestselling cookbooks, Forks Over Knives has proven that a diet based on fruits, vegetables, tubers, whole grains, and legumes isnít just good for you, it tastes good too.
              <br />
              Now, Forks Over Knives shows you how to take your whole-food kitchen to the next level, adding international flair to every meal. Forks Over Knives: Flavor! showcases dozens of recipesóall exclusive to this bookóaccompanied by over eighty gorgeous
              photographs that capture the flavors of cuisines from around the world, including:
              <br />
              <ul>
                <li> Black Bean Chilaquiles with Fire-Roasted Tomatillo Salsa </li>
                <li>Moo Shu Vegetable Wraps with Hoisin Sauce </li>
                <li>Polenta Pizza with Summer Garden Vegetables </li>
                <li> Persian Yellow Split Pea and Eggplant Stew </li>
                <li>Thai Red Curry Noodles with Stir-Fry Vegetables </li>
                <li> German Marble Cake with Raspberries </li>
              </ul>
              Sure to please health-conscious eaters and the most discriminating palates, these oil-free, plant-based riffs on culinary favorites teach readers new techniques and introduce them to heady spice blends and a wide range of ethnic
              traditions from around the globe. Convenient, affordable, and wildly creative, Forks Over Knives: Flavor! is a must-have for the health-conscious cook.
            </p>
          </div>
        </div>
      </div>
      <div className="author">
        <h3> About Author </h3>
        <p> Darshana Thacker is chef and culinary project manager for Forks Over Knives and a graduate of the Natural Gourmet Institute in New York City. Darshana grew up cooking alongside her mother and aunts in her native India,
            and today, draws inspiration from cuisines from around the world. Sheís known for her hearty and distinctly flavorful creations, which draw inspiration from a wide range of ethnic traditions. Chef Darshana was the recipe
            author of Forks Over Knives Family and a lead recipe contributor for the New York Times bestseller The Forks Over Knives Plan. Her recipes have been published in The Prevent and Reverse Heart Disease Cookbook, Forks Over
            KnivesóThe Cookbook, Forks Over Knives: The Plant-Based Way to Health, and LA Yoga magazine online. Chef Darshana has catered numerous events, served as a private chef and regularly holds individual and group cooking classes.
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;