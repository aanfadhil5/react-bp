import { Button, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import useAuth from '@/lib/auth';

type LoginFormValues = {
  username: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { loginFn } = useAuth();
  const form = useForm<LoginFormValues>({
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      username: (value) => (value.length < 2 ? 'Invalid username' : null),
      password: (value) => (value.length < 2 ? 'Invalid password' : null),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        loginFn(values);
        onSuccess();
      })}
    >
      <TextInput
        withAsterisk
        label="Username"
        placeholder="Username"
        {...form.getInputProps('username')}
      />

      <PasswordInput
        withAsterisk
        label="Password"
        placeholder="Password"
        {...form.getInputProps('password')}
      />

      <Button type="submit">Login</Button>
    </form>
  );
};
