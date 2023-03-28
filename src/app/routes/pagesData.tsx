import { NotFound, SignIn, SignUp } from '../pages';

import { RouterApp } from '../types';

export const PagesRoutes: RouterApp = {
  Login: {
    element: <SignIn />,
    path: '/login',
  },
  'Login/SignUp': {
    element: <SignUp />,
    path: '/login/signup',
  },
  Home: {
    element: <SignIn />,
    path: '/home',
  },
  NotFound: {
    element: <NotFound />,
    path: '*',
  },
} as const;