import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import infoSlider from '../../utils/infoSliderHome';
import 'swiper/swiper-bundle.min.css';
import './home.css';

export default function Home() {
  return (
    <main>
      <section className="categories">
        <h2 className="hdr">Nossas exportações:</h2>
        <p className="dscpt">Conheça alguns dos minerais que trabalhamos.</p>
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

      <section className="container-info">
        <h2>TEXTO</h2>
        <article />
      </section>
    </main>
  );
}
