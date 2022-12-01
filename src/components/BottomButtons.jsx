import React from 'react';
import './BottomButtons.scss';
const BottomButtons = ({ setOpen }) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div className='bottomButtons'>
      <button
        onClick={() => setIsActive(!isActive)}
        className={isActive ? 'bottomButtons_button active' : 'bottomButtons_button'}>
        Дикие покемоны
      </button>
      <button onClick={() => setOpen()} className='bottomButtons_button'>
        Покедекс
      </button>
      <button className='bottomButtons_button'>Бои</button>
    </div>
  );
};

export default BottomButtons;
