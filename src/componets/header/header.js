import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/bs';
import './header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <li>
          <Link to="/">
            <h1>
              <Icons.BsGem /> Potiguar Minerais
            </h1>
            <p>Mineração em todo o Brasil</p>
          </Link>
        </li>
      </nav>

      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre nós</Link>
        </li>
      </nav>
    </header>
  );
}
