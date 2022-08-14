import { FC, ReactNode } from 'react';
import './Select.css';

interface ISelect {
  children: ReactNode;
}

export const Select: FC<ISelect> = ({ children }) => {
  return (
    <button className="sort__btn btn">
      {children}
      <div className="btn__select select">
        <svg
          className="select__arrow"
          width="9"
          height="6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m8.5 4.243-1.06 1.06-3.183-3.182-3.182 3.182-1.06-1.06L4.257 0 8.5 4.243Z"
            fill="#000"
            fillOpacity=".32"
          />
        </svg>
        <svg
          className="select__arrow"
          width="9"
          height="7"
          viewBox="0 0 9 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z"
            fill="#000"
            fillOpacity=".32"
          />
        </svg>
      </div>
    </button>
  );
};
