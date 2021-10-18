import React from "react";
import Book from "./book.js";
import { Link } from "react-router-dom";

class Library extends React.Component {
  render() {
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
                    {this.props.Books.filter(
                      (book) => book.shelf === "currentlyReading"
                    ).map((book) => (
                      <li key={book.id}>
                        <Book getBooks={this.props.getBooks} book={book} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.Books.filter(
                      (book) => book.shelf === "wantToRead"
                    ).map((book) => (
                      <li key={book.id}>
                        <Book getBooks={this.props.getBooks} book={book} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.Books.filter(
                      (book) => book.shelf === "read"
                    ).map((book) => (
                      <li key={book.id}>
                        <Book getBooks={this.props.getBooks} book={book} />
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
