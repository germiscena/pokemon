import React from 'react';
import './Pokeheal.scss';
import pokehealField from '../images/pokehealField.jpg';
import Header from '../components/Header';
import Transitions from '../components/Transitions';
import Field from '../components/Field';
import Characters from '../components/Characters';
import BottomButtons from '../components/BottomButtons';
import Pokedex from '../components/Pokedex';

const Pokeheal = ({ openPokedex, setOpenPokedex, setClosePokedex, pokemons }) => {
  return (
    <div className='pokeheal'>
      <Header />
      <div className='pokeheal_windows'>
        <Transitions links={['Тренировка', 'Академия']} />
        <Field field={pokehealField} fieldName={'Покецентр'} />
        <Characters />
      </div>
      <BottomButtons
        openPokedex={openPokedex}
        setClose={() => setClosePokedex()}
        setOpen={() => setOpenPokedex()}
      />
      {openPokedex && <Pokedex pokemons={pokemons} setClose={() => setClosePokedex()} />}
    </div>
  );
};

export default Pokeheal;
