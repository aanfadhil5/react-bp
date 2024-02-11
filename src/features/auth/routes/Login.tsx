import { useNavigate } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  const navigate = useNavigate();
  const onSuccess = () => navigate('/');
  return (
    <Layout title="Login">
      <LoginForm onSuccess={onSuccess} />
    </Layout>
  );
};
