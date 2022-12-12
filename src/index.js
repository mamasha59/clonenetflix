import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './components/User/User';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <User/>,
    errorElement: <ErrorScreen/>,
  },
  {
    path: "/movie",
    element: <App/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);