import { FC } from 'react';
import './Home.css';
import { Header } from '../../components/Header/index';
import {
  FavouriteHotel,
  Hotel,
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
          <HotelList isFavourite={true} />
        </FavouriteHotel>
        <Hotel />
      </main>
    </div>
  );
};
