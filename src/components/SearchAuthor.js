import React from 'react';

const SearchAuthor = (props) => {
  return (

    <div className='searchAuthor'>
      <input className='search' type="text" value={props.author} onChange={props.change} placeholder='Autor' />
    </div>
  );
}

export default SearchAuthor;