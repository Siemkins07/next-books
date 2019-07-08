import React from 'react';

const BookDescription = (props) => {
  return (

    <div>
      {props.description ? <p>{`${props.description.substr(0, 120)}...`}</p> : <p>Niestety, opis tej pozycji jest w tym momencie niedostępny. </p>}
    </div>);
}

export default BookDescription;