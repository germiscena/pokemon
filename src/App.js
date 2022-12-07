import React from 'react';
import './App.css';
import BattlePage from './pages/BattlePage';
import Loading from './pages/Loading';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Pokeheal from './pages/Pokeheal';
import axios from 'axios';

function App() {
  const [openPokedex, setOpenPokedex] = React.useState(false);
  const [pokemons, setPokemons] = React.useState([]);
  async function getPokemons() {
    let data = await axios.get('https://635b02f16f97ae73a63b8527.mockapi.io/pokemons');
    setPokemons(data.data);
  }
  React.useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Routes>
      <Route
        path='/Тренировка'
        element={
          <BattlePage
            pokemons={pokemons}
            openPokedex={openPokedex}
            setOpenPokedex={() => setOpenPokedex(true)}
            setClosePokedex={() => setOpenPokedex(false)}
          />
        }
      />
      <Route path='/' element={<Loading />} />
      <Route
        path='/Академия'
        element={
          <Welcome
            pokemons={pokemons}
            openPokedex={openPokedex}
            setOpenPokedex={() => setOpenPokedex(true)}
            setClosePokedex={() => setOpenPokedex(false)}
          />
        }
      />
      <Route
        path='/Покецентр'
        element={
          <Pokeheal
            pokemons={pokemons}
            openPokedex={openPokedex}
            setOpenPokedex={() => setOpenPokedex(true)}
            setClosePokedex={() => setOpenPokedex(false)}
          />
        }
      />
    </Routes>
  );
}

export default App;
