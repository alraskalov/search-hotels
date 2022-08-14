import { FC, ReactNode } from 'react';
import { Select } from '../Select';
import './FavouriteHotel.css';

interface IFavouriteHotel {
  children?: ReactNode;
}

export const FavouriteHotel: FC<IFavouriteHotel> = ({ children }) => {
  return (
    <section className="favourites">
      <div className="favourites__container">
        <h2 className="favourites__title">Избранное</h2>
        <div className="favourites__sort sort mb-32">
          <Select>Рейтинг</Select>
          <Select>Цена</Select>
        </div>
        {children}
      </div>
    </section>
  );
};
