/* eslint-disable @typescript-eslint/no-explicit-any */
import { LOGIN } from 'apis/endponts';
import { type AxiosResponse } from 'axios';
import { baseAxios } from 'lib/axios/baseAxios';
import { type SignInResponseType, type SignInType } from 'types';

export const login = async ({
  username,
  password,
}: SignInType): Promise<AxiosResponse<SignInResponseType>> => {
  return await baseAxios.post(LOGIN, { username, password });
};
