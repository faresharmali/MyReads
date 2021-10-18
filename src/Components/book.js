import React from "react";
const Book = (props) => {
  const backend = require("../BooksAPI");
  const ChangeShelf = async (e) => {
    await backend.update(props.book, e.target.value);
    props.getBooks();
  };
  const { authors, title, shelf, imageLinks } = props.book;
  const image = imageLinks ? `url("${imageLinks.thumbnail}")` : "none";

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: image,
          }}
        />
        <div className="book-shelf-changer">
          <select value={shelf} onChange={ChangeShelf}>
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
      <div className="book-title">{title ? title : "unknown"}</div>
      {authors &&
        authors.map((author) => (
          <div key={author} className="book-authors">
            {author}
          </div>
        ))}
    </div>
  );
};

export default Book;
