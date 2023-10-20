import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainRoot from './components/MainRoot/MainRoot';
import Home from './components/Home/Home';
import Login from './components/Register/Login/Login';
import Register from './components/Register/Login/Register';
import AddProduct from './components/AddProduct/AddProduct';
import Update from './components/MyCart/Update';
import AuthProvider from './components/AuthProvider/AuthProvider';
import BrandDetails from './components/Home/BrandDetails';
import DetailsButton from './components/Home/DetailsButton';
import MyCart from './components/MyCart/MyCart';
import PrivateRoute from './PrivateRoute';
import ErrorPage from './ErrorPage';
// import MyCartInfo from './components/MyCart/MyCartInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('carData.json')
      },
      {
        path: "/Login",
        element: <Login></Login>
      },
      {
        path: "/Register",
        element: <Register></Register>
      },
      {
        path: "/AddProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/MyCart",
        element: <PrivateRoute> <MyCart></MyCart></PrivateRoute>,
        loader: () => fetch(`http://localhost:5000/cart`)
      },
      // {
      //   path: "/cart",
      //   element:<MyCartInfo></MyCartInfo>,
      //   loader: () => fetch(`https://assignment-10-e-m.vercel.app/cart`)
      // },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://assignment-10-e-m.vercel.app/cars/${params.id}`)
      },
      {
        path: "/brandDetails/:id",
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch('https://assignment-10-e-m.vercel.app/cars')
      },
      {
        path: "/cars/:id",
        element: <PrivateRoute><DetailsButton></DetailsButton></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-e-m.vercel.app/cars/${params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
