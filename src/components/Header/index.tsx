import { FC } from 'react';
import './Header.css';
import { userLogout } from '../../redux/actions/userActions/userActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface IHeader {
  styles?: string;
}

export const Header: FC<IHeader> = ({ styles }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      dispatch(userLogout());
      localStorage.clear();
      navigate('/signin');
    }
  };
  return (
    <header className={`header ${styles}`}>
      <h1 className="header__title">Simple Hotel Check</h1>
      <button onClick={onClickLogout} className="header__logout-btn">
        <p className="header__text">Выйти</p>
      </button>
    </header>
  );
};
