import React from 'react';

const NoResult = (props) => {
  return (

    <div>
      {props.click >= 1 ? <p>Brak wyników dla wybranych kryteriów.</p> : null}
    </div>
  )
}

export default NoResult;