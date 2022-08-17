import { FC } from 'react';
import './Home.css';
import { Header } from '../../components/Header/index';
import { FavoritesHotel, Hotel, HotelList, Search } from '../../components';

export const Home: FC = () => {
  return (
    <div className="page">
      <Header styles="p-32" />
      <main className="content">
        <Search />
        <FavoritesHotel>
          <HotelList isFavorites={true} />
        </FavoritesHotel>
        <Hotel />
      </main>
    </div>
  );
};
