import React from 'react';

const SearchOptionSort = (props) => {
  return (

    <>
      <label htmlFor="sort">Najnowsze na górze</label>
      <input type="checkbox" id='sort' checked={props.sort} onChange={props.change} />
    </>
  );
}

export default SearchOptionSort;