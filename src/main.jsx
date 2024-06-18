import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShopContainer from './Components/Shop/ShopContainer.jsx';
import ContactContainer from './Components/Contact/ContactContainer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/shop",
    element: <ShopContainer />,

  },,
  {
    path:"/contact",
    element: <ContactContainer />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<RouterProvider router={router} />
  </React.StrictMode>,
)
