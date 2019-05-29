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
    {name1: 'Fiction', name2: 'Historical Fiction', name3: 'Literature & Classics', name4: 'Erotica', name5: 'Mystery & Detective' },
    {name1: 'Western', name2: 'Horror', name3: 'Science Fiction', name4: 'Fantasy', name5: 'True Crime' },
    {name1: 'Young Adult Fiction', name2: 'Young Adult Non-fiction', name3: 'Humour', name4: 'Art', name5: 'Photography' },
    {name1: 'Crafts', name2: 'Music', name3: 'Canadiana', name4: 'Winnipeg', name5: 'Prairie Provinces' },
    {name1: 'Religion', name2: 'Philosophy', name3: 'Film', name4: 'Psychology', name5: 'New Age' },
    {name1: 'Paranormal', name2: 'Indigenous', name3: 'Gender & Sex', name4: 'Politics & History', name5: 'War' },
    {name1: 'Cooking', name2: 'Health', name3: 'Child Development', name4: 'Economics & Business', name5: 'Sports' },
    {name1: 'Biography', name2: 'Science', name3: 'Gardening', name4: 'Animals', name5: 'Mathematics' },
    {name1: 'Biology', name2: 'Chemistry', name3: 'Astronomy', name4: 'Geology', name5: 'Ecology' },
    {name1: 'Physics', name2: 'Computers', name3: 'Electronics', name4: 'Engineering', name5: 'Home Repairs' },
    {name1: 'Cars, Trains, Planes', name2: 'Magazines', name3: 'Miscellaneous', name4: '', name5: '' },
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