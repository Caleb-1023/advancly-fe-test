import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<App />} />
      <Route path='cart' element={<App />} />
      <Route path='products' element={<App />} />
      <Route path='documents' element={<App />} />
      <Route path='orders' element={<App />} />
      <Route path='track-orders' element={<App />} />
      <Route path='accounts' element={<App />} />
      <Route path='user' element={<App />} />
    </Route>
  )
  )

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
