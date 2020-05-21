import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/newLogoColor.svg';

const Header = () => (
  <header>
    <div className="widthContainer">
      <ul>
        <li className="left">
          <Link
            to="/?url=https://chat.whatsapp.com/HPAxrgYzFSaKS4CEb5vH2H&avatar=https://pps.whatsapp.net/v/t61.24694-24/96086916_266120104761833_8140051011737716308_n.jpg?oe=5ECA9147&oh=b729202775d3a4028a8759029ae378bc&name=🌸Mυℓτɪғαɳɗσɱ🍭"
            className="logo">
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
