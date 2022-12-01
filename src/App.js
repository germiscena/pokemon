import React from 'react';
import './App.css';
import BattlePage from './pages/BattlePage';
import Loading from './pages/Loading';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [time, setTime] = React.useState();
  setInterval(function () {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {isLoading ? <Loading isLoading={isLoading} time={2000} /> : <BattlePage time={time} />}
    </div>
  );
}

export default App;
