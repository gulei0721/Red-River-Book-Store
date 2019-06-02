import { Meteor } from 'meteor/meteor';
import { Book } from '../imports/ui/collections/books.jsx'

Meteor.startup(() => {
  // code to run on server at startup
  const numBooks = Book.find({}).count();
});
