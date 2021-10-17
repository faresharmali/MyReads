import React, { Component } from "react";
import Book from "./book.js";
import { Link } from "react-router-dom";

const backend = require("../BooksAPI");

class Library extends React.Component {
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
    console.log(this.state.Books);

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.state.Books.filter(
                      (book) => book.shelf == "currentlyReading"
                    ).map((book) => (
                      <li key={book.id}>
                        <Book getBooks={this.getBooks} book={book} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.state.Books.filter(
                      (book) => book.shelf == "wantToRead"
                    ).map((book) => (
                      <li key={book.id}>
                        <Book getBooks={this.getBooks} book={book} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.state.Books.filter(
                      (book) => book.shelf == "read"
                    ).map((book) => (
                      <li key={book.id}>
                        <Book getBooks={this.getBooks} book={book} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <Link to="/search">
            <div className="open-search">
              <button>Add a book</button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Library;
