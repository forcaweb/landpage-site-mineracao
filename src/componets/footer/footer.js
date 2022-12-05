import * as React from 'react';
import * as IconAi from 'react-icons/ai';
import * as IconFa from 'react-icons/fa';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footerContainer">
      <section className="boxContainer">
        <h2>Informações da empresa</h2>
        <div className="box">
          <IconAi.AiFillPhone />
          <p>
            <a href="/">(84) 0 9999-1234</a>
          </p>
        </div>
        <div className="box">
          <IconFa.FaMapMarkedAlt />
          <p>Rua Aurino Vila, 412 - Parnamirim - Natal - RN CEP-59.148-590</p>
        </div>
        <div className="box">
          <IconAi.AiOutlineFieldTime />
          <p>De seg. á Sex. das 06:00 ás 17:00</p>
        </div>
      </section>
      <section className="creditContainer">
        <p>
          Todos os direitos reservados a Potiguar Minerais. Site criado por{' '}
          <a href="https:forcaweb.net">Força Web</a>. Potiguar Minerais e
          Comercio Eireli – CNPJ 23.758.482/0001-49
        </p>
      </section>
    </footer>
  );
}
