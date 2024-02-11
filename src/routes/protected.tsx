import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayout } from '@/components/Layout/MainLayout';
import { RouterTransition } from '@/components/RouterTransition';

const App = () => (
  <MainLayout>
    <Suspense fallback={<RouterTransition />}>
      <Outlet />
    </Suspense>
  </MainLayout>
);

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [],
  },
];
