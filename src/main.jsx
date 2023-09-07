/* eslint-disable no-unused-vars */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './components/Navbar.jsx';
import {  createBrowserRouter,  RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import ProductList from './components/ProductList.jsx';
import Home from './routes/Home.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root /> }>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />

      {/* ... etc. */}
    </Route>
  )
);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
