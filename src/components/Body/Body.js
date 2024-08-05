import './Body.css'
import { Routes, Route } from 'react-router-dom';
import Home from '../NavigationComponents/Home';
import ProductData from '../NavigationComponents/Product/ProductData';
import ContactUs from '../NavigationComponents/Contact_Us';
import { AboutStyled } from '../NavigationComponents/Product/About.styled';
const Body = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<ProductData />}></Route>
            <Route path='/contact' element={<ContactUs />}></Route>
            <Route path='/about' element={<AboutStyled />}></Route>
        </Routes>

    )
}

export default Body;