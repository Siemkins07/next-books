import React from 'react';
import image1 from '../images/book.jpg';
import LazyLoad from 'react-lazyload';


const BookCover = (props) => {
  return (

    <div className='bookCover'>
      <LazyLoad once={true} placeholder={<img src={image1} alt='okładka zastępcza' />}>
        {props.cover.imageLinks ? <img src={`${props.cover.imageLinks.thumbnail}`} alt='okładka' /> : <img src={image1} alt='okładka zastępcza' />}
      </LazyLoad>
    </div>
  )
}

export default BookCover;