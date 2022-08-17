import { hotelsTypes, userTypes } from './constants';

export interface IHotel {
  hotelId: number | null;
  hotelName: string | null;
  priceAvg: number;
  stars: number;
  dateStart: string;
  dateEnd: string;
}

export interface HotelsState {
  pending: boolean;
  hotels: IHotel[];
  location: string | null;
  dateStart: string | Date;
  error: string | null;
}

export interface UserState {
  email: string;
  favoritesHotels: IHotel[];
}


