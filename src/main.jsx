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
import { storedCart } from './utilities/storedCart';
import Checkout from './components/Checkout/Checkout';

let router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Products></Products>,
        loader: storedCart
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: storedCart
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: storedCart
      },
      {
        path: '/checkout',
        element: <Checkout/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
