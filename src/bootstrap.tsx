import { ABBBackooficeUIProvider } from '@abb/backoffice-ui';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import App from './App';

export const dashboardRemoteAppRoutes = () => [
  {
    path: 'abb-mf-pledge/*',
    element: <App />
  }
];

const APPRouter = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <h1>Error</h1>,
    children: [...dashboardRemoteAppRoutes()]
  }
]);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <ABBBackooficeUIProvider>
    <RouterProvider router={APPRouter} />
  </ABBBackooficeUIProvider>
);
