import React from 'react';
import { FaApple } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';

export default function StoreHeader() {
    return (
        <div className="flex justify-between items-center bg-gray-50 p-8">
            <div>
                <h1 className="text-5xl font-bold text-gray-800">Store.</h1>
                <p className="text-3xl text-gray-500">The best way to buy the products you love.</p>
            </div>
            <div className="text-right">
                <div className="mb-4 flex items-center">
                    <BsPersonCircle className="text-3xl text-gray-800 mr-2"/>
                    <div>
                        <p className="text-sm font-bold text-gray-800">Need shopping help?</p>
                        <a href="/contact" className="text-sm text-blue-600 hover:underline">Ask a Specialist ↗</a>
                    </div>
                </div>
                <div className="flex items-center">
                    <FaApple className="text-3xl text-gray-800 mr-2"/>
                    <div>
                        <p className="text-sm font-bold text-gray-800">Visit a MediaStore</p>
                        <a href="/stores" className="text-sm text-blue-600 hover:underline">Find one near you ›</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
