import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import AppLayout from './Layout/AppLayout';
import Users from './pages/Users';
import Products from './pages/Products';
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/analytics',
          element: <Analytics />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/users',
          element: <Users />,
        },
        {
          path: '/settings',
          element: <Settings />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
