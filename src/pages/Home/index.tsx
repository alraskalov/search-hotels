import { FC } from 'react';
import './Home.css';
import { Header } from '../../components/Header/index';
import { Button, Form, Input } from '../../components';

export const Home: FC = () => {
  return (
    <div className="page">
      <Header styles="p-32" />
      <main className="content">
        <section className="search">
          <Form formStyle="form__search">
            <Input
              title="Локация"
              id="location"
              type="text"
              name="location"
              labelStyle="label__search"
            />
            <Input
              title="Дата заселения"
              id="date-start"
              type="date"
              name="date-start"
              style="m-16"
              labelStyle="label__search"
            />
            <Input
              title="Количество дней"
              id="day-count"
              type="text"
              name="day-count"
              style="mb-32"
              labelStyle="label__search"
            />
            <Button>Найти</Button>
          </Form>
        </section>
      </main>
    </div>
  );
};
