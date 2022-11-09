import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import imgs from '../../assets/img/imgs';
import 'swiper/swiper-bundle.min.css';
import './home.css';

const infoSlider = [
  {
    id: 1,
    tittle: 'Manganês',
    subTittle: 'Elemento químico',
    description:
      'Manganês é um metal duro e frágil. Trata-se também de um nutriente essencial a organismos vivos. Além disso, é muito utilizado na metalurgia, aumentando a qualidade de ligas. O manganês (Mn) é um metal de transição com número atômico 25.',
    img: imgs.manganes,
  },
  {
    id: 2,
    tittle: 'Manganês 2',
    subTittle: 'Elemento químico',
    description:
      'Manganês é um metal duro e frágil. Trata-se também de um nutriente essencial a organismos vivos. Além disso, é muito utilizado na metalurgia, aumentando a qualidade de ligas. O manganês (Mn) é um metal de transição com número atômico 25.',
    img: imgs.manganes,
  },
];

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
