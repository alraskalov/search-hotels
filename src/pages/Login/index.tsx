import { FC } from 'react';
import { Button, Form, Input } from '../../components';
import './Login.css';

export const Login: FC = () => {
  return (
    <div className="login page__login">
      <Form title="Simple Hotel Check">
        <Input title="Логин" id="email" name="email" type="email" style='mb-24' />
        <Input title="Пароль" id="password" name="password" type="password" style='mb-32' />
        <Button>Войти</Button>
      </Form>
    </div>
  );
};
