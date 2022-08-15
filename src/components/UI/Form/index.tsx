import { FC, FormEventHandler, ReactNode } from 'react';
import './Form.css';

interface IForm {
  title?: string;
  children?: ReactNode;
  formStyle?: string;
  onSubmit: FormEventHandler;
}

export const Form: FC<IForm> = ({ title, children, formStyle, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={`form ${formStyle ? formStyle : ''}`}>
      {title && <h2 className="form__title">{title}</h2>}
      <fieldset className="form__fieldset">{children}</fieldset>
    </form>
  );
};
