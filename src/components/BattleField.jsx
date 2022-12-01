import React from 'react';
import './BattleField.scss';
import field from '../images/field.png';

const BattleField = () => {
  return (
    <div className='battleField'>
      <h1 className='battleField_name'>Тренировочная площадка</h1>
      <img className='battleField_field' src={field} alt='field' />
    </div>
  );
};

export default BattleField;
