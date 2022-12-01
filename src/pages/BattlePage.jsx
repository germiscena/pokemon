import React from 'react';
import BattleField from '../components/BattleField';
import BottomButtons from '../components/BottomButtons';
import Characters from '../components/Characters';
import Header from '../components/Header';
import Pokedex from '../components/Pokedex';
import Transitions from '../components/Transitions';
import './BattlePage.scss';

const BattlePage = ({ time }) => {
  const [isHealing, setIsHealing] = React.useState(false);

  function healing() {
    setIsHealing(true);
    setTimeout(() => {
      setIsHealing(false);
    }, 3000);
  }
  return (
    <div className='battlePage'>
      <Header time={time} />
      <div className='battlePage_windows'>
        <Transitions />
        <BattleField />
        <Characters isHealing={isHealing} healing={() => healing()} />
      </div>
      <BottomButtons />
      <Pokedex />
    </div>
  );
};

export default BattlePage;
