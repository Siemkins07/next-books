import React from 'react';
import '../styles/Result.css';
import NoResult from './NoResult';
import BookList from './BookList';

const Result = (props) => {
  return (

    <div className='results'>
      {props.books ? <BookList books={props.books} /> : <NoResult click={props.click} />}
    </div>
  );
}

export default Result;