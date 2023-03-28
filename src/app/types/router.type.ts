export type RouterTitle = 'Login' | 'Login/SignUp' | 'Home' | 'NotFound';

export interface RouterType {
  path: string;
  element: JSX.Element;
  children?: Record<string, RouterType>;
}

export type RouterApp = Record<RouterTitle, RouterType>;
