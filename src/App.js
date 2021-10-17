import React from "react";
import "./App.css";
import Library from "./Components/Library.js";
import SearchPage from "./Components/SearchPage.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const BooksApp = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Library />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
};
export default BooksApp;
