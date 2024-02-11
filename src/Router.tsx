import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/Home.page';
import { TestPage } from './pages/TestPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
