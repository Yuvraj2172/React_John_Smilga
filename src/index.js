import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    title: " Atomic Habits",
    author: "James Clear",
    img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    id: 1,
  },
  {
    title: "Energize Your Mind",
    author: "Gaur Gopal Das",
    img: "https://d1b14unh5d6w7g.cloudfront.net/1728265371.01.S001.LXXXXXXX.jpg?Expires=1679232985&Signature=L~sXCScOw2tanW8glFuRZ0qFczTgC9T-ZSQRjTQP6cC29EA3a~wweHVkR-XxBIWjHIbJxLHJLO9kzLol9a9cpiXel9Kv0Oy0l0PSBJ98mB5kzOorIar2RH7oVh3deMJXSOZhF98xfRYXEwaBYL69Qekv-sBctFHd9tXcTqjC6tg_&Key-Pair-Id=APKAIUO27P366FGALUMQ",
    id: 2,
  },
  {
    title: " Atomic Habits",
    author: "James Clear",
    img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    id: 3,
  },
  {
    title: "Energize Your Mind",
    author: "Gaur Gopal Das",
    img: "https://d1b14unh5d6w7g.cloudfront.net/1728265371.01.S001.LXXXXXXX.jpg?Expires=1679232985&Signature=L~sXCScOw2tanW8glFuRZ0qFczTgC9T-ZSQRjTQP6cC29EA3a~wweHVkR-XxBIWjHIbJxLHJLO9kzLol9a9cpiXel9Kv0Oy0l0PSBJ98mB5kzOorIar2RH7oVh3deMJXSOZhF98xfRYXEwaBYL69Qekv-sBctFHd9tXcTqjC6tg_&Key-Pair-Id=APKAIUO27P366FGALUMQ",
    id: 4,
  },
];
const names = ["yuvraj", "soni", "uveee"];
const newNames = [...names, "yuvrrraj"];
// console.log(newNames);
// const newNames = names.map((name)=>{
//   return <h1>{name}</h1>
// });
const BookList = () => {
  return (
    <>
      <section className="booklist">
        <EventExamples />
        {books.map((book) => {
          // const {img , title,author , children,id} = book;
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    //  console.log('Handle Form Input');
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
  };
  const clickHandler = () => {
    alert("Handle Button Clicked");
  };
  const handleFormSubmission=(e)=>{
    e.preventDefault();
    console.log('Form Submitted');
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={clickHandler}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, children } = props;
  // console.log(props)
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
