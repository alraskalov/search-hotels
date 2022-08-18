import { FC, ReactNode } from 'react';
import './HotelList.css';
import house from '../../images/house.png';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { IHotel } from '../../redux/stateTypes';
import { dateFormatting, num_word } from '../../utils/utils';
import {
  setFavoriteHotel,
  unsetFavoriteHotel,
} from '../../redux/actions/userActions/userActions';

interface IHotelList {
  children?: ReactNode;
  isFavorites: boolean;
}
const declension = ['день', 'дня', 'дней'];

export const HotelList: FC<IHotelList> = ({ isFavorites }) => {
  const hotels = useSelector((state: RootState) => state?.hotel?.hotels || []);
  const pending = useSelector((state: RootState) => state?.hotel?.pending);
  const favoritesHotels = useSelector(
    (state: RootState) => state?.user?.favoritesHotels || []
  );
  const dispatch = useDispatch();
  const renderStars = (stars: number) => {
    const arrayStars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= stars) {
        arrayStars.push(true);
      } else {
        arrayStars.push(false);
      }
    }
    return arrayStars;
  };

  const handleLikeClick = (hotel: IHotel) => {
    const isLiked = favoritesHotels.some(
      ({ hotelId }) => hotelId === hotel.hotelId
    );

    isLiked
      ? dispatch(unsetFavoriteHotel({ hotel }))
      : dispatch(setFavoriteHotel({ hotel }));
  };
  return (
    <ul className={`favorites__list ${isFavorites ? '' : 'list'}`}>
      {!isFavorites && hotels.length === 0 && !pending && (
        <p className="favorites__list_empty">Ничего не найдо</p>
      )}
      {!isFavorites && pending && <p className="favorites__list_empty">Идет загрузка</p>}
      {(!isFavorites &&
        hotels.map((hotel) => (
          <li key={hotel.hotelId} className="favorites__item item">
            <div className="item__wrapper wrapper">
              {!isFavorites && <img src={house} alt="" />}
              <div className="wrapper__container">
                <div className="item__container">
                  <h3 className="item__title">{hotel.hotelName}</h3>
                  <svg
                    className={`item__like ${
                      favoritesHotels.some(
                        ({ hotelId }) => hotelId === hotel.hotelId
                      )
                        ? 'item__like_active'
                        : ''
                    }`}
                    onClick={() => handleLikeClick(hotel)}
                    width="23"
                    height="20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.38 2.591a5.533 5.533 0 0 0-1.792-1.177 5.61 5.61 0 0 0-4.23 0c-.671.273-1.28.673-1.793 1.177L11.5 3.638 10.435 2.59a5.576 5.576 0 0 0-3.908-1.59 5.576 5.576 0 0 0-3.908 1.59A5.384 5.384 0 0 0 1 6.431c0 1.441.582 2.823 1.619 3.841l1.065 1.047L11.5 19l7.816-7.681 1.065-1.047a5.423 5.423 0 0 0 1.198-1.762 5.348 5.348 0 0 0 0-4.157 5.423 5.423 0 0 0-1.198-1.762Z"
                      fill="#fff"
                      stroke="#C4C4C4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="item__day-start">
                  {dateFormatting(hotel.dateStart)}
                  <span className="item__dash"></span>
                  {`${hotel.dayCount} ${num_word(
                    Number(hotel.dayCount),
                    declension
                  )}`}
                </p>
                <div className="item__container">
                  <div className="item__stars">
                    {renderStars(hotel.stars).map((bool, index) => (
                      <svg
                        // Плохая практика
                        key={index}
                        className={`star ${bool ? 'star_active' : ''}`}
                        width="17"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.66 2.016 6.399 5.032c-.226.544-.417.994-.417.994s-.433.037-.958.077a5254.85 5254.85 0 0 1-4.084.31c-.433.032-.822.063-.864.068L0 6.49l.069.07a6040.13 6040.13 0 0 0 4.595 4.306c.024.018.104-.338-.761 3.343-.36 1.53-.65 2.791-.65 2.791s1.22-.737 2.707-1.65c1.486-.912 2.712-1.656 2.725-1.653.011.003.56.357 1.215.785.657.43 1.636 1.07 2.177 1.422l1.33.869c.19.125.355.227.355.227s.006-.025 0-.056c-.008-.05-.577-2.801-1.09-5.269a77.011 77.011 0 0 1-.223-1.103c0-.019.912-.83 4.21-3.753.361-.32.366-.325.322-.335-.025-.006-1.42-.154-3.1-.33a249.61 249.61 0 0 1-3.084-.332c-.02-.009-.087-.164-.28-.658-.137-.358-.578-1.496-.978-2.531L8.669.38a9.973 9.973 0 0 0-.152-.38c-.005-.007-.39.9-.857 2.015Z"
                          fill="#6C6845"
                        />
                        <path
                          d="M7.66 2.016 6.399 5.032c-.226.544-.417.994-.417.994s-.433.037-.958.077a5254.85 5254.85 0 0 1-4.084.31c-.433.032-.822.063-.864.068L0 6.49l.069.07a6040.13 6040.13 0 0 0 4.595 4.306c.024.018.104-.338-.761 3.343-.36 1.53-.65 2.791-.65 2.791s1.22-.737 2.707-1.65c1.486-.912 2.712-1.656 2.725-1.653.011.003.56.357 1.215.785.657.43 1.636 1.07 2.177 1.422l1.33.869c.19.125.355.227.355.227s.006-.025 0-.056c-.008-.05-.577-2.801-1.09-5.269a77.011 77.011 0 0 1-.223-1.103c0-.019.912-.83 4.21-3.753.361-.32.366-.325.322-.335-.025-.006-1.42-.154-3.1-.33a249.61 249.61 0 0 1-3.084-.332c-.02-.009-.087-.164-.28-.658-.137-.358-.578-1.496-.978-2.531L8.669.38a9.973 9.973 0 0 0-.152-.38c-.005-.007-.39.9-.857 2.015Z"
                          fill="#fff"
                          fillOpacity=".6"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="item__price">
                    Price:
                    <span className="item__price-span">
                      {Math.ceil(hotel.priceAvg).toLocaleString()} ₽
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="item__line"></div>
          </li>
        ))) ||
        (favoritesHotels.length != 0 &&
          favoritesHotels.map((hotel) => (
            <li key={hotel.hotelId} className="favorites__item item">
              <div className="item__wrapper wrapper">
                {!isFavorites && <img src={house} alt="" />}
                <div className="wrapper__container">
                  <div className="item__container">
                    <h3 className="item__title">{hotel.hotelName}</h3>
                    <svg
                      className={`item__like ${
                        hotel ? 'item__like_active' : ''
                      }`}
                      onClick={() => handleLikeClick(hotel)}
                      width="23"
                      height="20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.38 2.591a5.533 5.533 0 0 0-1.792-1.177 5.61 5.61 0 0 0-4.23 0c-.671.273-1.28.673-1.793 1.177L11.5 3.638 10.435 2.59a5.576 5.576 0 0 0-3.908-1.59 5.576 5.576 0 0 0-3.908 1.59A5.384 5.384 0 0 0 1 6.431c0 1.441.582 2.823 1.619 3.841l1.065 1.047L11.5 19l7.816-7.681 1.065-1.047a5.423 5.423 0 0 0 1.198-1.762 5.348 5.348 0 0 0 0-4.157 5.423 5.423 0 0 0-1.198-1.762Z"
                        fill="#fff"
                        stroke="#C4C4C4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="item__day-start">
                    {dateFormatting(hotel.dateStart)}
                    <span className="item__dash"></span>
                    {`${hotel.dayCount} ${num_word(
                      Number(hotel.dayCount),
                      declension
                    )}`}
                  </p>
                  <div className="item__container">
                    <div className="item__stars">
                      {renderStars(hotel.stars).map((bool, index) => (
                        <svg
                          // Плохая практика
                          key={index}
                          className={`star ${bool ? 'star_active' : ''}`}
                          width="17"
                          height="16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.66 2.016 6.399 5.032c-.226.544-.417.994-.417.994s-.433.037-.958.077a5254.85 5254.85 0 0 1-4.084.31c-.433.032-.822.063-.864.068L0 6.49l.069.07a6040.13 6040.13 0 0 0 4.595 4.306c.024.018.104-.338-.761 3.343-.36 1.53-.65 2.791-.65 2.791s1.22-.737 2.707-1.65c1.486-.912 2.712-1.656 2.725-1.653.011.003.56.357 1.215.785.657.43 1.636 1.07 2.177 1.422l1.33.869c.19.125.355.227.355.227s.006-.025 0-.056c-.008-.05-.577-2.801-1.09-5.269a77.011 77.011 0 0 1-.223-1.103c0-.019.912-.83 4.21-3.753.361-.32.366-.325.322-.335-.025-.006-1.42-.154-3.1-.33a249.61 249.61 0 0 1-3.084-.332c-.02-.009-.087-.164-.28-.658-.137-.358-.578-1.496-.978-2.531L8.669.38a9.973 9.973 0 0 0-.152-.38c-.005-.007-.39.9-.857 2.015Z"
                            fill="#6C6845"
                          />
                          <path
                            d="M7.66 2.016 6.399 5.032c-.226.544-.417.994-.417.994s-.433.037-.958.077a5254.85 5254.85 0 0 1-4.084.31c-.433.032-.822.063-.864.068L0 6.49l.069.07a6040.13 6040.13 0 0 0 4.595 4.306c.024.018.104-.338-.761 3.343-.36 1.53-.65 2.791-.65 2.791s1.22-.737 2.707-1.65c1.486-.912 2.712-1.656 2.725-1.653.011.003.56.357 1.215.785.657.43 1.636 1.07 2.177 1.422l1.33.869c.19.125.355.227.355.227s.006-.025 0-.056c-.008-.05-.577-2.801-1.09-5.269a77.011 77.011 0 0 1-.223-1.103c0-.019.912-.83 4.21-3.753.361-.32.366-.325.322-.335-.025-.006-1.42-.154-3.1-.33a249.61 249.61 0 0 1-3.084-.332c-.02-.009-.087-.164-.28-.658-.137-.358-.578-1.496-.978-2.531L8.669.38a9.973 9.973 0 0 0-.152-.38c-.005-.007-.39.9-.857 2.015Z"
                            fill="#fff"
                            fillOpacity=".6"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="item__price">
                      Price:
                      <span className="item__price-span">
                        {Math.ceil(hotel.priceAvg).toLocaleString()} ₽
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="item__line"></div>
            </li>
          ))) || <p className="favorites__list_empty">Список пуст</p>}
    </ul>
  );
};
