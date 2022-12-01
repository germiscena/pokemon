import React from 'react';
import './Characters.scss';
import PopUp from './PopUp';
const Characters = ({ healing, isHealing }) => {
  const characters = ['Сестра Джой', 'Брок', 'Продавец'];
  return (
    <div className='characters'>
      <h1 className='characters_title'>Доступные персонажи</h1>
      <div className='characters_links'>
        {characters.map((item) => {
          return (
            <button key={item} className='characters_links_link'>
              {item}
            </button>
          );
        })}
        <div className='characters_links_actions'>
          <button onClick={() => healing()} className='characters_links_actions_action'>
            Лечение
          </button>
          <button className='characters_links_actions_action'>Питомник</button>
          <button className='characters_links_actions_action'>Разведение</button>
          <button className='characters_links_actions_action'>Продавец</button>
          {isHealing && <PopUp />}
        </div>
      </div>
    </div>
  );
};

export default Characters;
