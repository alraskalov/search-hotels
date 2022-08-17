import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Home, Login } from './pages';

const App: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/');
    } else {
      navigate('/signin');
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Login />} />
      <Route path="*" />
    </Routes>
  );
};

export default App;
