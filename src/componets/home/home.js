import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './home.css';

export default function Home() {
  return (
    <main>
      <section className="categories">
        <Swiper navigation modules={[Navigation]}>
          <SwiperSlide>
            <section className="content">
              <div className="image">
                <img
                  src="https://st3.depositphotos.com/5344180/36043/i/600/depositphotos_360437638-stock-photo-raw-manganese-manganese-stone-isolated.jpg"
                  alt=""
                />
              </div>
              <div className="descriptions">
                <h2>Manganês</h2>
                <small>Elemento químico</small>
                <p>
                  Manganês é um metal duro e frágil. Trata-se também de um
                  nutriente essencial a organismos vivos. Além disso, é muito
                  utilizado na metalurgia, aumentando a qualidade de ligas. O
                  manganês (Mn) é um metal de transição com número atômico 25.
                </p>
                <nav>
                  <li>
                    <a href="/">Fale conosco</a>
                  </li>
                </nav>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="content">
              <div className="image">
                <img
                  src="https://st3.depositphotos.com/5344180/36043/i/600/depositphotos_360437638-stock-photo-raw-manganese-manganese-stone-isolated.jpg"
                  alt=""
                />
              </div>
              <div className="descriptions">
                <h2>Manganês</h2>
                <small>Elemento químico</small>
                <p>
                  Manganês é um metal duro e frágil. Trata-se também de um
                  nutriente essencial a organismos vivos. Além disso, é muito
                  utilizado na metalurgia, aumentando a qualidade de ligas. O
                  manganês (Mn) é um metal de transição com número atômico 25.
                </p>
                <nav>
                  <li>
                    <a href="/">Fale conosco</a>
                  </li>
                </nav>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="content">
              <div className="image">
                <img
                  src="https://st3.depositphotos.com/5344180/36043/i/600/depositphotos_360437638-stock-photo-raw-manganese-manganese-stone-isolated.jpg"
                  alt=""
                />
              </div>
              <div className="descriptions">
                <h2>Manganês</h2>
                <small>Elemento químico</small>
                <p>
                  Manganês é um metal duro e frágil. Trata-se também de um
                  nutriente essencial a organismos vivos. Além disso, é muito
                  utilizado na metalurgia, aumentando a qualidade de ligas. O
                  manganês (Mn) é um metal de transição com número atômico 25.
                </p>
                <nav>
                  <li>
                    <a href="/">Fale conosco</a>
                  </li>
                </nav>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
}
