import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


//import pages
import HomePage from './pages/HomePage/HomePage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import ProductsListPage from './pages/ProductsPage/ProductsListPage';
import StoresPage from './pages/StoresPage/StoresPage';
import ContactPage from './pages/ContactPage/ContactPage';

//import components
import NavBar from './components/Navbar/Navbar';
import CartPage from "./pages/CartPage/CartPage";
import LoginSignUpPage from "./pages/LoginSignUpPage/LoginSignUpPage";

const App = () => {
    return (
        <Router>
            <link rel="stylesheet" href="./App.css"/>

            <NavBar/>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/categories" element={<CategoriesPage/>}>
                    <Route path=':category' element={<CategoriesPage/>}/>
                </Route>
                <Route path="/products" element={<ProductsListPage/>}/>
                <Route path="/stores" element={<StoresPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/login" element={<LoginSignUpPage/>}/>
                <Route path='/*' element={<h1>Not Found</h1>}/>
            </Routes>
        </Router>
    );
};

export default App;
