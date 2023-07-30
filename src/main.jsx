import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Chat from './pages/Chat'
import Register from './pages/Register'
import Login from './pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import App from './App'
import AuthContext from './Context/AuthContext'
import Home from './pages/Home'



const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />

      },
      {
        path: "/chat",
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
        element: <Home />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
    <RouterProvider router={routes} />
  </AuthContext>
)
