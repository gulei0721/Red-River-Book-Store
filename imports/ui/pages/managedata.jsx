import React, { Component } from "react";
import Papa from 'papaparse';
import { Book } from '../collections/books.jsx'
import { NavLink } from 'react-router-dom';

bookinfo = [];
// abc = { Author: "Alvaro Mutis", Format: "Hardcover", Genre: "General Fiction", ISBN: "9780060166236", Pages: "312", Publisher: "HarperCollins", Title: "Maqroll" };

export default class FileReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csvfile: undefined,
      printContent: undefined
    };
    this.updateData = this.updateData.bind(this);
    this.printTable = this.printTable.bind(this);
  }

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
  };

  printTable() {
    this.setState({
      printContent: bookinfo
    })
  }

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true
    });
  };

  updateData(info) {
    var data = info.data;

    bookinfo = data;
    console.log(bookinfo);
  }

  addtoTable() {
    // addBook(bookinfo[0]);
    // console.log(bookinfo[0].Author);
    // if(bookinfo) {

      Meteor.call('addBook', bookinfo[0]);
    // }
    // else {
    //   console.log(bookinfo);
    // }
    // return Book.insert({
    //   Author: bookinfo[0].Author,
    //   Title: bookinfo[0].title,
    //   ISBN: bookinfo[0].ISBN,
    //   Format: bookinfo[0].Format,
    //   Pages: bookinfo[0].Pages,
    //   Publisher: bookinfo[0].Publisher,
    //   genre: bookinfo[0].genre,
    // });
  }


  printData() {
    if(this.state.printContent){
      return (
        this.state.printContent.map((contentinfo) =>
          <div>
            {/* <form onChange=""> */}
              <h3>Author: {contentinfo.Author}</h3>
              <input type="text" value={contentinfo.Author} />
              <h3>Title: {contentinfo.Title}</h3>
              <input type="text" value={contentinfo.Title} />
              <h3>ISBN:  {contentinfo.ISBN}</h3>
              <input type="text" value={contentinfo.ISBN} />
              <h3>Format:  {contentinfo.Format}</h3>
              <input type="text" value={contentinfo.Format} />
              <h3>Pages:  {contentinfo.Pages}</h3>
              <input type="text" value={contentinfo.Pages} />
              <h3>Publisher: {contentinfo.Publisher}</h3>
              <input type="text" value={contentinfo.Publisher} />
              <h3>Genre:  {contentinfo.Genre}</h3>
              <input type="text" value={contentinfo.Genre} />
              <button type="submit">update</button>
            {/* </form> */}
          </div>
        )
      );
    }
    else {
      // console.log(this.state.printContent);
      return(
        <div>
          <h3>Author: </h3>
          <h3>Title: </h3>
          <h3>ISBN:  </h3>
          <h3>Format:  </h3>
          <h3>Pages:  </h3>
          <h3>Publisher: </h3>
          <h3>Genre:  </h3>
        </div>
      )
    }
  }

  render() {
    //console.log(this.state.csvfile);
    return (
      <div className="FileReader">
        <h2>Import CSV File!</h2>
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
          <button onClick={this.importCSV}> Upload now!</button>
          <button onClick={this.printTable}>Show table</button>
          <button onClick={this.addtoTable}>Add to table</button>
        <div>
          {this.printData()}
        </div>
      </div>
    );
  }
}