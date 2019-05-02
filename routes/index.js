// Requring path so we can use __dirname.
const path = require("path");
// Creating an express router variable for export.
const router = require("express").Router();
// Storing all of our api routes from our api folder by requiring the folder.
const apiRoutes = require("./api");

// Creating our api routes. This will grab the index.js from our api folder which contains all our other modules from that folder.
router.use("/api", apiRoutes);

// Middleware to handle requests and send back a page.
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// Exporting our router.
module.exports = router;
