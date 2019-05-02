// Importing path for our router variable.
const path = require("path");
// Creating a router variable.
const router = require("express").Router();
// Importing two routes.
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Telling our router to use our two imported routes.
router.use("/books", bookRoutes);

router.use("/google", googleRoutes);

// Exporting our router.
module.exports = router;
