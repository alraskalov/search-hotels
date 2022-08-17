import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from '../../components/UI';
import './Login.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userActions/userActions';

type FormValues = {
  email: string;
  password: string;
};

export const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    const { email } = data;
    localStorage.setItem('user', data.email);
    dispatch(setUser({ email }));
    navigate('/');
    reset();
  };

  return (
    <div className="login page__login">
      <Form onSubmit={handleSubmit(onSubmit)} title="Simple Hotel Check">
        <Input
          type="email"
          register={register('email', {
            required: 'Логин не может быть пустым',
            pattern: {
              value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
              message: 'Некорректный формат почты',
            },
          })}
          errors={errors}
          name="email"
          title="Логин"
          style="mb-24"
        />
        <Input
          type="password"
          register={register('password', {
            required: 'Пароль не может быть пустым',
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: 'Пароль может содержать только латинские буквы, цифры',
            },
            minLength: {
              value: 8,
              message: 'Минимальная длина пароля 8 символов',
            },
          })}
          errors={errors}
          name="password"
          title="Пароль"
          style="mb-32"
        />
        <Button isValid={isValid}>Войти</Button>
      </Form>
    </div>
  );
};
