import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const title = "Atomic Habits";
const author = "James Clear";
const img =
  "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book img={img} title={title} author={author} />
      <Book img={img} title={title} author={author} />
      <Book img={img} title={title} author={author} />
      <Book img={img} title={title} author={author} />
    </section>
  );
};
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
