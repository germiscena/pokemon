import React from 'react';
import './Pokeheal.scss';
import pokehealField from '../images/pokehealField.jpg';
import Header from '../components/Header';
import Transitions from '../components/Transitions';
import Field from '../components/Field';
import Characters from '../components/Characters';
import BottomButtons from '../components/BottomButtons';
import Pokedex from '../components/Pokedex';

const Pokeheal = ({ openPokedex, setOpenPokedex }) => {
  return (
    <div className='pokeheal'>
      <Header />
      <div className='pokeheal_windows'>
        <Transitions links={['Тренировка', 'Академия']} />
        <Field field={pokehealField} fieldName={'Покецентр'} />
        <Characters />
      </div>
      <BottomButtons setOpen={() => setOpenPokedex(true)} />
      {openPokedex && <Pokedex setOpen={() => setOpenPokedex(false)} />}
    </div>
  );
};

export default Pokeheal;
