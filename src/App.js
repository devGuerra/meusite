import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import Header from './Components/Header';
import Categories from './Components/Categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Categories />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
