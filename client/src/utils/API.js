// Importing axios to hit an api.
import axios from "axios";

// Defining our default export as the four methods we want to be able to run.
export default {
  // Get all books.
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  }, // Get only saved books.
  getSavedBooks: function() {
    return axios.get("/api/books");
  }, // Delete a single book by its id.
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }, // Save a book's data to our database.
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
