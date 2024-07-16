import React from 'react';
import { FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa';

export default function Footer(){
    return (
        <footer className="bg-white border-t border-gray-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center mb-4">
                    <img src="/logos/logo_without_bg.png" alt="MediaStore Logo" className="h-10" />
                </div>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Company</a>
                    <a href="/products" className="text-gray-600 hover:text-gray-900">Products</a>
                    <a href="/stores" className="text-gray-600 hover:text-gray-900">Stores</a>
                    <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
                    <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                </div>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        <FaInstagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        <FaPinterest className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        <FaWhatsapp className="h-6 w-6" />
                    </a>
                </div>
                <hr className='border border-gray-500 block m-[15px] '/>
                <div className="flex justify-center">
                    <p className="text-gray-500">Copyright &copy; 2024 - All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
