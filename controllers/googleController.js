// Importung axios to hit the Google Books database.
const axios = require("axios");
// Importing our models folder, which contains our schema.
const db = require("../models");

// Defining module.exports as our controller so we can use dot notation to reference it.
module.exports = {
  // This is the only function we have and need.
  // req contains the searched-for string from the client and will return results as res.
  findAll: function(req, res) {
    // Defining our query as the request data.
    const { query: params } = req;
    // Searching for the book. Params will get replaced by the string.
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      }) // Once something is returned, our promise filters the results...
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )// returns the book search results to another promise that checks to see if we have it in our database already and doesn't show it in the client's visible results if it is. Note: There are sometimes multiple entries for the same book so it's doing its best with what the API gives it! Search Shotgun Ridge for what I found.
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      ) // Return our filtered search results.
      .then(books => res.json(books))
      // Just in case there's an error, don't let the app just crash...
      .catch(err => res.status(422).json(err));
  }
};
