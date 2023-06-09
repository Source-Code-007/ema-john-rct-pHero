import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './components/Products/Products';
import Order from './components/Order/Order';
import Checkout from './components/Checkout/Checkout';
import Signin from './components/Signin/Signin';
import SignUp from './components/SignUp/SignUp';
import AuthContext from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { getFromLS } from './utilities/fakeDB';

let router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Products></Products>,
        loader: getFromLS
      },
      {
        path: '/signin',
        element: <Signin></Signin>
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: getFromLS
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: getFromLS
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout /></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  </React.StrictMode>,
)
