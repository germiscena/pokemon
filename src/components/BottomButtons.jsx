import React from 'react';
import './BottomButtons.scss';
const BottomButtons = () => {
  return (
    <div className='bottomButtons'>
      <button className='bottomButtons_button active'>Дикие покемоны</button>
      <button className='bottomButtons_button'>Покедекс</button>
      <button className='bottomButtons_button'>Бои</button>
    </div>
  );
};

export default BottomButtons;
