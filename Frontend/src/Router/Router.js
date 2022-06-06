import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Page Router
import Home from '../Views/Home/Home';
import Login from '../Views/Login/Login';
import Logout from '../Views/Logout/Logout';

const Router = () =>{
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/logout" element={<Logout/>}/>


    </Routes>
    </BrowserRouter>
  )
}
export default Router;