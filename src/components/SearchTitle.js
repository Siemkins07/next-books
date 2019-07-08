import React from 'react';

const SearchTitle = (props) => {
  return (

    <div className='searchTitle'>
      <input className='search' type="text" value={props.title} onChange={props.change} placeholder='Tytuł' />
    </div>
  );
}

export default SearchTitle;