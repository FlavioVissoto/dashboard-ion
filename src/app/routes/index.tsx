import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login, NotFound } from '../pages';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
