import React from 'react'

const SelectItem = (props) => {
  return (
    <option value={props.id}>{props.name}</option>
  );
}


export default SelectItem;