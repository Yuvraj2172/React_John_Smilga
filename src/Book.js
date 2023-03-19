import React from 'react'

const Book = (props) => {
    const { img, title, author, children, displayValue,number } = props;
    // console.log(props)
   
    return (
      <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        {children}
        <h4>{author.toUpperCase()}</h4>
        <span className='number'>{`#${number+1}`}</span>
        <button style={{ margin: "0.5rem", padding: "0.5rem" }} onClick={displayValue} >Display Title</button>
        {/* <button style={{ margin: "0.5rem", padding: "0.5rem" }} onClick={getSingleBook} >Click Me</button> */}
       
      </article>
    );
}

export default Book;