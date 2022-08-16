import { FC, ReactNode, useEffect } from 'react';
import { Button, Form, Input } from '../UI';
import './Search.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getHotels } from '../../utils/api';

interface ISearch {
  children?: ReactNode;
}

type FormValues = {
  location: string;
  dateStart: string;
  dayCount: string;
};

export const Search: FC<ISearch> = () => {
  const dateStart = new Date().toLocaleDateString('en-CA');

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      location: 'Москва',
      dateStart: `${dateStart}`,
      dayCount: '1',
    },
  });

  const countingDays = (count?: string) => {
    const dayCount = Number(count) | Number(getValues('dayCount'));
    const date = new Date();
    const futureDate = date.getDate() + dayCount;
    date.setDate(futureDate);
    const dateEnd = date.toLocaleDateString('en-CA');
    return dateEnd;
  };

  useEffect(() => {
    const [location, dateStart] = getValues(['location', 'dateStart']);
    const dateEnd = countingDays();

    getHotels(location, dateStart, dateEnd)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { location, dateStart, dayCount } = data;
    const dateEnd = countingDays(dayCount);

    getHotels(location, dateStart, dateEnd)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="search">
      <Form onSubmit={handleSubmit(onSubmit)} formStyle="form__search">
        <Input
          register={register('location', {
            required: 'Поле не может быть пустым',
          })}
          errors={errors}
          title="Локация"
          type="text"
          name="location"
          style="mb-16"
          labelStyle="label__search"
        />
        <Input
          register={register('dateStart', {
            required: 'Поле не может быть пустым',
          })}
          errors={errors}
          title="Дата заселения"
          type="date"
          name="dateStart"
          style="mb-16"
          labelStyle="label__search"
        />
        <Input
          register={register('dayCount', {
            required: 'Поле не может быть пустым',
          })}
          errors={errors}
          title="Количество дней"
          type="text"
          name="dayCount"
          style="mb-32"
          labelStyle="label__search"
        />
        <Button isValid={isValid}>Найти</Button>
      </Form>
    </section>
  );
};
