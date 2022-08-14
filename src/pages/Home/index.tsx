import { FC } from 'react';
import './Home.css';
import { Header } from '../../components/Header/index';
import {
  FavouriteHotel,
  HotelList,
  Search,
} from '../../components';

export const Home: FC = () => {
  return (
    <div className="page">
      <Header styles="p-32" />
      <main className="content">
        <Search />
        <FavouriteHotel>
          <HotelList />
        </FavouriteHotel>
      </main>
    </div>
  );
};
