import React, { Component } from "react";
import Papa from 'papaparse';
import { Meteor } from 'meteor/meteor';
import { Book } from '../collections/books.jsx'
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import {ToastsContainer, ToastsStore} from 'react-toasts';

bookinfo = [];

export default class BookManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csvfile: undefined,
      printContent: undefined,
      readData: undefined,
      oneBook: undefined,
      deletedDate: undefined,
      isLoading: true,
      author: "",
      title: "",
      isbn: "",
      format: "",
      pages: "",
      publisher: "",
      genre: "",
      ifsubmit: false,
      style_tb : {display:"block"},
      style_form : {display:"none"}
    };
    this.updateData = this.updateData.bind(this);
    // this.printInfo = this.printInfo.bind(this);
    this.printTable = this.printTable.bind(this);
  }

  //upload file eventhandler
  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
  };

  //convert csv/txt file to json style file
  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true
    });
  };

  updateData(info) {
    var data = info.data;
    bookinfo = data.slice(0,data.length-1);
    // console.log(bookinfo);
  }

  // printInfo() {
  //   this.setState({
  //     printContent: bookinfo
  //   })
  // }

  //insert function, add data from file to database
  addtoTable() {
    for(var i=0;i<bookinfo.length;i++){
      Meteor.call('addBook', bookinfo[i]);
    }
    ToastsStore.success("Successfully add to the database!",5000);
    this.printTable();
  }

  //delete function, delete one product from database
  deleteData(e) {
    this.setState({
      deletedDate: Book.find({"_id" : e.target.value}).fetch(),
      style_tb: { display: "none", }
    }, ()=>{
      Meteor.call('removeBook', this.state.deletedDate[0]);
      this.printTable();
      ToastsStore.success("Successfully delete item from the database!",5000);
    })
  }

  //onClick eventhandler, display form
  openEditFrom(e) {
    if (this.state.style_tb.display === "block") {
      this.setState({ style_tb: { display: "none", } })
    } else {
      this.setState({ style_tb: { display: "block", } })
    }
    // if (this.state.style_form.display === "block") {
    //   this.setState({ style_form: { display: "none", } })
    // } else {
      this.setState({ style_form: { display: "block", } })
    // }
    this.setState({
      oneBook: Book.find({"_id" : e.target.value}).fetch()
    })
  }

  //get all data from book table
  printTable() {
    this.setState({
      readData: Book.find({}).fetch()
    }, ()=>{
    })
    if (this.state.style_tb.display === "block") {
      this.setState({ style_tb: { display: "none", } })
    } else {
      this.setState({ style_tb: { display: "block", } })
    }

  }

  //display all data from uploaded file
  // printData() {
  //   if(this.state.printContent){
  //     return (
  //       <div>
  //         <ul>
  //           {this.state.printContent.map((contentinfo) =>
  //             <li>Author: {contentinfo.Author}</li>
  //           )}
  //         </ul>
  //       </div>
  //     );
  //   }
  // }

  CheckImgExists(imgurl) {
    var ImgObj = new Image(); //if img exist
    ImgObj.src = imgurl;
    if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
    return true;
    } else {
    return false;
    }
  }

  //display all data from book table
  readformTable() {
    if(this.state.readData) {
      return (
        <div>
          <table>
            <tbody>
              <tr>
                <td>Author</td><td>Title</td><td>ISBN</td><td>Format</td><td>Pages</td><td>Publisher</td><td>Genre</td>
              </tr>
              {Book.find({}).fetch().map((booksinfo) =>
                <tr>
                  { this.CheckImgExists("https://pictures.abebooks.com/isbn/"+booksinfo.ISBN+"-us-300.jpg")
                  ? <td><img src={"https://pictures.abebooks.com/isbn/"+booksinfo.ISBN+"-us-300.jpg"} /></td>
                  : <td><img src='/img/noImage.png' /></td>}
                  <td>{booksinfo.Author}</td>
                  <td>{booksinfo.Title}</td>
                  <td>{booksinfo.ISBN}</td>
                  <td>{booksinfo.Format}</td>
                  <td>{booksinfo.Pages}</td>
                  <td>{booksinfo.Publisher}</td>
                  <td>{booksinfo.Genre}</td>
                  <td><button value={booksinfo._id} onClick={this.openEditFrom.bind(this)} >Edit</button>
                  <button value={booksinfo._id} onClick={this.deleteData.bind(this)} >Delete</button></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )
    }
  }

  getData() {
    this.setState({
      readData: Book.find({}).fetch(),
      isLoading: false
    })
  }

  //update function, update all information from edited form
  editData(e) {
    e.preventDefault();
    if(this.state.author=='') {
      this.setState({
        author: this.state.oneBook[0].Author,
      })
    }
    if(this.state.title=='') {
      this.setState({
        title: this.state.oneBook[0].Title,
      })
    }
    if(this.state.isbn=='') {
      this.setState({
        isbn: this.state.oneBook[0].ISBN,
      })
    }
    if(this.state.format=='') {
      this.setState({
        format: this.state.oneBook[0].Format,
      })
    }
    if(this.state.pages=='') {
      this.setState({
        pages: this.state.oneBook[0].Pages,
      })
    }
    if(this.state.publisher=='') {
      this.setState({
        publisher: this.state.oneBook[0].Publisher,
      })
    }
    if(this.state.genre=='') {
        this.setState({
          genre: this.state.oneBook[0].Genre,
        })
    }
    this.setState({
      ifsubmit: true,
    }, ()=>{
      ToastsStore.success("Successfully update item to the database!",5000);
      // Meteor.call('updateBook', this.state.readData);
      Book.update(this.state.oneBook[0]._id, {
        $set: {
          Author: this.state.author,
          Title: this.state.title,
          ISBN: this.state.isbn,
          Format: this.state.format,
          Pages: this.state.pages,
          Publisher: this.state.publisher,
          Genre: this.state.genre
        },
      });
      this.printTable();
      // console.log(this.state.readData);
      ToastsStore.success("Successfully update item to the database!",5000);
      this.setState({
        author: "",
        title: "",
        isbn: "",
        format: "",
        pages: "",
        publisher: "",
        genre: "",
        style_form: { display: "none", }
      })
      return <Redirect to='/admin/book' />
    })
  }

  //set specific colunm information for edit form
  _changeValue(e) {
    e.preventDefault();
    switch(e.target.name) {
      case "Author":
        this.setState({
          author: e.target.value
        })
        break;
      case "Title":
        this.setState({
          title: e.target.value
        })
        break;
      case "ISBN":
        this.setState({
          isbn: e.target.value
        })
        break;
      case "Format":
        this.setState({
          format: e.target.value
        })
        break;
      case "Pages":
        this.setState({
          pages: e.target.value
        })
        break;
      case "Publisher":
        this.setState({
          publisher: e.target.value
        })
        break;
      case "Genre":
        this.setState({
          genre: e.target.value
        })
        break;
      default :
        break;
    }
  }

  // Form for editing one product information
  dataDetails() {
    if(this.state.oneBook) {
      // console.log(Book.find({}));
      return (
        <div>
          <form onSubmit={this.editData.bind(this)}>
            <p>Author: {this.state.oneBook[0].Author}</p>
            <input type="text" name="Author" value={this.state.author} onChange={this._changeValue.bind(this)} />
            <p>Title: {this.state.oneBook[0].Title} </p>
            <input type="text" name="Title" value={this.state.title} onChange={this._changeValue.bind(this)} />
            <p>ISBN: {this.state.oneBook[0].ISBN} </p>
            <input type="text" name="ISBN" value={this.state.isbn} onChange={this._changeValue.bind(this)} />
            <p>Format: {this.state.oneBook[0].Format} </p>
            <input type="text" name="Format" value={this.state.format} onChange={this._changeValue.bind(this)} />
            <p>Pages: {this.state.oneBook[0].Pages} </p>
            <input type="text" name="Pages" value={this.state.pages} onChange={this._changeValue.bind(this)} />
            <p>Pulisher: {this.state.oneBook[0].Pulisher} </p>
            <input type="text" name="Publisher" value={this.state.publisher} onChange={this._changeValue.bind(this)} />
            <p>Genre: {this.state.oneBook[0].Genre} </p>
            <input type="text" name="Genre" value={this.state.genre} onChange={this._changeValue.bind(this)} />
            <input type="submit" value='Submit'></input>
          </form>
      </div>
      )
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    // this.setState({
    //       readData: Book.find({}).fetch()
    //   }, ()=>{
      // console.log(this.state.readData);
      return (
        this.state.isLoading
        ? <div className="BookManage">
            <h3>Loading...</h3>
          </div>
        : <div className="BookManage">
          <h2>Import data file!</h2>
          <input
            className="csv-input"
            type="file"
            ref={input => {
              this.filesInput = input;
            }}
            name="file"
            placeholder={null}
            onChange={this.handleChange}
          />
            <ToastsContainer store={ToastsStore}/> {/* Alert container */}
            <button onClick={this.importCSV}>Upload File</button>
            {/* <button onClick={this.printInfo}>Show Info</button> */}
            <button onClick={this.addtoTable}>Add to table</button>
            <button onClick={this.printTable}>Show/Hide info</button>
          {/* <div>
            {this.printData()}
          </div> */}
          <div>
            <div className='dataTable' style={this.state.style_tb}>
              <h3>Data from Table</h3>
              {this.readformTable()}
            </div>
            <div className='dataDetails' style={this.state.style_form}>
              <h3>Data Details</h3>
              {this.dataDetails()}
            </div>
          </div>
        </div>
      );
    // })
  }
}