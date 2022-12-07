import React from 'react';
import './Pokedex.scss';
import back from '../images/back.svg';
import next from '../images/next.svg';
import grassType from '../images/grassType.jpg';
import poisonType from '../images/poisonType.png';
import attack from '../images/attack.svg';
import health from '../images/health.svg';
import defense from '../images/defense.svg';
import bulbasaurEvo from '../images/pokemons/bulbasaur.gif';
import venosaurEvo from '../images/pokemons/venosaur.gif';
import ivisaurEvo from '../images/pokemons/ivisaur.gif';
import evoArrow from '../images/evoArrow.svg';
import {
  Bulbasaur,
  Venusaur,
  Ivysaur,
  Charizard,
  Charmander,
  Charmeleon,
  Squirtle,
  Wartortle,
  Blastoise,
  Caterpie,
} from '../images/pokemons/exports';

const Pokedex = ({ setClose, pokemons }) => {
  const [pokemon, setPokemon] = React.useState(0);

  const array = [
    { component: Bulbasaur },
    { component: Ivysaur },
    { component: Venusaur },
    { component: Charmander },
    { component: Charmeleon },
    { component: Charizard },
    { component: Squirtle },
    { component: Wartortle },
    { component: Blastoise },
    { component: Caterpie },
  ];

  function nextPokemon() {
    pokemon == 9 ? setPokemon(0) : setPokemon(pokemon + 1);
  }

  function prevPokemon() {
    pokemon == 0 ? setPokemon(9) : setPokemon(pokemon - 1);
  }
  console.log(pokemons);
  return (
    <div className='pokedex'>
      <div className='pokedex_find'>
        <img onClick={() => prevPokemon()} src={back} className='pokedex_find_button' />
        <input type='text' className='pokedex_find_input' placeholder='Найти покемона...' />
        <img onClick={() => nextPokemon()} src={next} className='pokedex_find_button' />
      </div>
      <div className='pokedex_pokemon'>
        <div className='pokedex_pokemon_image'>
          <img
            src={array[pokemon].component}
            alt='pokemon'
            className='pokedex_pokemon_image_view'
          />
          <img src={grassType} alt='type' className='pokedex_pokemon_image_type first' />
          <img src={poisonType} alt='type' className='pokedex_pokemon_image_type second' />
        </div>
        <div className='pokedex_pokemon_info'>
          <h1 className='pokedex_pokemon_info_name'>
            {'#' + pokemons[pokemon].pokedexId + ' ' + pokemons[pokemon].name}
          </h1>
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
      <button onClick={() => setClose()} className='pokedex_close'>
        ✖
      </button>
    </div>
  );
};

export default Pokedex;
// async function getPokemon() {
//   let data = await axios.get(
//     `https://635b02f16f97ae73a63b8527.mockapi.io/pokemons?pokedexId=${pokemon} `,
//   );
//   console.log(data.data);
// }
// getPokemon();
