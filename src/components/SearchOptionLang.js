import React from 'react';

const SearchOptionLang = (props) => {
  return (

    <>
      <label htmlFor="language">Język:</label>
      <select id="language" value={props.language} onChange={props.change}>
        <option value="">Wybierz</option>
        <option value="pl">Polski</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="fr">France</option>
        <option value="es">Spain</option>
        <option value="ru">Russia</option>
      </select>
    </>
  )
}

export default SearchOptionLang;