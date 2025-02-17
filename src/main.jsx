import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import Dashboard from './routes/dashboard/Dashboard';
import Chatpage from './routes/chatPage/Chatpage';
import Homepage from './routes/homepage/homepage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/dashboard",
    children:[{path:"/dashboard",element:<Dashboard/>},
      {path:"/dashboard/chats/:id", element:<Chatpage/>}]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
