import { FC, MouseEvent, ReactNode, useState } from 'react';
import { Select } from '../UI/Select';
import './FavoritesHotel.css';
import { useDispatch } from 'react-redux';
import {
  filterByPrice,
  filterByStars,
} from '../../redux/actions/userActions/userActions';

interface IFavoritesHotel {
  children?: ReactNode;
}

export const FavoritesHotel: FC<IFavoritesHotel> = ({ children }) => {
  const [priceFilter, setPriceFilter] = useState(true);
  const [starsFilter, setStarsFilter] = useState(true);
  const dispatch = useDispatch();
  const selectClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    if (value === 'price') {
      setPriceFilter(priceFilter ? false : true);
      dispatch(filterByPrice({ type: priceFilter }));
    } else {
      setStarsFilter(starsFilter ? false : true);
      dispatch(filterByStars({ type: starsFilter }));
    }
  };
  return (
    <section className="favorites">
      <div className="favorites__container">
        <h2 className="favorites__title">Избранное</h2>
        <div className="favorites__sort sort mb-32">
          <Select
            filter={starsFilter}
            btnValue="stars"
            onSelectClick={selectClick}
          >
            Рейтинг
          </Select>
          <Select
            filter={priceFilter}
            btnValue="price"
            onSelectClick={selectClick}
          >
            Цена
          </Select>
        </div>
        {children}
      </div>
    </section>
  );
};
