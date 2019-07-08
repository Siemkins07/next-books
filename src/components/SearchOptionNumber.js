import React from 'react';

const SearchOptionNumber = (props) => {
  return (

    <>
      <label htmlFor="numbers">Wyników:</label>
      <select id="numbers" value={props.number} onChange={props.change} checked={props.checked} >
        <option value="">Wybierz</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="40">40</option>
      </select>
    </>
  );
}

export default SearchOptionNumber;