import React from 'react';
import { useNavigate } from 'react-router';
import './loading.scss';
import logo from './logo.svg';

const Loading = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    setTimeout(() => {
      navigate('/Тренировка');
    }, 3000);
  }, []);
  return (
    <div className='Loading'>
      <header className='Loading_header'>
        <img src={logo} className='Loading_logo' alt='logo' />
        <p>Подготовка игрового поля!</p>
        <p>Загрузка...</p>
      </header>
    </div>
  );
};
export default Loading;
