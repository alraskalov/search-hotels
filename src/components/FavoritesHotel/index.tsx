import { FC, MouseEvent, ReactNode } from 'react';
import { Select } from '../UI/Select';
import './FavoritesHotel.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import {
  filterByPrice,
  filterByStars,
} from '../../redux/actions/userActions/userActions';

interface IFavoritesHotel {
  children?: ReactNode;
}

export const FavoritesHotel: FC<IFavoritesHotel> = ({ children }) => {
  const filter = useSelector(
    (state: RootState) => state?.user?.appliedFilter || {}
  );
  const dispatch = useDispatch();

  const selectClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    if (value === 'price') {
      dispatch(filterByPrice());
    } else {
      dispatch(filterByStars());
    }
  };

  return (
    <section className="favorites">
      <div className="favorites__container">
        <h2 className="favorites__title">Избранное</h2>
        <div className="favorites__sort sort mb-32">
          <Select
            filter={filter.stars.type}
            btnValue="stars"
            onSelectClick={selectClick}
          >
            Рейтинг
          </Select>
          <Select
            filter={filter.price.type}
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
