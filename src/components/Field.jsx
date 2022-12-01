import React from 'react';
import './Field.scss';

const Field = ({ field, fieldName }) => {
  return (
    <div className='Field'>
      <h1 className='Field_name'>{fieldName}</h1>
      <img className='Field_field' src={field} alt='field' />
    </div>
  );
};

export default Field;
