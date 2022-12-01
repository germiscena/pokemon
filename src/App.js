import React from 'react';
import './App.css';
import BattlePage from './pages/BattlePage';
import Loading from './pages/Loading';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Pokeheal from './pages/Pokeheal';

function App() {
  const [openPokedex, setOpenPokedex] = React.useState(false);

  return (
    <Routes>
      <Route
        path='/Тренировка'
        element={
          <BattlePage
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
