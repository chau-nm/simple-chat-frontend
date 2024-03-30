import Conversation from 'features/Conversation';
import Login from 'features/Login';
import AppLayout from 'layouts/AppLayout';
import LoginLayout from 'layouts/LoginLayout';
import { type FC } from 'react';
import { useRoutes } from 'react-router-dom';

export const BaseRoute: FC = () => {
  const routers = useRoutes([
    {
      path: '/login',
      element: (
        <LoginLayout>
          <Login />
        </LoginLayout>
      ),
    },
    {
      path: '/home',
      element: (
        <AppLayout>
          <Conversation />
        </AppLayout>
      ),
    },
  ]);
  return routers;
};
