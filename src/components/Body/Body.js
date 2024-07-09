import './Body.css'
import { Routes, Route } from 'react-router-dom';
import Home from '../NavigationComponents/Home';

import ContactUs from '../NavigationComponents/Contact_Us';
//import ProductData from '../NavigationComponents/Product/ProductData';
const Body = () => {
    return (

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<ContactUs />}></Route>
            <Route path='/services' element={<ContactUs />}></Route>
        </Routes>

    )
}

export default Body;