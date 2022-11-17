import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as IconAi from 'react-icons/ai';
import * as IconSi from 'react-icons/si';
import * as IconBs from 'react-icons/bs';
import * as IconBi from 'react-icons/bi';
import { Navigation } from 'swiper';
import infoSlider from '../../utils/infoSliderHome';
import 'swiper/swiper-bundle.min.css';
import './home.css';

export default function Home() {
  return (
    <main>
      <section className="header-blocks">
        <h2 className="hdr">Nossas exportações:</h2>
        <p className="dcpt">Confira os minerais que trabalhamos.</p>
      </section>

      <section className="categories">
        <Swiper navigation modules={[Navigation]}>
          {infoSlider.map((item) => (
            <SwiperSlide key={item.id}>
              <section className="content">
                <div className="image">
                  <img src={item.img} alt="" />
                </div>
                <div className="descriptions">
                  <h2>{item.tittle}</h2>
                  <small>{item.subTittle}</small>
                  <p>{item.description}</p>
                  <nav>
                    <li>
                      <a href="/">Fale conosco</a>
                    </li>
                  </nav>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="header-blocks">
        <h2 className="hdr">Qualidade e Responsabilidade</h2>
        <p className="dcpt">
          Trabalhamos com amor para a satisfação do cliente
        </p>
      </section>

      <section className="container-info">
        <article className="card">
          <div className="icon">
            <IconAi.AiFillLike />
          </div>
          <div className="content">
            <h2>Satisfação</h2>
            <p>
              Nossa equipe de profissionais, esta sempre ativo para te trazer
              uma boa expêriencia.
            </p>
          </div>
        </article>

        <article className="card">
          <div className="icon">
            <IconBi.BiTask />
          </div>
          <div className="content">
            <h2>Responsabilidade</h2>
            <p>Tratamos nosso trabalho se colocando no lugar do cliente.</p>
          </div>
        </article>

        <article className="card">
          <div className="icon">
            <IconBs.BsBookmarkHeartFill />
          </div>
          <div className="content">
            <h2>Confiança</h2>
            <p>
              Confiança é algo que se conquista. Nosso dever e objetivo
              conquistar a sua confiança. Confira mais abaixo uns de nossos
              clientes.
            </p>
          </div>
        </article>

        <article className="card">
          <div className="icon">
            <IconSi.SiSpeedtest />
          </div>
          <div className="content">
            <h2>Agilidade</h2>
            <p>
              Não perdemos tempo sabendo que tempo é dinheiro. Seu tempo é
              valioso para nós.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
