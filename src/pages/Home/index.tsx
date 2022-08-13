import { FC } from 'react';
import './Home.css';
import { Header } from '../../components/Header/index';

export const Home: FC = () => {
  return (
    <div className="page">
      <Header styles='p-32'/>
    </div>
  );
};
