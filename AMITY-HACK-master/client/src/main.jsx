import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Signin from './routes/signin.jsx';
import Login from './routes/login.jsx';
import Hero from './routes/Hero.jsx';
import Chat from './routes/Chat.jsx';
import Users from './routes/Users.jsx';
import AddUID from './routes/AddUID.jsx';
import Form from './components/doctor/Form.jsx';
import MyRequest from './routes/MyRequest.jsx';
import BPM from './routes/BPM.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/user/:_id",
    element: <Form />,
  },
  {
    path : "my-requests",
    element: <MyRequest />,
  },
  {
    path: "/bpm",
    element: <BPM />,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
