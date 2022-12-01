import React from 'react';
import './Welcome.scss';
import Header from '../components/Header';
import Transitions from '../components/Transitions';
import BottomButtons from '../components/BottomButtons';
import Pokedex from '../components/Pokedex';
import Field from '../components/Field';
import welcomeField from '../images/welcomeField.jpg';
import Characters from '../components/Characters';

const Welcome = ({ openPokedex, setOpenPokedex, setClosePokedex }) => {
  return (
    <div className='welcome'>
      <Header />
      <div className='welcome_windows'>
        <Transitions links={['Тренировка', 'Покецентр']} />
        <Field field={welcomeField} fieldName={'Добро пожаловать!'} />
        <Characters />
      </div>
      <BottomButtons setOpen={() => setOpenPokedex(true)} />
      {openPokedex && <Pokedex setOpen={() => setClosePokedex(false)} />}
    </div>
  );
};

export default Welcome;
