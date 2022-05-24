import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Views/Home/Home';
import Login from '../Views/Login/Login';

const Router = () =>{
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>

    </Routes>
    </BrowserRouter>
  )
}
export default Router;