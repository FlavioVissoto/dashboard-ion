import axios, { AxiosResponse } from 'axios';
import { Token, User } from '../types';

import { CONSTANTS } from '../shared/constant';
import { useSessionStorage } from './storage.service';

const API_URL = 'https://oyster-app-xjrn8.ondigitalocean.app/user';

const login = async (user: User): Promise<Token> => {
  return axios
    .post<Token>(API_URL + '/signin', {
      nm_email: user.email,
      nm_pass: user.pass,
    })
    .then((response: AxiosResponse<Token, any>) => {
      if (response && response.data) {
        const [token, setToken] = useSessionStorage<Token>(CONSTANTS.token, response.data);
        //   console.log(token, setToken);
      }
      return response.data;
    });
};

export const AuthService = {
  login,
};
