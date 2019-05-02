// Always import react...
import React from "react";
// Importing a react router.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Importing the pages our react router will feed us.
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

// All the information that our app displays and how our app looks/performs!
function App() {
  return (
    // Wrapper on router.
    <Router>
      <div>
        {/* Nav bar in self-closing tags since it's an independant component. */}
        <Nav /> 
        {/* Router switchboard for our pages. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
