import React from 'react';

const AdvancedOptionsCheckbox = (props) => {
  return (

    <>
      <label htmlFor="visible">Opcje wyszukiwania</label>
      <input type="checkbox" id='visible' checked={props.areAdvancedOptionsVisible} onChange={props.change} />
    </>
  );
}

export default AdvancedOptionsCheckbox;
