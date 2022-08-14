import { FC, ReactNode } from 'react';
import './Input.css';

interface IInput {
  title: string;
  id: string;
  type: 'email' | 'password' | 'text' | 'date';
  name: string;
  style?: string;
  labelStyle?: string;
  children?: ReactNode;
}

export const Input: FC<IInput> = ({ title, type, id, name, style, labelStyle }) => {
  return (
    <label className={`label ${style} ${labelStyle ? labelStyle : ''}`}>
      {title}
      <input className="label__input" id={id} name={name} type={type} />
    </label>
  );
};
