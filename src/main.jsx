import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './components/Home';

const router = createBrowserRouter(
  [
    {
      path : "/",
      coomponent : Root,

      children : [
        {
          index : true,
          component : Home
        }
      ]


    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
