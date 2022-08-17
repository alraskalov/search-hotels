import { FC, ReactNode, useEffect } from 'react';
import { Button, Form, Input } from '../UI';
import './Search.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchHotelsRequest } from '../../redux/actions/hotelActions/hotelActions';

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
  const dispatch = useDispatch();

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
    const [dateStart, dayCount] = getValues(['dateStart', 'dayCount']);

    const selectedDayСount = Number(count) | Number(dayCount);
    const date = new Date(dateStart);
    const futureDate = date.getDate() + selectedDayСount;

    date.setDate(futureDate);
    const dateEnd = date.toLocaleDateString('en-CA');

    return dateEnd;
  };

  useEffect(() => {
    const [location, dateStart] = getValues(['location', 'dateStart']);
    const dateEnd = countingDays();

    dispatch(fetchHotelsRequest({ location, dateStart, dateEnd }));
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { location, dateStart, dayCount } = data;
    const dateEnd = countingDays(dayCount);

    dispatch(fetchHotelsRequest({ location, dateStart, dateEnd }));
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
            min: {
              value: new Date().toLocaleDateString('en-Ca'),
              message: 'Дата не может быть меньшей текущей',
            },
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
            pattern: {
              value: /^\d+$/,
              message: 'Введите число',
            },
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
