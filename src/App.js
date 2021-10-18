import React from "react";
import "./App.css";
import Library from "./Components/Library.js";
import SearchPage from "./Components/SearchPage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const backend = require("./BooksAPI");

class BooksApp extends React.Component {
  state = {
    Books: [],
  };
  async componentDidMount() {
    this.getBooks();
  }
  getBooks = async () => {
    const Books = await backend.getAll();
    this.setState({ Books: Books });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Library Books={this.state.Books} getBooks={this.getBooks} />
          </Route>
          <Route exact path="/search">
            <SearchPage Books={this.state.Books} getBooks={this.getBooks} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default BooksApp;
