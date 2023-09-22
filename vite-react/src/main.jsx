import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Test from './components/test.jsx';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/test",
    element: <Test />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <TheRestOfYourApplication /> */}
      <App />
    </ChakraProvider>

    <RouterProvider router={router} />
  </React.StrictMode>
);