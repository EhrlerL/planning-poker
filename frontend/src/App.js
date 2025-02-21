import logo from './logo.svg';
import './App.css';

import Cookies from 'universal-cookie';

import Poker from './pages/Poker';
import Name from './pages/Name';

function App() {
  const cookies = new Cookies();
  return (
    <div className="App">
      {cookies.get('name') ? 
        <Poker />
      : <Name />}
    </div>
  );
}

export default App;
