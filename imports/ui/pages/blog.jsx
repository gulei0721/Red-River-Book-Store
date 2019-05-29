import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Pagination from "../components/pagination.jsx";


export default class Blog extends Component {

  constructor(props){
    super(props)
    this.state = {
      value: 'time',
    }
  }

  change(event) {
    if(event.target.value == 'title') {
      this.setState({
        value : 'title',
      })
    }
    else if(event.target.value == 'time') {
      this.setState({
      value : 'time'
      })
    }
    console.log(event.target.value);
  }

  sortedbytime = [
    {_id: 1, date: 'May 05, 2019, 9:10 am', title: 'Fathers Day-My Father Before Me', content: 'An award-winning poet offers a multi-generational portrait of an American family - weaving together the lives of his ancestors, his parents, and his own coming of age in the 60s and 70s in the wake of his father抯 suicide, in this superbly written memoir.'},
    {_id: 2, date: 'May 02, 2019, 10:02 am', title: 'On Our Radar', content: "\"On Our Radar\" is a monthly 49th Shelf series featuring books with buzz worth sharing. We bring you links to features and reviews about great new books in a multitude of genres from all around the Internet and elsewhere."},
    {_id: 3, date: 'May 01, 2019, 3:40 pm', title: 'Reading Beyond Earth Day', content: 'At a time when bird species are disappearing rapidly, the poignant beauty of Robert Bateman\'s paintings is more urgent than ever. It reminds us why Bateman was compelled to study and paint his subjects and why we must work to secure their futures.'},
    {_id: 4, date: 'April 05, 2019, 9:10 am', title: 'Walters Rules YA Fiction', content: 'Twice a month, we invite an educator to share their perspective on essential books for your classroom. To apply to become a contributor, please send us an email!'},
    {_id: 5, date: 'March 18, 2019, 9:20 am', title: 'Spark Inquiry and Design Thinking', content: 'This year, students in the library at my school have been focused on using design thinking as a framework for inquiry and STEAM projects. The design thinking process takes the learner through five non-linear stages: empathize (to understand the user or who we need to solve a problem for), define (to narrow down the problem we want to solve), ideate (to brainstorm solutions), prototype (to create a model or plan), and test (to determine if the solution works).'},
    {_id: 6, date: 'March 05, 2019, 3:20 pm', title: 'Stories of Second Chances', content: 'Katherine Koller, who follows her award-winning Art Lessons with Winning Chance, shares other story collections about second chances, and the even the one after that.'},
    {_id: 7, date: 'February 12, 2019, 8:30 am', title: 'Mind-Bending Canadian Comics You Need Read', content: 'New motherhood is a kaleidoscopic wonderland in Shea Proulx\'s Alice at Naptime, a dreamy exploration of art and inspiration梐nd a truly "psychedelic" work of literature, like the other other books that Proulx includes in this recommended reading list.'},
    {_id: 8, date: 'January 20, 2019, 11:15 am', title: '11 Books that Write the World', content: 'Books can take you places, and sometimes those places aren\'t even metaphorical. Travel to Spain, New Mexico, Mozambique, Vietnam, Italy, India, Goa, Israel, Lebanon, Lithuania, and Nepal through the pages of these remarkable works of fiction.'},
    {_id: 9, date: 'December 21, 2018, 1:15 pm', title: 'War/Torn Identities', content: 'Hasan Namir was born in Iraq in 1987. He is the award-winning author of God in Pink, which won the Lambda Literary Award for Best Gay Fiction and was chosen as one of the Top 100 Books of 2015 by The Globe and Mail.'},
    {_id: 10, date: 'November 21, 2018, 1:15 pm', title: 'The Short Story Has No Limits', content: 'The books on this list serve to demonstrate that the short story has no limits, that it can take its readers anywhere and everywhere, and that reducing the form to any single definition is as foolish as it is futile. With short fiction, there\'s a story (or a book of them!) for every kind of reader, and you\'re sure to find something that hooks you right here.'},
    {_id: 11, date: 'November 19, 2018, 1:30 pm', title: 'Downton Abbey, ABBA\'s Greatest Hits, Lena Dunham\'s Girls, and More', content: 'There\'s nothing like a great hook or review, in which a book is compared to a popular movie or bestselling novel, to instantly make readers know that that they\'ve found their next read. Here are some of the best comparisons we\'ve seen for a while.'},
    {_id: 12, date: 'November 10, 2018, 9:15 pm', title: 'Resilience, Social Justice, and Race: Reviewing Jael Ealey Richardson\'s The Stone Thrower', content: 't can be very difficult to tell two stories in one book, especially in a work of nonfiction, but this is something Jael Richardson does  masterfully in her debut book The Stone Thrower. In this beautifully written memoir, Jael sets out on a path of discovery to find out how her father, football legend Chuck Ealey Jr., became one of the best quarterbacks in history and why he chose to end his illustrious career. While conducting this exploration of her father抯 life, she also explores her own life and what it was like to grow up as a young Black woman in Canada. Even though this book is a tale of two stories, there are common themes that feature prominently in both. Resilience, true grit, and determination are key components of this book and they are also traits that teachers attempt to instill in their students; which is why it is such an excellent resource and educational tool in multiple curricular areas. Physical Education, History, English, and Global Studies courses could all use this book as it covers the sport of football, provides historical context of the civil rights movement, and looks at race and racism as well as social justice and equity in a way that is understandable and relatable to teenagers.'},
  ];

  sortedbytitle = [
    {_id: 1, date: 'January 20, 2019, 11:15 am', title: '11 Books that Write the World', content: 'Books can take you places, and sometimes those places aren\'t even metaphorical. Travel to Spain, New Mexico, Mozambique, Vietnam, Italy, India, Goa, Israel, Lebanon, Lithuania, and Nepal through the pages of these remarkable works of fiction.'},
    {_id: 2, date: 'November 19, 2018, 1:30 pm', title: 'Downton Abbey, ABBA\'s Greatest Hits, Lena Dunham\'s Girls, and More', content: 'There\'s nothing like a great hook or review, in which a book is compared to a popular movie or bestselling novel, to instantly make readers know that that they\'ve found their next read. Here are some of the best comparisons we\'ve seen for a while.'},
    {_id: 3, date: 'May 05, 2019, 9:10 am', title: 'Fathers Day-My Father Before Me', content: 'An award-winning poet offers a multi-generational portrait of an American family - weaving together the lives of his ancestors, his parents, and his own coming of age in the 60s and 70s in the wake of his father抯 suicide, in this superbly written memoir.'},
    {_id: 4, date: 'February 12, 2019, 8:30 am', title: 'Mind-Bending Canadian Comics You Need Read', content: 'New motherhood is a kaleidoscopic wonderland in Shea Proulx\'s Alice at Naptime, a dreamy exploration of art and inspiration梐nd a truly "psychedelic" work of literature, like the other other books that Proulx includes in this recommended reading list.'},
    {_id: 5, date: 'May 02, 2019, 10:02 am', title: 'On Our Radar', content: "\"On Our Radar\" is a monthly 49th Shelf series featuring books with buzz worth sharing. We bring you links to features and reviews about great new books in a multitude of genres from all around the Internet and elsewhere."},
    {_id: 6, date: 'May 01, 2019, 3:40 pm', title: 'Reading Beyond Earth Day', content: 'At a time when bird species are disappearing rapidly, the poignant beauty of Robert Bateman\'s paintings is more urgent than ever. It reminds us why Bateman was compelled to study and paint his subjects and why we must work to secure their futures.'},
    {_id: 7, date: 'November 10, 2018, 9:15 pm', title: 'Resilience, Social Justice, and Race: Reviewing Jael Ealey Richardson\'s The Stone Thrower', content: 't can be very difficult to tell two stories in one book, especially in a work of nonfiction, but this is something Jael Richardson does  masterfully in her debut book The Stone Thrower. In this beautifully written memoir, Jael sets out on a path of discovery to find out how her father, football legend Chuck Ealey Jr., became one of the best quarterbacks in history and why he chose to end his illustrious career. While conducting this exploration of her father抯 life, she also explores her own life and what it was like to grow up as a young Black woman in Canada. Even though this book is a tale of two stories, there are common themes that feature prominently in both. Resilience, true grit, and determination are key components of this book and they are also traits that teachers attempt to instill in their students; which is why it is such an excellent resource and educational tool in multiple curricular areas. Physical Education, History, English, and Global Studies courses could all use this book as it covers the sport of football, provides historical context of the civil rights movement, and looks at race and racism as well as social justice and equity in a way that is understandable and relatable to teenagers.'},
    {_id: 8, date: 'March 18, 2019, 9:20 am', title: 'Spark Inquiry and Design Thinking', content: 'This year, students in the library at my school have been focused on using design thinking as a framework for inquiry and STEAM projects. The design thinking process takes the learner through five non-linear stages: empathize (to understand the user or who we need to solve a problem for), define (to narrow down the problem we want to solve), ideate (to brainstorm solutions), prototype (to create a model or plan), and test (to determine if the solution works).'},
    {_id: 9, date: 'March 05, 2019, 3:20 pm', title: 'Stories of Second Chances', content: 'Katherine Koller, who follows her award-winning Art Lessons with Winning Chance, shares other story collections about second chances, and the even the one after that.'},
    {_id: 10, date: 'November 21, 2018, 1:15 pm', title: 'The Short Story Has No Limits', content: 'The books on this list serve to demonstrate that the short story has no limits, that it can take its readers anywhere and everywhere, and that reducing the form to any single definition is as foolish as it is futile. With short fiction, there\'s a story (or a book of them!) for every kind of reader, and you\'re sure to find something that hooks you right here.'},
    {_id: 11, date: 'April 05, 2019, 9:10 am', title: 'Walters Rules YA Fiction', content: 'Twice a month, we invite an educator to share their perspective on essential books for your classroom. To apply to become a contributor, please send us an email!'},
    {_id: 12, date: 'December 21, 2018, 1:15 pm', title: 'War/Torn Identities', content: 'Hasan Namir was born in Iraq in 1987. He is the award-winning author of God in Pink, which won the Lambda Literary Award for Best Gay Fiction and was chosen as one of the Top 100 Books of 2015 by The Globe and Mail.'},
  ];

  // sortOption = this.sortedbytime;

  sortBlog() {
    if(this.state.value == 'title') {
      return(
        this.sortedbytitle.map((blog) =>
          <div className='posts'>
            <h2 className='postheader'>{blog.title}</h2>
            <p className='postdate'>{blog.date}</p>
            <p className='postcontent'>{blog.content}</p>
          </div>
        )
      );
    }
    else {
      return(
        this.sortedbytime.map((blog) =>
          <div className='posts'>
            <h2 className='postheader'>{blog.title}</h2>
            <p className='postdate'>{blog.date}</p>
            <p className='postcontent'>{blog.content}</p>
          </div>
        )
      );
    }
  }

  render() {
    return (
      <div className='Blog'>
        <p><NavLink style={{ textDecoration: 'none' }} activeClassName="none" to="/">Home</NavLink> > Blog</p>
        <div class='blog-container'>
          <h1 className='pageHeader'>Blog</h1>
          <div className='sortby'>
            <p class ='sort'>Sorted by: </p>
            <select id='sortbox' onChange={this.change.bind(this)} value={this.state.value}>
              <option value="time">Most Recent</option>
              <option value="title">Title</option>
            </select>
          </div>
          <div id='blogcontainer'>
            {this.sortBlog()}
          </div>
          <article>
            <Pagination config = {{
              pageCurr:1,
              totalPage:5,
              paging(obj){
                console.log(obj)
            }
            }}></Pagination>
          </article>
        </div>
      </div>
    );
  }
}