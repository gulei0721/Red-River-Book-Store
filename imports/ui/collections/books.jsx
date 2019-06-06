import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { _ } from 'meteor/underscore';

Meteor.methods({
  // ------------------------------------------------------------------------
  'removeBook': function (book) {
    return Book.remove(book._id);
  },
  // ------------------------------------------------------------------------
  'updateBook' : function (book) {
    // check(book.Author, String);
    // check(book.title, String);
    // check(book.ISBN, String);
    // check(book.Format, String);
    // check(book.Pages, String);
    // check(book.Publisher, String);
    // check(book.genre, Match.Maybe(String)); // genre not required can be null
    return Book.update(book._id, {
      $set: {
        Author: book.Author,
        Title: book.Title,
        ISBN: book.ISBN,
        Format: book.Format,
        Pages: book.Pages,
        Publisher: book.Publisher,
        genre: book.Genre
      },
    });
  },
  // ------------------------------------------------------------------------
  'addBook' : function (book) {
    return Book.insert({
      Author: book.Author,
      Title: book.Title,
      ISBN: book.ISBN,
      Format: book.Format,
      Pages: book.Pages,
      Publisher: book.Publisher,
      genre: book.Genre
    });
  },
});

export const Book = new Mongo.Collection('book'); // eslint-disable-line import/prefer-default-export
