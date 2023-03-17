import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./Test";

function Greeting() {
  return (
    <>
    <h2 id="heading" className="cla">
      This is the first component.
    </h2>
    <Test/>
    </>
  );
}

// function Greeting() {
//   return React.createElement(
//     "h2",
//     {},
//     React.createElement("p", {}, "This is a paragraph inside a Heading")
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
