import React from 'react';

import SelectItem from './SelectItem';


const SelectList = (props) => {
  
  if (props.items.length > 0) {
    return (
      <section className='form-inline'>
        <div className='form-group'>
          <label>{props.label}</label>
          <select className='form-control' onChange={props.onChange}>
            <option value=''>-- {props.optionLabel} --</option>
            {
              props.items.map( elem => <SelectItem key={elem.id} id={elem.id} name={elem.name} /> )
            }
          </select>
        </div>
      </section>
    );
  
  } else {
    return (
      <div></div>
    )
  }
}


export default SelectList;