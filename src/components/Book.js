import React from 'react';
import BookCover from './BookCover';
import BookTitle from './BookTitle';
import BookDescription from './BookDescription';

const Book = (props) => {
  return (

    <div>
      <BookCover cover={props.book.volumeInfo} />
      <BookTitle title={props.book.volumeInfo.title} />
      <BookDescription description={props.book.volumeInfo.description} />
    </div>
  )
}

export default Book;