import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import SideBar from './components/SideBar';
import Login from './pages/Login';
import Register from './pages/Register';
import InvoicesPage from './pages/Invoices';
import BillsPage from './pages/Bills';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <>
            <Outlet />
        </>
      ),
      children:[
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ]
    },
    {
      element: (
        <>
            <SideBar anchor='left' />
            <Outlet />
        </>
      ),
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/invoices",
          element: <InvoicesPage />,
        },
        {
          path: "/bills",
          element: <BillsPage />,
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;