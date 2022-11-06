import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Site em desenvolvimento...</h2>
        <p>Em breve um novo site vai surgir.</p>
      </main>
      <nav>
        <a href="/about">Sobre</a>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Quer ter seu site?</h2>
        <p>Já pensou em ter seu site? clica no link abaixo!</p>
        <a href="https://api.whatsapp.com/send?phone=5584996338660&text=Ola,%20vim%20pelo%20site%20for%C3%A7a%20web.">
          Clique aqui
        </a>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function Page404() {
  return (
    <>
      <main>
        <h2>Error 404</h2>
        <p>Page dont exist!</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
