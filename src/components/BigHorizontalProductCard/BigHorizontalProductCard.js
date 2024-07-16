import React from 'react';
import {BsCart, BsSuitHeart} from "react-icons/bs";
import './BigHorizontalProductCard.css';

export default function BigHorizontalProductCard({
                                                     image,
                                                     title,
                                                     price,
                                                     rating,
                                                     reviews,
                                                     specialTags,
                                                     link,
                                                     oldprice,
                                                     storage,
                                                     connectivity,
                                                     color,
                                                     display,
                                                     camera,
                                                     screenSize,
                                                     brand
                                                 }) {
    let discount;
    if (oldprice !== undefined && oldprice !== null) {
        discount = Math.ceil((1 - price / oldprice) * 100);
    }
    if (oldprice === undefined || oldprice === null)
        return (
            <div
                className="w-auto h-[300px] bg-gray-50 border border-gray-200 rounded-lg shadow p-5 flex flex-row
                hover:border-2
                hover:border-blue-600
                transition duration-500">
                <div className="flex flex-row w-full">
                    <div className="relative flex-shrink-0">
                        <div className="absolute top-3 left-3 z-10"> {/*special tags*/}
                            {specialTags.map((tag, index) => (
                                <span key={index}
                                      className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tag}</span>
                            ))}
                        </div>
                        <a href={link}>
                            <img className="rounded p-[12px]" src={image} alt={title}
                                 style={{objectFit: "contain", width: "250px", height: "250px"}}/>
                        </a>
                    </div>
                    <div className="flex flex-col justify-between ml-4 w-full">
                        <div>
                            <div>
                                <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-2">{title}</h5>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i}
                                             className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                             fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927C9.349 2.32 10.652 2.32 10.951 2.927L12.614 6.241L16.347 6.623C16.974 6.692 17.227 7.549 16.779 7.963L13.866 10.651L14.665 14.32C14.797 14.95 14.106 15.451 13.549 15.134L10 13.348L6.451 15.134C5.894 15.451 5.203 14.95 5.335 14.32L6.134 10.651L3.221 7.963C2.773 7.549 3.026 6.692 3.653 6.623L7.386 6.241L9.049 2.927Z"/>
                                        </svg>
                                    ))}
                                    <span className="ml-2 text-sm text-gray-500">({reviews})</span>
                                </div>
                            </div>
                            <div className="flex justify-around">
                                <div className="text-sm text-gray-700 mt-2">
                                    <p>Storage:</p>
                                    <p className="font-semibold">{storage}</p>
                                    <p>Camera:</p>
                                    <p className="font-semibold">{camera}</p>
                                    <p>Color:</p>
                                    <p className="font-semibold">{color}</p>
                                </div>
                                <div className="text-sm text-gray-700 mt-2">
                                    <p>Ports:</p>
                                    <p className="font-semibold">{connectivity}</p>
                                    <p>Display:</p>
                                    <p className="font-semibold">{display}</p>
                                    <p>Brand:</p>
                                    <p className="font-semibold">{brand}</p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    {oldprice !== undefined && oldprice !== null && (
                                        <div className="flex items-center space-x-3">
                                            <p className="text-gray-500 line-through">{oldprice} zł</p>
                                            <span className="text-red-500 font-semibold">{`-${discount}%`}</span>
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 gap-2 relative">
                                        <span className="text-2xl font-bold text-gray-800">{price}$,-</span>
                                        {price > 100 ?
                                            <span className="text-sm font-semibold text-gray-500">Including VAT, free shipping</span>
                                            :
                                            <span className="text-sm font-semibold text-gray-500">Including VAT</span>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end align-middle space-x-3 m-5"> {/*buttons*/}
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
    else
        return ( //with discount
            <div
                className="w-auto h-[300px] bg-gray-50 border border-gray-200 rounded-lg shadow p-5 flex flex-row
                hover:border-2
                hover:border-blue-600
                transition duration-500">
                <div className="flex flex-row w-full">
                    <div className="relative flex-shrink-0">
                        <div className="absolute top-3 left-3 z-10"> {/*special tags*/}
                            {specialTags.map((tag, index) => (
                                <span key={index}
                                      className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tag}</span>
                            ))}
                        </div>
                        <a href={link}>
                            <img className="rounded p-[12px]" src={image} alt={title}
                                 style={{objectFit: "contain", width: "250px", height: "250px"}}/>
                        </a>
                    </div>
                    <div className="flex flex-col justify-between ml-4 w-full">
                        <div>
                            <div>
                                <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-2">{title}</h5>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i}
                                             className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                             fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927C9.349 2.32 10.652 2.32 10.951 2.927L12.614 6.241L16.347 6.623C16.974 6.692 17.227 7.549 16.779 7.963L13.866 10.651L14.665 14.32C14.797 14.95 14.106 15.451 13.549 15.134L10 13.348L6.451 15.134C5.894 15.451 5.203 14.95 5.335 14.32L6.134 10.651L3.221 7.963C2.773 7.549 3.026 6.692 3.653 6.623L7.386 6.241L9.049 2.927Z"/>
                                        </svg>
                                    ))}
                                    <span className="ml-2 text-sm text-gray-500">({reviews})</span>
                                </div>
                            </div>
                            <div className="flex justify-around">
                                <div className="text-sm text-gray-700 mt-2">
                                    <p>Storage:</p>
                                    <p className="font-semibold">{storage}</p>
                                    <p>Camera:</p>
                                    <p className="font-semibold">{camera}</p>
                                    <p>Color:</p>
                                    <p className="font-semibold">{color}</p>
                                </div>
                                <div className="text-sm text-gray-700 mt-2">
                                    <p>Ports:</p>
                                    <p className="font-semibold">{connectivity}</p>
                                    <p>Display:</p>
                                    <p className="font-semibold">{display}</p>
                                    <p>Brand:</p>
                                    <p className="font-semibold">{brand}</p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="grid grid-cols-1 gap-2 relative">
                                        <div className="flex items-center space-x-3">
                                            <p className="text-gray-500 text-lg line-through">{oldprice},-</p>
                                            <span className="text-red-500 text-lg font-semibold border-2 border-red-500 rounded-full px-1 py-[0.01em]">{`-${discount}%`}</span>
                                        </div>
                                        <span className="text-2xl font-bold text-red-500">{price}$,-</span>
                                        {price > 100 ?
                                            <span className="text-sm font-semibold text-gray-500">Including VAT, free shipping</span>
                                            :
                                            <span className="text-sm font-semibold text-gray-500">Including VAT</span>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end align-middle space-x-3 m-5"> {/*buttons*/}
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
        )
}
