// Creating an express router.
const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Defining a route for our books.
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);
// Creating a route to search for a specific book by its id and the CRUD operations we want associated: find one, update one, or delete one.
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

// Exporting our router.
module.exports = router;
