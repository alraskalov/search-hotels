import { FC, ReactNode } from 'react';
import './Carousel.css';
import Slider from 'react-slick';


interface ICarousel {
  children?: ReactNode;
  settings: object;
}

export const Carousel: FC<ICarousel> = ({ children, settings }) => {
  return <Slider {...settings}>{children}</Slider>;
};
