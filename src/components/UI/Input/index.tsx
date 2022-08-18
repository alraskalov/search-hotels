import { FC, ReactNode } from 'react';
import './Input.css';

interface IInput {
  title: string;
  type: string;
  style?: string;
  name: string;
  labelStyle?: string;
  children?: ReactNode;
  register: object;
  errors: {
    [key: string]: {
      message?: string | undefined
    }
  };
}

export const Input: FC<IInput> = ({
  title,
  style,
  labelStyle,
  register,
  errors,
  name,
  type,
}) => {
  console.log(errors);

  return (
    <>
      <label
        className={`label ${errors[name] ? 'label_error' : ''} ${style} ${
          labelStyle ? labelStyle : ''
        }`}
      >
        {title}
        <input
          {...register}
          className={`label__input ${errors[name] ? 'label__input_error' : ''}`}
          type={type}
        />
        {errors[name] && <p className="error">{errors[name]?.message}</p>}
      </label>
    </>
  );
};
