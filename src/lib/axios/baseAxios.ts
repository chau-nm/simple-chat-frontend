import { BASE_URL } from 'apis/endponts';
import axios, { type AxiosInstance } from 'axios';

const baseAxios: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export { baseAxios };
