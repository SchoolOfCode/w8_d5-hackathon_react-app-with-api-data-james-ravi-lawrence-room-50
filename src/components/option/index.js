import React from 'react';

function Option({value, text}){
    return (
        <option className="dropdown-option" value={value}>{text}</option>
    )
}
export default Option