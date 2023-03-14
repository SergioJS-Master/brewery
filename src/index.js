/* eslint-disable import/no-extraneous-dependencies */
// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
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
import { store } from './redux/store'

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>,
  // </React.StrictMode>,
)
