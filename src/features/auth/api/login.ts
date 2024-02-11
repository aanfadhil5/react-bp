import { axios } from '@/lib/axios';

export type LoginParams = {
  username: string;
  password: string;
};

export const loginWithCredentials = async (params: LoginParams) => {
  const response = await axios.post('/auth/login', params);
  return response.data;
};
