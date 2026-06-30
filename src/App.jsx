import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import AppLayout from './Layout/AppLayout';
import Users from './pages/Users';
import Products from './pages/Products';
import ProtectedRoute from './routes/ProtectedRoute';
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'analytics',
          element: <Analytics />,
        },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: 'users',
          element: <Users />,
        },
        {
          path: 'settings',
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
