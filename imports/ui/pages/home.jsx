import React from 'react';
import { NavLink } from 'react-router-dom';

function newArrival() {
  return [
    { _id: 1, name: 'Revengers', avatar: '/img/a_01.png', price : '$19.99', link: '' },
    { _id: 2, name: 'Game of Thrones: Season 7', avatar: '/img/b_01.png', price : '$30.99', link: '' },
    { _id: 3, name: 'Forks Over Knives: Flavor!', avatar: '/img/c_01.png', price : '$33.29', link: '/Books/Product_details' },
  ];
}

function recentPost() {
  return [
    {_id: 1, title: 'Game of Thrones: Season 7 Released', content: 'In Season 7, Daenerys Targaryen has finally set sail for Westeros with her armies, dragons and new Hand of the Queen, Tyrion Lannister. Jon Snow has been named King in the North after defeating Ramsay Bolton in the Battle of the Bastards and returning... '},
    {_id: 2, title: 'Reading Beyond Earth Day', content: "Birds, by Robert Bateman and Kathryn Dean. About the book: At a time when bird species are disappearing rapidly, the poignant beauty of Robert Bateman's paintings is more urgent than ever. It reminds us why Bateman was compelled to study and paint his subjects..."},
    {_id: 3, title: 'Python Everyday', content: 'Python is a programming language that lets you work more quickly and integrate your systems more effectively. Python is powerful... and fast; plays well with others; runs everywhere; is friendly & easy to learn; is Open.'},
  ];
}

function Home() {
  return (
    <div className='Home'>

      <div className="logo">
        <img className='logo_img' src="img/hole.png"/>
      </div>
      <section class='intro'>
        <p>We are a used Book Store in Winnipeg. We sells books, comics, DVDs, musics, games, and magazines. Also, we do trade in. Come and adventure more.</p>
      </section>
      <div>
        <div class="aaa">
          <h2>New Arrivals</h2>
        </div>
        <div class="asd">
          {newArrival().map((item) => {
            return (
              <div class="newArrival_container">
                <img class='product_img' src={item.avatar} alt=""/>
                <h3 class='product_name'><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to={item.link}>{item.name}</NavLink></h3>
                <p>{item.price}</p>
              </div>
            )
          })}
        </div>

        <div class="aaa">
          <h2>Recent Posts</h2>
        </div>
        <div class="asd">
          {recentPost().map((blog) => {
            return (
              <div class="textContainer">
                <h4>{blog.title}</h4>
                <div id="recentPost_content">
                <p>{blog.content}<button type="button" class="button-more">More</button></p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;