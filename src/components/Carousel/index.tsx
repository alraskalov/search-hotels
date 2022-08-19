import { FC, ReactNode } from 'react';
import './Carousel.css';
import Slider from 'react-slick';

interface ICarousel {
  children?: ReactNode;
  settings: object;
}

export const Carousel: FC<ICarousel> = ({ children, settings }) => {
  return (
    <div className="carousel">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
