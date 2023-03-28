import { useEffect, useState } from 'react';

const setLocal = <T>(key: string, object: T | undefined): void => {
  localStorage.setItem(key, JSON.stringify(object));
};

const getLocal = <T>(key: string, defaultValue: T | undefined): T => {
  const obj = localStorage.getItem(key);
  return obj ? JSON.parse(obj) : defaultValue;
};

const setSession = <T>(key: string, object: T | undefined): void => {
  sessionStorage.setItem(key, JSON.stringify(object));
};

const getSession = <T>(key: string, defaultValue: T | undefined): T => {
  const obj = sessionStorage.getItem(key);
  return obj ? JSON.parse(obj) : defaultValue;
};

export const useSessionStorage = <T>(key: string, defaultValue: T | undefined): (T | React.Dispatch<React.SetStateAction<T>>)[] => {
  const [value, setValue] = useState<T>(() => {
    return getSession<T>(key, defaultValue);
  });

  useEffect(() => {
    setSession<T>(key, value);
  }, [key, value]);

  return [value, setValue];
};

export const useLocalStorage = <T>(key: string, defaultValue: T | undefined): (T | React.Dispatch<React.SetStateAction<T>>)[] => {
  const [value, setValue] = useState(() => {
    return getLocal<T>(key, defaultValue);
  });

  useEffect(() => {
    setLocal<T>(key, value);
  }, [key, value]);

  return [value, setValue];
};
