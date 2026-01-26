import App from './App';
import {
  ErrorPage,
  HomePage,
  LoginPage,
  PostPage,
  RegisterPage,
} from '@/pages';
import { MainLayout, AuthLayout } from '@/components/layout';
import { Navigate } from 'react-router';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'posts/slug/:slug', element: <PostPage /> },
        ],
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          { index: true, element: <Navigate to="login" replace /> },
          { path: 'register', element: <RegisterPage /> },
          { path: 'login', element: <LoginPage /> },
        ],
      },
    ],
  },
];

export default routes;
