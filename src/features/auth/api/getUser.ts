import { axios } from '@/lib/axios';

export const getUser = async () => {
  const response = await axios.get('/personal/my-profile');
  return response.data;
};
