import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books=[
  {
    title: " Atomic Habits",
    author: "James Clear",
    img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
  },
  {
    title: "Energize Your Mind",
    author: "Gaur Gopal Das",
    img: "https://d1b14unh5d6w7g.cloudfront.net/1728265371.01.S001.LXXXXXXX.jpg?Expires=1679232985&Signature=L~sXCScOw2tanW8glFuRZ0qFczTgC9T-ZSQRjTQP6cC29EA3a~wweHVkR-XxBIWjHIbJxLHJLO9kzLol9a9cpiXel9Kv0Oy0l0PSBJ98mB5kzOorIar2RH7oVh3deMJXSOZhF98xfRYXEwaBYL69Qekv-sBctFHd9tXcTqjC6tg_&Key-Pair-Id=APKAIUO27P366FGALUMQ",
  },{
    title: " Atomic Habits",
    author: "James Clear",
    img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
  },
  {
    title: "Energize Your Mind",
    author: "Gaur Gopal Das",
    img: "https://d1b14unh5d6w7g.cloudfront.net/1728265371.01.S001.LXXXXXXX.jpg?Expires=1679232985&Signature=L~sXCScOw2tanW8glFuRZ0qFczTgC9T-ZSQRjTQP6cC29EA3a~wweHVkR-XxBIWjHIbJxLHJLO9kzLol9a9cpiXel9Kv0Oy0l0PSBJ98mB5kzOorIar2RH7oVh3deMJXSOZhF98xfRYXEwaBYL69Qekv-sBctFHd9tXcTqjC6tg_&Key-Pair-Id=APKAIUO27P366FGALUMQ",
  }
]
const names=['yuvraj','soni', 'uveee'];
const newNames = names.map((name)=>{
  return <h1>{name}</h1>
});
console.log(newNames);
const BookList = () => {
  return (
    <section className="booklist">
    {books.map((book)=>{
      const {img , title,author , children} = book;
      return <Book img={img} title ={title} author = {author}  children = {children}/>
    })}
    </section>
  );
};
const Book = (props) => {
  // const {img , title , author,children} = props;
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
