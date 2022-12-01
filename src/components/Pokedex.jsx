import React from 'react';
import './Pokedex.scss';
import back from '../images/back.svg';
import next from '../images/next.svg';
import bulbasaur from '../images/bulbasaur.png';
import grassType from '../images/grassType.jpg';
import poisonType from '../images/poisonType.png';
import attack from '../images/attack.svg';
import health from '../images/health.svg';
import defense from '../images/defense.svg';
import bulbasaurEvo from '../images/bulbasaur.gif';
import venosaurEvo from '../images/venosaur.gif';
import ivisaurEvo from '../images/ivisaur.gif';
import evoArrow from '../images/evoArrow.svg';

const Pokedex = ({ setOpen }) => {
  return (
    <div className='pokedex'>
      <div className='pokedex_find'>
        <img src={back} className='pokedex_find_button' />
        <input type='text' className='pokedex_find_input' placeholder='Найти покемона...' />
        <img src={next} className='pokedex_find_button' />
      </div>
      <div className='pokedex_pokemon'>
        <div className='pokedex_pokemon_image'>
          <img src={bulbasaur} alt='pokemon' className='pokedex_pokemon_image_view' />
          <img src={grassType} alt='type' className='pokedex_pokemon_image_type first' />
          <img src={poisonType} alt='type' className='pokedex_pokemon_image_type second' />
        </div>
        <div className='pokedex_pokemon_info'>
          <h1 className='pokedex_pokemon_info_name'>#001 Бульбазавр</h1>
          <div className='pokedex_pokemon_info_stats'>
            <div className='pokedex_pokemon_info_stats_single'>
              <img src={health} alt='health' className='pokedex_pokemon_info_stats_single_icon' />
              <p className='pokedex_pokemon_info_stats_single_number'>50</p>
            </div>
            <div className='pokedex_pokemon_info_stats_single'>
              <img src={attack} alt='attack' className='pokedex_pokemon_info_stats_single_icon' />
              <p className='pokedex_pokemon_info_stats_single_number'>40</p>
            </div>
            <div className='pokedex_pokemon_info_stats_single'>
              <img src={defense} alt='defense' className='pokedex_pokemon_info_stats_single_icon' />
              <p className='pokedex_pokemon_info_stats_single_number'>20</p>
            </div>
          </div>
          <p className='pokedex_pokemon_info_description'>
            Этот покемон любит вздремнуть на солнышке. Его луковица растет за счет поглощения
            солнечных лучей.
          </p>
        </div>
      </div>
      <div className='pokedex_evolutions'>
        <h2 className='pokedex_evolutions_title'>Эволюции</h2>
        <div className='pokedex_evolutions_block'>
          <div className='pokedex_evolutions_block_evo'>
            <img className='pokedex_evolutions_block_evo_pic' src={bulbasaurEvo} alt='pokemon' />
            <p className='pokedex_evolutions_block_evo_name'>Бульбазавр</p>
          </div>
          <img className='pokedex_evolutions_block_arrow' src={evoArrow} alt='evo' />
          <div className='pokedex_evolutions_block_evo'>
            <img className='pokedex_evolutions_block_evo_pic' src={ivisaurEvo} alt='pokemon' />
            <p className='pokedex_evolutions_block_evo_name'>Ивизавр</p>
          </div>
          <img className='pokedex_evolutions_block_arrow' src={evoArrow} alt='evo' />
          <div className='pokedex_evolutions_block_evo'>
            <img className='pokedex_evolutions_block_evo_pic' src={venosaurEvo} alt='pokemon' />
            <p className='pokedex_evolutions_block_evo_name'>Венозавр</p>
          </div>
        </div>
      </div>
      <button onClick={() => setOpen()} className='pokedex_close'>
        ✖
      </button>
    </div>
  );
};

export default Pokedex;
