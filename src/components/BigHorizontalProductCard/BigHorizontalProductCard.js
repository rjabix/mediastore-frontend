import React from 'react';
import {BsCart, BsSuitHeart} from "react-icons/bs";
import './BigHorizontalProductCard.css';

export default function BigHorizontalProductCard({image, title, price, rating, reviews, specialTags, id, category, oldprice, info1, info2, info3, info4, info5, info6}) {
    const discount = oldprice ? Math.ceil((1 - price / oldprice) * 100) : null;
    const link = `/products/${category}/${id}`;

    function Info({label, property}){
        let propertyLabel = property;
        if (Array.isArray(property)) propertyLabel = property.join(', ');

        return (
        <div className="mt-1">
            <p>{label}:</p>
            <p className="font-semibold">{propertyLabel}</p>
        </div>
    );
    }

    return (
        <div className="w-auto h-[300px] bg-gray-50 border border-gray-200 rounded-lg shadow p-5 flex flex-row hover:border-2 hover:border-blue-600 transition duration-500">
            <div className="flex flex-row w-full">
                <div className="relative flex-shrink-0">
                    <div className="absolute top-3 left-3 z-10">
                        {specialTags.map((tag, index) => (
                            <span key={index} className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tag}</span>
                        ))}
                    </div>
                    <a href={link}>
                        <img className="rounded p-[12px]" src={image} alt={title} style={{objectFit: "contain", width: "250px", height: "250px"}}/>
                    </a>
                </div>
                <div className="flex flex-col justify-between ml-4 w-full">
                    <div>
                        <div>
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-2">{title}</h5>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927C9.349 2.32 10.652 2.32 10.951 2.927L12.614 6.241L16.347 6.623C16.974 6.692 17.227 7.549 16.779 7.963L13.866 10.651L14.665 14.32C14.797 14.95 14.106 15.451 13.549 15.134L10 13.348L6.451 15.134C5.894 15.451 5.203 14.95 5.335 14.32L6.134 10.651L3.221 7.963C2.773 7.549 3.026 6.692 3.653 6.623L7.386 6.241L9.049 2.927Z"/>
                                    </svg>
                                ))}
                                <span className="ml-2 text-sm text-gray-500">({reviews})</span>
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div className="grid grid-cols-2 space-x-24">
                                <div className="text-sm text-gray-700 mt-2">
                                    <Info {...info1} />
                                    <Info {...info2} />
                                    <Info {...info3} />
                                </div>
                                <div className="text-sm text-gray-700 mt-2 ml-64">
                                    <Info {...info4} />
                                    <Info {...info5} />
                                    <Info {...info6} />
                                </div>
                            </div>
                            <div className="flex-col mt-4">
                                {oldprice && ( //with discount
                                    <div className="flex items-center space-x-3">
                                        <p className="text-gray-500 line-through">{oldprice}$</p>
                                        <span className="text-red-500 border-2 border-red-500 rounded-full p-1 font-semibold">{`-${discount}%`}</span>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 gap-2 relative">
                                    {!discount ? <span className="text-2xl font-bold text-gray-800">{price},- $</span> :
                                        <span className="text-2xl font-bold text-red-500">{price},- $</span>}
                                    <span className="text-sm font-semibold text-gray-500">{price > 100 ? 'Including VAT, free shipping' : 'Including VAT'}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end align-middle space-x-3 m-5 mt-0">
                            <button>
                                <BsSuitHeart className="text-5xl p-1"/>
                            </button>
                            <span className="w-[25px]"/>
                            <button className="text-5xl rounded-full add-to-cart-button">
                                <BsCart className="p-[10px]"/>
                                <span className="text-2xl font-semibold p-[10px]">Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}