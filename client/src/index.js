// Importing react!
import React from "react";
import ReactDOM from "react-dom";
// Importing App.js for our slick view/clientside rendering/site. At this moment, I am not sure what to call it.
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// The virtual DOM!
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
