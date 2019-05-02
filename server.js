// Requiring express to handle page routing
const express = require("express");

// Requiring mongoose for database storage.
const mongoose = require("mongoose");
// Requiring our own routes folder as a source so we get everything.
const routes = require("./routes");
// Setting the express functions to a constant and ports for if it's hosted online or locally.
const app = express();
const PORT = process.env.PORT || 3001;

// Boilerplate express settings setting us up to use JSON.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Checking which build to use.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Telling express to use our routes.
app.use(routes);

// Checking where the mongoose server is hosted; externally or locally.
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://meamuser:1amused@ds151076.mlab.com:51076/heroku_r36h66t1",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Telling express to keep its ear open for calls.
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
