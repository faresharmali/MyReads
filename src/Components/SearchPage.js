import React, { Component } from "react";
import Book from "./book.js";
import "../App.css";
import { Link } from "react-router-dom";

const backend = require("../BooksAPI.js");
class SearchPage extends React.Component {
  state = {
    Books: [],
  };
  Search = async (e) => {
    if (e.target.value.trim() != "") {
      const result = await backend.search(e.target.value);
      if (result.error) {
        this.setState({ Books: [] });
      } else {
        this.setState({ Books: result });
      }
    } else {
      this.setState({ Books: [] });
    }
  };

  render() {
    console.log(this.state.Books);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={this.Search}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.Books.map((book) => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
