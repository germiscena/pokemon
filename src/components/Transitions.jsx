import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './Transitions.scss';

const Transitions = ({ links }) => {
  const navigate = useNavigate();
  console.log(links);
  return (
    <div className='transitions'>
      <h1 className='transitions_title'>Доступные переходы</h1>
      <div className='transitions_links'>
        {links.map((item) => {
          return (
            <button
              onClick={() => navigate('/' + item)}
              key={item}
              className='transitions_links_link'>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Transitions;
