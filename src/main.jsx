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
import MyCart from './components/MyCart/MyCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    children: [
      {
        path: "/",
        element: <Home></Home>
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
        element: <AddProduct></AddProduct>
      },
      {
        path: "/MyCart",
        element: <MyCart></MyCart>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
