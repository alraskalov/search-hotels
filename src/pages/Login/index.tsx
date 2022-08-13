import { FC } from 'react';
import { Form, Input } from '../../components';
import './Login.css';

export const Login: FC = () => {
  return (
    <div className="login page__login">
      <Form title="Simple Hotel Check">
        <Input title="Логин" id="email" name="email" type="email" />
        <Input title="Пароль" id="password" name="password" type="password" />
      </Form>
    </div>
  );
};
