import React from 'react';
import './loading.scss';
import logo from './logo.svg';

const Loading = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className='Loading'>
          <header className='Loading_header'>
            <img src={logo} className='Loading_logo' alt='logo' />
            <p>Подготовка игрового поля!</p>
            <p>Загрузка...</p>
          </header>
        </div>
      )}
    </>
  );
};
export default Loading;
