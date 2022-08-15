import { FC, ReactNode } from 'react';
import './Button.css';

interface IButton {
  children?: ReactNode;
  isValid: boolean;
}

export const Button: FC<IButton> = ({ children, isValid }) => {
  return (
    <button
      className={`button ${isValid ? 'button_active' : ''}`}
      type="submit"
      disabled={!isValid}
    >
      {children}
    </button>
  );
};
