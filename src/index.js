import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  const title = 'Atomic Habits'
  const author = 'James Clear';
  return (
    <article className="book">
      <img src="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x=6}</p> */}
      <p>{6+6}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
