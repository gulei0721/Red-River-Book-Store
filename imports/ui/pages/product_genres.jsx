import React from 'react';
import { NavLink } from 'react-router-dom';

function mostPolular() {
  return [
    { _id: 1, name: 'BOSH!: Simple Recipes', avatar: '/img/c_02.png', price : '$31.05', link: '/Books' },
    { _id: 2, name: 'Thug Kitchen 101', avatar: '/img/c_03.png', price : '$20.28', link: '/Books' },
    { _id: 3, name: 'Forks Over Knives: Flavor!', avatar: '/img/c_01.png', price : '$33.29', link: '/Books/Product_details' },
  ];
}

function genersLists() {
  return [
    {name1: 'SCI-FI', name2: 'CANADIANA', name3: 'WAR', name4: 'OCCULT', name5: 'ECONOMICS' },
    {name1: 'ARTS', name2: 'SPORTS', name3: 'POLITICS', name4: 'CHILDREN', name5: 'HEALTH' },
    {name1: 'HORROR', name2: 'MYSTERY', name3: 'COOKING', name4: 'FICTION', name5: 'MYSTERY' },
    {name1: 'MUSIC', name2: 'HISTORY', name3: 'CHILDCARE', name4: 'BIOGRAPHY', name5: 'HUMOUR' },
  ];
}

function Genres() {
  return (
    <div class='Genres'>
      <p><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/">Home</NavLink> > Books</p>
      <h1>Genres</h1>
      <div class='genres-container'>
        <table>
          {genersLists().map((list) => {
            return(
              <tr>
                <td><NavLink style={{ textDecoration: 'none' }} activeClassName="none" >{list.name1}</NavLink></td>
                <td><NavLink style={{ textDecoration: 'none' }} activeClassName="none" >{list.name2}</NavLink></td>
                <td><NavLink style={{ textDecoration: 'none' }} activeClassName="none" >{list.name3}</NavLink></td>
                <td><NavLink style={{ textDecoration: 'none' }} activeClassName="none" >{list.name4}</NavLink></td>
                <td><NavLink style={{ textDecoration: 'none' }} activeClassName="none" >{list.name5}</NavLink></td>
              </tr>
            )
          })}
        </table>
      </div>
      <div class='mostpolular-container'>
        <div class='aaa'>
          <h2>Most Popular</h2>
        </div>
        <div class="asd">
          {mostPolular().map((item) => {
            return (
              <div class="mostpolular">
                <img class='product_img' src={item.avatar} alt=""/>
                <h3 class='product_name'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to={item.link}>{item.name}</NavLink></h3>
                <p>{item.price}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Genres;