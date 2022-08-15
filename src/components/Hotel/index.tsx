import { FC, ReactNode } from 'react';
import { Carousel } from '../Carousel';
import './Hotel.css';

import hotel1 from '../../images/hotel-1.jpg';
import hotel2 from '../../images/hotel-2.jpg';
import hotel3 from '../../images/hotel-3.jpg';
import hotel4 from '../../images/hotel-4.jpg';
import hotel5 from '../../images/hotel-5.jpg';
import { HotelList } from '../HotelList';

interface IHotel {
  children?: ReactNode;
}

const settings = {
  className: 'slider',
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
};

export const Hotel: FC<IHotel> = ({ children }) => {
  return (
    <section className="hotel">
      <div className="hotel__info">
        <h2 className="hotel__city">
          Отели
          <svg
            className="arrow"
            width="11"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.333 9.667 10 1 18.667"
              stroke="#A7A7A7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Москва
        </h2>
        <p className="hotel__start-date">07 июля 2020</p>
      </div>
      <Carousel settings={settings}>
        <div className="slider__item">
          <img className="slider__img" src={hotel1} alt="Отель" />
        </div>
        <div className="slider__item">
          <img className="slider__img" src={hotel2} alt="Отель" />
        </div>
        <div className="slider__item">
          <img className="slider__img" src={hotel3} alt="Отель" />
        </div>
        <div className="slider__item">
          <img className="slider__img" src={hotel4} alt="Отель" />
        </div>
        <div className="slider__item">
          <img className="slider__img" src={hotel5} alt="Отель" />
        </div>
      </Carousel>
      <div className="hotel__list list">
        <h3 className="list__title">
          Добавлено в Избранное:<span>3</span>
          отеля
        </h3>
        <HotelList isFavourite={false} />
      </div>
    </section>
  );
};
