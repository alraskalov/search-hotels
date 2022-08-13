import { FC } from 'react';
import './Header.css';

interface IHeader {
  styles?: string;
}

export const Header: FC<IHeader> = ({ styles }) => {
  return (
    <header className={`header ${styles}`}>
      <h1 className="header__title">Simple Hotel Check</h1>
      <button className="header__logout-btn">
        <p className="header__text">Выйти</p>
      </button>
    </header>
  );
};
