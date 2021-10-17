import React, { Component } from "react";
const Book = (props) => {
  const backend = require("../BooksAPI");
  const ChangeShelf = async (e) => {
    const result = await backend.update(props.book, e.target.value);
    console.log(result);
    if (props.getBooks) {
      props.getBooks();
    }
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${props.book.imageLinks.smallThumbnail}")`,
          }}
        />
        <div className="book-shelf-changer">
          <select value="move" onChange={ChangeShelf}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      {props.book.authors &&
        props.book.authors.map((author) => (
          <div className="book-authors">{author}</div>
        ))}
    </div>
  );
};

export default Book;
