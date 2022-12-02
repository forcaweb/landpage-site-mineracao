import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as IconAi from 'react-icons/ai';
import * as IconSi from 'react-icons/si';
import * as IconBs from 'react-icons/bs';
import * as IconBi from 'react-icons/bi';
import { Navigation, Pagination, Autoplay } from 'swiper';
import env from 'react-dotenv';
import infoSlider from '../../utils/infoSliderHome';
import partners from '../../utils/partners';

import 'swiper/swiper-bundle.min.css';

import './home.css';

export default function Home() {
  return (
    <main className="all-content">
      <section className="categories">
        <section className="header-blocks">
          <h2 className="hdr">Potiguar Minerais</h2>
          <p className="dcpt">
            Exportações em todo o Brasil, do Rio Grande do Norte para Brasil.
          </p>
        </section>
      </section>

      <section className="container-info">
        <section className="header-blocks">
          <h2 className="hdr">Qualidade e Responsabilidade</h2>
          <p className="dcpt">
            Trabalhamos com amor para a satisfação do cliente
          </p>
        </section>
        <div className="container-card">
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
        </div>
      </section>

      <section className="goContact-container">
        <section className="header-blocks">
          <h2 className="hdr">Ficou interessado?</h2>
          <p className="dcpt">
            Trabalhe com quem entende do assunto, mande um email e entraremos em
            contato
          </p>
        </section>
        <nav>
          <li>
            <a href="/contact">Entrar em contato</a>
          </li>
        </nav>
      </section>

      <section className="galery-container">
        <section className="header-blocks">
          <h2 className="hdr">Nossas exportações:</h2>
          <p className="dcpt">Confira os minerais que trabalhamos.</p>
        </section>
        <Swiper navigation modules={[Navigation]}>
          <SwiperSlide>
            <section className="content">
              <div className="image">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/FXol5v6E3p8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <div className="descriptions">
                <h2>Imagens de trabalho</h2>
                <small>Capturados em nossos trabalhos pelo Brasil.</small>
                <p>Trabalhamos com grandes empresas.</p>
                <nav>
                  <li>
                    <a href="/contact">Fale conosco</a>
                  </li>
                </nav>
              </div>
            </section>
          </SwiperSlide>
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
                      <a href="/contact">Fale conosco</a>
                    </li>
                  </nav>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="partners-container">
        <section className="header-blocks">
          <h2 className="hdr">Nossos parceiros:</h2>
          <p className="dcpt">Trabalhamos com os melhores.</p>
        </section>
        <section className="partners">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation
            breakpoints={{
              769: {
                slidesPerView: 2,
              },
              1080: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 3000,
              speed: 3000,
              disableOnInteraction: false,
            }}
            loop
            modules={[Navigation, Autoplay]}
          >
            {partners.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={`${env.BASE_URL_PROD}/img/${item.img}`} alt="logo" />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
    </main>
  );
}
