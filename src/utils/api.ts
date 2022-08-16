import { API_CONFIG } from './constants';

const { URL } = API_CONFIG;

export const getHotels = async (
  location: string,
  dateStart: string,
  dateEnd: string
) => {
  return await fetch(
    `${URL}location=${location}&currency=rub&checkIn=${dateStart}&checkOut=${dateEnd}&limit=10`,
    {
      method: 'GET',
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
