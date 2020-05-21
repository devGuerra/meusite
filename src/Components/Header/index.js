import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/newLogoColor.svg';

const Header = () => (
  <header>
    <div className="widthContainer">
      <ul>
        <li className="left">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
            <span>Knots - Grupos do zap</span>
          </Link>
        </li>
        <li className="right">
          <Link to="/new-group">Adicionar grupo</Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.knotsgrupos"
            target="_blank"
            className="playstore"
            rel="noopener noreferrer">
            Baixe o Aplicativo
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
