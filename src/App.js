import * as React from 'react';
import env from 'react-dotenv';
import { Routes, Route } from 'react-router-dom';
import Home from './componets/home/home';
import About from './componets/about/about';
import Page404 from './componets/page404/page404';
import Header from './componets/header/header';
import './App.css';

export default function App() {
  console.log(env);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}
