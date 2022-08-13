import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/signin" element={<Login />} />
      <Route path="*" />
    </Routes>
  );
};

export default App;
