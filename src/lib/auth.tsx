import { LoginParams, getUser, loginWithCredentials } from '@/features/auth';
import storage from '@/utils/storage';

async function handleUserResponse(user: any) {
  storage.setToken(user.token);
  return user;
}

async function loadUser() {
  const token = storage.getToken();
  if (token) {
    const data = await getUser();
    return data;
  }
  return null;
}

async function loginFn(data: LoginParams) {
  const response = await loginWithCredentials(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

export const useAuth = () => ({
  loginFn,
  logoutFn,
  loadUser,
});

export default useAuth;
