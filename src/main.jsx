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
import Update from './components/MyCart/Update';
import DetailsCard from './components/MyCart/DetailsCard';
import AuthProvider from './components/AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('carData.json')
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
        element: <MyCart></MyCart>,
        loader: ()=> fetch(`http://localhost:5000/cars`)
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params})=> fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: "/details/:id",
        element: <DetailsCard></DetailsCard>,
        loader: ({params})=> fetch(`http://localhost:5000/cars/${params.id}`)
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
