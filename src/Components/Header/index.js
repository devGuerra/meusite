import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Header = () => (
  <header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="#">Adicionar grupo</a>
      </li>
      <li>
        <a href="#">Ajuda</a>
      </li>
    </ul>
  </header>
);

export default Header;
