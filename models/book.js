// Importing mongoose to store our saved books.
const mongoose = require("mongoose");
// Importing mongoose.Schema and creating a variable to store it so we can create our own Schema.
const Schema = mongoose.Schema;

// Defining our new schema using mongoose.Schema. There could be more if we were saving different types of information about our books, but we're only saving the one set.
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

// Saving the new schema in a constant for reusability.
const Book = mongoose.model("Book", bookSchema);

// Exporting our reusable constant.
module.exports = Book;
