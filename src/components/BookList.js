import React from 'react';
import Book from './Book';
import LazyLoad from 'react-lazyload';
import Loading from './Loading';

const BookList = (props) => {

  const books = props.books.map(book => (
    <LazyLoad
      key={book.id}
      height={200}
      offset={[-100, 100]}
      placeholder={<Loading />}>
      <Book key={book.id} book={book} />
    </LazyLoad>
  ))

  return (

    <div className='results'>
      <ul>
        {books}
      </ul>
    </div>
  );
}

export default BookList;