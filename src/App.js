import React from 'react';
import './App.css';
import BarContainer from './components/BarContainer/BarContainer';

import NavBar from './components/NavBar/NavBar';

const App = () => {
  return(
    <div className='appContainer'>
      <NavBar />
      <BarContainer />
    </div>
  );
}

export default App;
