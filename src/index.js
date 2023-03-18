import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  title: " Atomic Habits",
  author: "James Clear",
  img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
};
const secondBook = {
  title: "Energize Your Mind",
  author: "Gaur Gopal Das",
  img: "https://d1b14unh5d6w7g.cloudfront.net/1728265371.01.S001.LXXXXXXX.jpg?Expires=1679232985&Signature=L~sXCScOw2tanW8glFuRZ0qFczTgC9T-ZSQRjTQP6cC29EA3a~wweHVkR-XxBIWjHIbJxLHJLO9kzLol9a9cpiXel9Kv0Oy0l0PSBJ98mB5kzOorIar2RH7oVh3deMJXSOZhF98xfRYXEwaBYL69Qekv-sBctFHd9tXcTqjC6tg_&Key-Pair-Id=APKAIUO27P366FGALUMQ",
};
const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, distinctio. Maiores officia fugiat quibusdam voluptas. Iste quam libero amet quia.</p>
      <button style={{color: 'red'}}>click me</button>
      </Book>
      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
      />
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      />
      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
      />
    </section>
  );
};
const Book = (props) => {
  const {img , title , author,children} = props;
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {children}
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
