import React from 'react';
import SearchOptionSort from './SearchOptionSort';
import SearchOptionLang from './SearchOptionLang';
import SearchOptionNumber from './SearchOptionNumber'

const AdvancedOptions = (props) => {
  return (

    <div className='advancedOptions'>
      <SearchOptionLang language={props.language} change={props.changeLang} />
      <br />
      <SearchOptionNumber number={props.number} change={props.changeNum} />
      <br />
      <SearchOptionSort sort={props.sort} change={props.changeSort} />
    </div>
  );
}

export default AdvancedOptions;