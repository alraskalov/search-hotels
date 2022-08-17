import { FC, ReactNode } from 'react';
import { Select } from '../UI/Select';
import './FavoritesHotel.css';

interface IFavoritesHotel {
  children?: ReactNode;
}

export const FavoritesHotel: FC<IFavoritesHotel> = ({ children }) => {
  return (
    <section className="favorites">
      <div className="favorites__container">
        <h2 className="favorites__title">Избранное</h2>
        <div className="favorites__sort sort mb-32">
          <Select>Рейтинг</Select>
          <Select>Цена</Select>
        </div>
        {children}
      </div>
    </section>
  );
};
