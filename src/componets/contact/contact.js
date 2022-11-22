import * as React from 'react';
import axios from 'axios';
import * as IconAi from 'react-icons/ai';
import * as IconFa from 'react-icons/fa';
import * as IconMd from 'react-icons/md';
import './contact.css';

export default function Contact() {
  let respData = [];
  function sendDataClients(e) {
    e.preventDefault();
    const name = document.getElementById('name');
    const tell = document.getElementById('tell');
    const email = document.getElementById('email');

    const nameMsg = document.getElementById('nameMsg');
    const tellMsg = document.getElementById('tellMsg');
    const emailMsg = document.getElementById('emailMsg');
    const btnEnv = document.getElementById('btn-env');
    const btnActv = document.getElementById('btn-actv');

    axios
      .post('http://localhost:3333', {
        name: name.value,
        tell: tell.value,
        email: email.value,
      })
      .then((response) => {
        respData = response.data;

        if (respData.name_error) {
          nameMsg.style.display = 'block';
          nameMsg.innerText = respData.name_error;
        } else {
          nameMsg.style.display = 'none';
        }

        if (respData.tell_error) {
          tellMsg.style.display = 'block';
          tellMsg.innerText = respData.tell_error;
        } else {
          tellMsg.style.display = 'none';
        }

        if (respData.email_error) {
          emailMsg.style.display = 'block';
          emailMsg.innerText = respData.email_error;
        } else {
          emailMsg.style.display = 'none';
        }

        if (respData.success !== '') {
          btnActv.style.display = 'none';
          btnEnv.style.display = 'flex';
        }
        console.log(respData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <main className="contact-container">
      <section className="header-contact">
        <h2>
          <IconAi.AiFillPhone /> Contatos
        </h2>
      </section>
      <section className="form-container">
        <form onSubmit={sendDataClients} action="/" method="POST">
          <label htmlFor="name">Nome da Empresa:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o nome de sua empresa..."
          />

          <small id="nameMsg">Sem error</small>

          <label htmlFor="tell">Telefone:</label>
          <input
            type="phone"
            id="tell"
            name="tell"
            placeholder="Digite seu contato de telefone..."
          />

          <small id="tellMsg">Sem error</small>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu contato de email profissional..."
          />

          <small id="emailMsg">Sem error</small>

          <button type="submit" id="btn-actv">
            Enviar
          </button>
          <button type="submit" id="btn-env" disabled>
            OK
            <IconMd.MdDone />
          </button>
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
