import { FC, useEffect } from 'react';
import './Home.css';
import { Header } from '../../components/Header/index';
import { FavoritesHotel, Hotel, HotelList, Search } from '../../components';
import { useDispatch } from 'react-redux';
import { loadFavoriteHotel } from '../../redux/actions/userActions/userActions';

export const Home: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFavoriteHotel());
  }, []);
  return (
    <div className="page">
      <Header styles="p-32" />
      <main className="content">
        <Search />
        <FavoritesHotel>
          <HotelList isFavorites={true} />
        </FavoritesHotel>
        <Hotel>
          <HotelList isFavorites={false} />
        </Hotel>
      </main>
    </div>
  );
};
