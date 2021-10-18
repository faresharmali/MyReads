import React from "react";
import Book from "./book.js";
import "../App.css";
import { Link } from "react-router-dom";

const backend = require("../BooksAPI.js");
class SearchPage extends React.Component {
  state = {
    Books: [],
    NotFound: true,
  };
  Search = async (e) => {
    if (e.target.value.trim() !== "") {
      const result = await backend.search(e.target.value);
      if (result.error) {
        this.setState({ Books: [], NotFound: true });
      } else {
        const FoundBook = result.map((book) => {
          const bookFound = this.props.Books.find(
            (BOOK) => BOOK.id === book.id
          );
          return bookFound
            ? { ...book, shelf: bookFound.shelf }
            : { ...book, shelf: "none" };
        });
        this.setState({ Books: FoundBook, NotFound: false });
      }
    } else {
      this.setState({ Books: [], NotFound: true });
    }
  };

  render() {
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
          {this.state.NotFound && <h1>No results</h1>}
          <ol className="books-grid">
            {this.state.Books.map((book) => (
              <li key={book.id}>
                <Book book={book} getBooks={this.props.getBooks} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
