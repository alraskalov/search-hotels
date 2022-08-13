import { FC, ReactNode } from 'react';
import './Form.css';

interface IForm {
  title: string;
  children?: ReactNode;
}

export const Form: FC<IForm> = ({ title, children }) => {
  return (
    <form className="form">
      <h2 className="form__title">{title}</h2>
      <fieldset className="form__fieldset">{children}</fieldset>
    </form>
  );
};
