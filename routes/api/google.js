// Creating a router variable...
const router = require("express").Router();
// Importing a controller for our Google Books search route. This contains our own methods built for code clarity and reusability.
const googleController = require("../../controllers/googleController");

// Setting the inital route and the query/search type.
router
  .route("/")
  .get(googleController.findAll);

// Exporting the router!
module.exports = router;
