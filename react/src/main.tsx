import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import Home from './pages/Home.tsx';
import Calc from './pages/Calc.tsx';
import Chat from './pages/Chat.tsx';
import Landing from './pages/Landing.tsx';
import SignUp from './pages/SignUp.tsx';
import ToDo from './pages/ToDo.tsx';
import Weather from './pages/Weather.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/calc",
    element: <Calc />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/todo",
    element: <ToDo />,
  },
  {
    path: "/weather",
    element: <Weather />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
