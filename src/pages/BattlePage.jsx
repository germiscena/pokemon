import React from 'react';
import Field from '../components/Field';
import BottomButtons from '../components/BottomButtons';
import Characters from '../components/Characters';
import Header from '../components/Header';
import Pokedex from '../components/Pokedex';
import Transitions from '../components/Transitions';
import battleField from '../images/field.png';
import './BattlePage.scss';

const BattlePage = ({ openPokedex, setOpenPokedex, setClosePokedex, pokemons }) => {
  const [isHealing, setIsHealing] = React.useState(false);
  function healing() {
    setIsHealing(true);
    setTimeout(() => {
      setIsHealing(false);
    }, 3000);
  }
  return (
    <div className='battlePage'>
      <Header />
      <div className='battlePage_windows'>
        <Transitions links={['Академия', 'Покецентр']} />
        <Field field={battleField} fieldName={'Тренировочная площадка'} />
        <Characters isHealing={isHealing} healing={() => healing()} />
      </div>
      <BottomButtons setOpen={() => setOpenPokedex()} />
      {openPokedex && <Pokedex pokemons={pokemons} setOpen={() => setClosePokedex()} />}
    </div>
  );
};

export default BattlePage;
