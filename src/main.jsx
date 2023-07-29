import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Chat from './pages/Chat'
import App from './App'
import Register from './pages/Register'
import Login from './pages/Login'


const routes = createBrowserRouter([{
  path: "/",
  element: <Chat />,
  errorElement: <h2>Page Not Found</h2>,
},
{
  path: "/register",
  element: <Register />
},
{
  path: "/login",
  element: <Login />
},
{
  path: "*",
  element: <Chat />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} >
    <App />
  </RouterProvider>
)
