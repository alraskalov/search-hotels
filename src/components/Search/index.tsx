import { FC, ReactNode } from 'react';
import { Button, Form, Input } from '../UI';
import './Search.css';

interface ISearch {
  children?: ReactNode;
}

export const Search: FC<ISearch> = () => {
  return (
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
  );
};
