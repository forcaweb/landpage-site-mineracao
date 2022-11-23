import * as React from 'react';
import * as IconsBs from 'react-icons/bs';
import * as IconsBi from 'react-icons/bi';
import * as IconsAi from 'react-icons/ai';
import './header.css';

function showMenu() {
  const menuMobile = document.querySelector('.menu-mobile');
  menuMobile.classList.toggle('mShow');
}

export default function Header() {
  return (
    <header className="header-navigation">
      <nav>
        <li>
          <a href="/">
            <h1>
              <IconsBs.BsGem /> Potiguar Minerais
            </h1>
            <p>Exportação em todo o Brasil</p>
          </a>
        </li>
      </nav>

      <nav className="menu">
        <li>
          <a href="/">
            <IconsAi.AiOutlineHome /> Home
          </a>
        </li>
        <li>
          <a href="/about">Quem Somos</a>
        </li>
        <li>
          <a href="/contact" className="link-important">
            Contato
          </a>
        </li>
      </nav>

      <nav className="btn-mobile">
        <li>
          <button type="button" onClick={showMenu}>
            <IconsBi.BiMenuAltRight />
          </button>
        </li>
      </nav>

      <nav className="menu-mobile">
        <span>
          <IconsAi.AiOutlineClose onClick={showMenu} />
        </span>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Quem Somos</a>
        </li>
        <li>
          <a href="/contact">Contato</a>
        </li>
      </nav>
    </header>
  );
}
