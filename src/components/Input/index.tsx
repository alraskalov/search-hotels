import { FC, ReactNode } from 'react';
import './Input.css';

interface IInput {
  title: string;
  id: string;
  type: 'email' | 'password';
  name: string
  children?: ReactNode;
}

export const Input: FC<IInput> = ({ title, type, id, name, children }) => {
  return (
    <label className="label">
      {title}
      <input className="label__input" id={id} name={name} type={type} />
    </label>
  );
};
