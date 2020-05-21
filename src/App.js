import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
