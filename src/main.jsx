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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
