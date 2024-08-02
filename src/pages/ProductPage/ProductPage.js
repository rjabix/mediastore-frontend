import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {
    HiOutlineHome,
    HiOutlineChevronRight,
    HiOutlineLocationMarker,
    HiOutlineTruck,
    HiOutlineCurrencyDollar,
    HiOutlineCheckCircle
} from 'react-icons/hi';
import {BsCart, BsSuitHeart} from "react-icons/bs";
import '../../components/BigHorizontalProductCard/BigHorizontalProductCard.css';

export default function ProductPage() {
    const category = useParams().category;
    const productId = useParams().productId;

    const user_location = 'New York, NY';

    const [product, setProduct] = useState(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        fetch(`http://localhost:5298/mediastoreproduct/${category}/${productId}`, { signal })
            .then(response => response.json())
            .then(product => setProduct(product))
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    console.error('Error:', error);
                }
            });

        fetch(`http://localhost:5298/mediastoreproduct/${category}/${productId}/description`, { signal })
            .then(response => {
                if(!response.ok) throw new Error('No description is available for this product'); //checking whether description is available
                return response.text();
            })
            .then(description => setDescription(description))
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    console.error('Error:', error);
                }
            });

        return () => abortController.abort();
    }, [category, productId]);

    return (product === null || product === undefined ? <div>Loading...</div> :
            <main className='m-1'>
                <div className='flex justify-start space-x-3 text-lg p-5 border-b'
                     style={{alignItems: 'center'}}> {/*nav div at the top*/}
                    <a href='/'><HiOutlineHome className='text-2xl'/> </a>
                    <HiOutlineChevronRight/>
                    <a href={`/categories/${category}`}
                       className='hover:underline'>{category.charAt(0).toUpperCase() + category.slice(1)}</a>
                    <HiOutlineChevronRight/>
                    <span className='hover:underline cursor-pointer'>{product?.title}</span>
                </div>

                <div className='flex justify-between p-5 h-auto space-x-3'>
                    <div className='w-[50%] flex justify-center h-full'>
                        <img src={product?.image} alt={product?.title} className='w-auto h-auto'
                             style={{objectFit: "contain", width: "600px", height: "600px"}}/>
                    </div>
                    <div className='w-[50%] h-full'>
                        <h1 className='text-4xl font-bold text-gray-900'>{product?.title}</h1>
                        <div className="mt-2">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i}
                                         className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                         fill="currentColor" viewBox="0 0 20 20">
                                        {/*stars*/}
                                        <path
                                            d="M9.049 2.927C9.349 2.32 10.652 2.32 10.951 2.927L12.614 6.241L16.347 6.623C16.974 6.692 17.227 7.549 16.779 7.963L13.866 10.651L14.665 14.32C14.797 14.95 14.106 15.451 13.549 15.134L10 13.348L6.451 15.134C5.894 15.451 5.203 14.95 5.335 14.32L6.134 10.651L3.221 7.963C2.773 7.549 3.026 6.692 3.653 6.623L7.386 6.241L9.049 2.927Z"/>
                                    </svg>
                                ))}
                                <span
                                    className="ml-2 text-sm text-gray-500">({product.reviews + (product.reviews === 1 ? ' review' : ' reviews')})</span>
                            </div>
                            {/*starts and rating*/}
                        </div>
                        <span className='h-6 block w-full border-t mt-6'/>
                        <div className='border rounded-xl p-5'>
                            <h2 className='text-2xl flex justify-around font-bold text-green-600'>In stock</h2>
                            <div className='flex justify-around space-x-3 mt-4'>
                                {product.oldprice === null || product.oldprice === undefined ?
                                    <div>
                                        <p className='text-2xl font-bold text-gray-900'>{product.price},- $</p>
                                        <p className='text-gray-500'>{product.price > 100 ? 'Including VAT, free shipping' : 'Including VAT'}</p>
                                    </div>
                                    :
                                    <div>
                                        <p className='text-2xl font-bold text-red-500'>{product.price},- $</p>
                                        <div className='flex items-center'>
                                            <p className='text-gray-500 line-through text-xl'>{product.oldprice},- $</p>
                                            <span
                                                className='border-2 border-red-500 p-1 text-red-500 rounded-full font-semibold ml-3'>
                                                {'-' + Math.ceil((1 - product.price / product.oldprice) * 100) + '%'}
                                            </span>
                                        </div>
                                        <p className='text-gray-500'>{product.oldprice > 100 ? 'Including VAT, free shipping' : 'Including VAT'}</p>
                                    </div>}
                                <span className='w-12'/>
                                <div className="flex justify-end items-center space-x-3">
                                    <button className="text-5xl rounded-full add-to-cart-button">
                                        <BsCart className="p-[10px]"/>
                                        <span className="text-2xl font-semibold p-[10px]">Add to cart</span>
                                    </button>
                                    <span className="w-[25px]"/>
                                    <button>
                                        <BsSuitHeart className="text-5xl p-1"/>
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div className='border rounded-xl p-5 mt-7'>
                            <div className='text-gray-900 flex text-xl items-center'>
                                <HiOutlineLocationMarker className='text-3xl'/>
                                <span className='ml-6'>Delivery to: </span>
                                <span className='font-semibold ml-1'>{user_location}</span>
                            </div>
                            <hr className='m-2'/>
                            <div className='text-gray-900 flex text-xl items-center'>
                                <HiOutlineTruck className='text-3xl'/>
                                <span className='ml-6'>Delivery time: </span>
                                <span className='font-semibold ml-1'>2-3 days</span>
                            </div>
                        </div>

                        <div className='border rounded-xl p-5 mt-7'>
                            <div className='text-gray-900 flex text-xl items-center'>
                                <HiOutlineCurrencyDollar className='text-3xl'/>
                                <span className='ml-6'>Payment options: </span>
                                <span className='font-semibold ml-1'>PayPal, Card, Cash upon receiving a parcel</span>
                            </div>
                            <hr className='m-2'/>
                            <div className='text-gray-900 flex text-xl items-center'>
                                <HiOutlineCheckCircle className='text-3xl'/>
                                <span className='ml-6'>Manufacturer's warranty: </span>
                                <span className='font-semibold ml-1'>as stated on the product</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t p-5 mt-12'>
                </div>
                {description === null || description === undefined ? ( //description part
                    <></>
                ) : (
                    <>
                        <span className="flex justify-center text-2xl font-bold text-gray-900 mt-5">Description</span>
                        <div dangerouslySetInnerHTML={{__html: description}} className='p-5 mt-5 text-gray-700'/>
                    </>
                )}
            </main>
    )
}