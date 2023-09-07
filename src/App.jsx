import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Header from './components/Header'
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import Home from './routes/Home'

 
export default function App() {

  return ( 
    <>
    <Navbar />
    <BrowserRouter >
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/products" element={<ProductList />}/>
       <Route path="/About" element={<ProductList />}/>
      
     </Routes>
    </BrowserRouter>
    </>
  )
}
 
