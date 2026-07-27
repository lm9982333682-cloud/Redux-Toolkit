import React from 'react'

import MainLayout from './layout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Employees from './pages/Employees';
import Shoping from './pages/Shoping';
import Register from './pages/Register'
import Login from './pages/Login'
import AuthLayout from './layout/AuthLayout'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        }, {
          path: '/cart',
          element: <Cart />
        }, {
          path: '/rpoduct-details/:id',
          element: <ProductDetails />
        }, {
          path: '/employees',
          element:<AuthLayout> <Employees /></AuthLayout> 
        }, {
          path: '/shoping',
          element: <Shoping />
        },
      ]
    },
    {
      path: '/register',
      element: <Register />
    }, {
      path: '/login',
      element: <Login />
    }
  ])



  return (<RouterProvider router={router} />)
}

export default App
