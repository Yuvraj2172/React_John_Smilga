import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {books} from './books'
import Book from "./Book";
// const names = ["yuvraj", "soni", "uveee"];
// const newNames = [...names, "yuvrrraj"];
// console.log(newNames);
// const newNames = names.map((name)=>{
//   return <h1>{name}</h1>
// });
const BookList = () => {
  const someValue = 'shakeAndBake';
  const displayValue = ()=>{
    console.log(someValue);
  }
  return (
    <div >
        <EventExamples  />
      <section className="booklist">
        
        {books.map((book,index) => {
          // const {img , title,author , children,id} = book;
          return <Book {...book} key={book.id} displayValue={displayValue} number ={index} />;
        })}
      </section>
    </div>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    //  console.log('Handle Form Input');
    // console.log(e.target);
    // console.log(e.target.name);
    console.log(e.target.value);
  };
  const clickHandler = () => {
    alert("Handle Button Clicked"); 
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
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
        <button type="submit" style={{ margin: "0.5rem", padding: "0.5rem" }}>
          Submit
        </button>
      </form>
      <button style={{ margin: "0.5rem", padding: "0.5rem" }} onClick={clickHandler}>click me</button>
      <button
        style={{ margin: "0.5rem", padding: "0.5rem" }}
        onClick={() => {
          console.log("Hii");
        }}
      >
        HI
      </button>
    </section>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
