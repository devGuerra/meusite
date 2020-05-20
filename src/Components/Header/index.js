import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/newLogoColor.svg';

const Header = () => (
  <header>
    <div className="widthContainer">
      <Link to="/">
        <img src={logo} alt="" />
        <span>Knots - Grupos do zap</span>
      </Link>
      <ul>
        <li>
          <Link to="/">Adicionar grupo</Link>
        </li>
        <li>
          <a
            href="https://play.google.com/store/apps/details?id=com.knotsgrupos"
            target="_blank"
            rel="noreferrer">
            Baixe o Aplicativo
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
