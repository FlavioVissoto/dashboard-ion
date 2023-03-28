import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RouterTitle } from '../types';
import { PagesRoutes } from './pagesData';

export const RouterApp = () => {
  const pageRoutes: JSX.Element[] = Object.keys(PagesRoutes).map((title: string) => {
    const el = PagesRoutes[title as RouterTitle];
    return <Route path={el.path} element={el.element} key={title} />;
  });

  console.log(PagesRoutes);

  return (
    <BrowserRouter>
      <Routes>{pageRoutes}</Routes>
    </BrowserRouter>
  );
};
