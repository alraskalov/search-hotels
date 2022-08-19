import { FC, ReactNode } from 'react';
import { Carousel } from '../Carousel';
import './Hotel.css';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { num_word, dateFormatting } from '../../utils/utils';

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

const declension = ['отель', 'отеля', 'отелей'];

export const Hotel: FC<IHotel> = ({ children }) => {
  const { dateStart, location } = useSelector(
    (state: RootState) => state?.hotel
  );
  const favoritesHotel = useSelector(
    (state: RootState) => state?.user?.favoritesHotels
  );
  const hotelImage = useSelector((state: RootState) => state?.hotel?.image);
  const date = dateFormatting(dateStart);

  return (
    <section className="hotel">
      <div className="hotel__info">
        <h2 className="hotel__city">
          Отели
          {location && (
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
          )}
          {location}
        </h2>
        <p className="hotel__start-date">{date != 'Invalid Date' && date}</p>
      </div>
      <Carousel settings={settings}>
        {hotelImage.map((img) => (
            <img className="carousel__img" src={img} alt="Отель" />
        ))}
      </Carousel>
      <div className="hotel__list list">
        <h3 className="list__title">
          Добавлено в Избранное:
          <span>{favoritesHotel.length}</span>
          {num_word(favoritesHotel.length, declension)}
        </h3>
        {children}
      </div>
    </section>
  );
};
