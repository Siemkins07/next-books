import React from 'react';

const BookTitle = (props) => {
  return (

    <div className='bookTitle' data-test='bookTitle'>
      <h4> {props.title}</h4 >
    </div>);
}

export default BookTitle;