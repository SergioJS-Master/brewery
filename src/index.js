import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Main } from './components/Pages/Main/Main'
import { SignIn } from './components/Pages/SignIn/SignIn'
import { SignUp } from './components/Pages/SignUp/SignUp'
import { Bars } from './components/Pages/Bars/Bars'
import { About } from './components/Pages/About/About'
import { Favorite } from './components/Pages/Favorite/Favorite'
import { News } from './components/Pages/News/News'
import { Catalog } from './components/Pages/Catalog/Catalog'
import { User } from './components/Pages/User/User'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: 'signin',
          element: <SignIn />,
        },
        {
          path: 'signup',
          element: <SignUp />,
        },
        {
          path: 'bars',
          element: <Bars />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'favorite',
          element: <Favorite />,
        },
        {
          path: 'news',
          element: <News />,
        },
        {
          path: 'user',
          element: <User />,
        },
        {
          path: 'catalog',
          element: <Catalog />,
        },
      ],
    },
  ],
  // { basename: '/brewery/' },
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
