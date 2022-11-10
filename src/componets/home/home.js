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
