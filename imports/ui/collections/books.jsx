import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { _ } from 'meteor/underscore';

Meteor.methods({
  // ------------------------------------------------------------------------
  // 'book.remove': function (book) {
  //   check(book._id, String);
  //   // don't allow delete if not admin
  //   if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'myWonderfulTenant')) {
  //     throw new Meteor.Error('Not Authorized', 'Not Authorized.');
  //   }
  //   // check roles and login credentials here
  //   return Book.remove(book._id);
  // },
  // ------------------------------------------------------------------------
  'updateBook' : function (book) {
    check(book.Author, String);
    check(book.title, String);
    check(book.ISBN, String);
    check(book.Format, String);
    check(book.Pages, String);
    check(book.Publisher, String);
    check(book.genre, Match.Maybe(String)); // genre not required can be null
    // check roles and login credentials here
    return Book.update(book._id, {
      $set: {
        Author: book.Author,
        Title: book.title,
        ISBN: book.ISBN,
        Format: book.Format,
        Pages: book.Pages,
        Publisher: book.Publisher,
        genre: book.genre,
      },
    });
  },
  // ------------------------------------------------------------------------
  'addBook' : function (book) {
    // check(book.Author, String);
    // check(book.title, String);
    // check(book.ISBN, String);
    // check(book.Format, String);
    // check(book.Pages, String);
    // check(book.Publisher, String);
    // check(book.genre, Match.Maybe(String)); // genre not required can be null
    // check for roles and credentials here
    return Book.insert({
      Author: book.Author,
      Title: book.title,
      ISBN: book.ISBN,
      Format: book.Format,
      Pages: book.Pages,
      Publisher: book.Publisher,
      genre: book.genre,
    });
  },
});

export const Book = new Mongo.Collection('book'); // eslint-disable-line import/prefer-default-export
