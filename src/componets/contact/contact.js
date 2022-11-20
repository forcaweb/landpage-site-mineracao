import * as React from 'react';
import * as IconAi from 'react-icons/ai';
import * as IconFa from 'react-icons/fa';
import './contact.css';

export default function Contact() {
  return (
    <main className="contact-container">
      <section className="header-contact">
        <h2>
          <IconAi.AiFillPhone /> Contatos
        </h2>
      </section>
      <section className="form-container">
        <form action="/" method="POST">
          <label htmlFor="name">Nome da Empresa:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o nome de sua empresa..."
          />

          <label htmlFor="tell">Telefone:</label>
          <input
            type="text"
            id="tell"
            name="tell"
            placeholder="Digite seu contato de telefone..."
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu contato de email profissional..."
          />
          <button type="submit">Enviar</button>
        </form>
        <h2 className="info-contacts">Nossas redes sociais</h2>
        <nav>
          <li>
            <a href="/">
              <IconFa.FaWhatsappSquare />
            </a>
          </li>
          <li>
            <a href="/">
              <IconFa.FaInstagramSquare />
            </a>
          </li>
          <li>
            <a href="/">
              <IconFa.FaFacebookSquare />
            </a>
          </li>
        </nav>
      </section>
    </main>
  );
}
