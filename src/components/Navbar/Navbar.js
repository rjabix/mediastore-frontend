import {Link} from "react-router-dom";
import {FaRegUserCircle, FaSearch, FaShoppingCart} from "react-icons/fa";
import React, {useState} from "react";
import './Navbar.css';

function NavBar() {
    const IsLoggedIn = false;
    const [menu, setMenu] = useState('Home');
    return (
        <nav className="bg-gradient-to-r from-gray-900 to-blue-950 p-4 flex items-center justify-between nav-bar">
            <link rel="stylesheet" href="./Navbar.css"/>
            <div className="flex items-center">
                <Link to="/" className="text-white font-bold text-lg"><img src={'/logos/logo_without_bg.png'} alt="Logo"
                                                                           className="h-15 w-20 mr-4"/></Link>
                <Link to="/" onClick={()=> {setMenu('Home')}} className="text-white font-bold text-lg  nav-link">Home</Link>
                <Link to="/categories" onClick={()=> {setMenu('Categories')}} className="text-gray-300 ml-6  nav-link">Categories</Link>
                <Link to="/products" onClick={()=> {setMenu('Products')}} className="text-gray-300 ml-6  nav-link">Products</Link>
                <Link to="/stores" onClick={()=> {setMenu('Stores')}} className="text-gray-300 ml-6  nav-link">Stores</Link>
                <Link to="/contact" onClick={()=> {setMenu('Contact')}} className="text-gray-300 ml-6  nav-link">Contact</Link>
            </div>

            <div className="flex items-center">
                <div className="relative">
                    <FaSearch className="absolute top-3 left-2 text-gray-500"/>
                    <input type="text" placeholder="Search"
                           className="pl-8 pr-4 py-2 rounded bg-gray-800 text-gray-300 placeholder-gray-500"/>
                </div>

                <div className='relative items-center flex'>
                    <Link to='/cart'>
                        <FaShoppingCart className="text-gray-300 ml-6 text-2xl"/>
                    </Link>

                    <button>
                        { IsLoggedIn ?
                            <Link to='/profile'><img src='/logos/logo_with_bg.png' alt="Profile" className="h-8 w-8 rounded-full ml-6"/></Link>
                            :
                            <Link to='/login'><FaRegUserCircle className="rounded-full ml-6 text-gray-300 text-2xl"/></Link>
                        }
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;