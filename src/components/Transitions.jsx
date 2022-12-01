import React from 'react';
import './Transitions.scss';

const Transitions = () => {
  const transitionLinks = ['Академия тренеров', 'Покецентр', 'Дикий лес'];
  return (
    <div className='transitions'>
      <h1 className='transitions_title'>Доступные переходы</h1>
      <div className='transitions_links'>
        {transitionLinks.map((item) => {
          return (
            <button key={item} className='transitions_links_link'>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Transitions;
