import React from 'react';

export default function SmallVerticalProductCard({image, title, price, rating, reviews, specialTags, link, oldprice}) {
    let discount;
    if(oldprice !== undefined) {
        discount = Math.ceil((1 - price / oldprice) * 100);
    }
    if (oldprice === undefined)
        return ( //without discount
        <div className="w-[250px] h-[400px] bg-white border border-gray-50 rounded-lg shadow p-5 relative hover:scale-105 transition-transform duration-300">
            <a href={link}>
                <div className="absolute top-3 left-3 z-10"> {/*special tags*/}
                    {specialTags.map((tag, index) => (
                        <span key={index}
                              className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tag}</span>
                    ))}
                </div>
                <div className="flex justify-center items-center"> {/*image*/}
                    <img className="w-full rounded flex" src={image} alt={title}
                         style={{objectFit: "contain", width: "200px", height: "200px"}}/>
                </div>
                <div className="mt-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                 fill="currentColor" viewBox="0 0 20 20">
                                {/*stars*/}<path
                                    d="M9.049 2.927C9.349 2.32 10.652 2.32 10.951 2.927L12.614 6.241L16.347 6.623C16.974 6.692 17.227 7.549 16.779 7.963L13.866 10.651L14.665 14.32C14.797 14.95 14.106 15.451 13.549 15.134L10 13.348L6.451 15.134C5.894 15.451 5.203 14.95 5.335 14.32L6.134 10.651L3.221 7.963C2.773 7.549 3.026 6.692 3.653 6.623L7.386 6.241L9.049 2.927Z"/>
                            </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-500">({reviews})</span>
                    </div>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 mt-2 overflow-hidden">{title}</h5>
                    <div className="absolute top-[350px] items-center justify-between mt-2">
                        <span className="text-lg font-semibold text-gray-900">{price + '$,-'}</span>
                    </div>
                </div>
            </a>
        </div>
    );
    else
    return ( //with discount
        <div
            className="w-[250px] h-[400px] bg-white border border-gray-50 rounded-lg shadow p-5 relative hover:scale-105 transition-transform duration-300">
            <a href={link}>
                <div className="absolute top-3 left-3 z-10"> {/*special tags*/}
                    {specialTags.map((tag, index) => (
                        <span key={index}
                              className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tag}</span>
                    ))}
                </div>
                <div className="flex justify-center items-center"> {/*image*/}
                    <img className="w-full rounded flex" src={image} alt={title}
                         style={{objectFit: "contain", width: "200px", height: "200px"}}/>
                </div>
                <div className="mt-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                 fill="currentColor" viewBox="0 0 20 20">
                                {/*stars*/}
                                <path
                                    d="M9.049 2.927C9.349 2.32 10.652 2.32 10.951 2.927L12.614 6.241L16.347 6.623C16.974 6.692 17.227 7.549 16.779 7.963L13.866 10.651L14.665 14.32C14.797 14.95 14.106 15.451 13.549 15.134L10 13.348L6.451 15.134C5.894 15.451 5.203 14.95 5.335 14.32L6.134 10.651L3.221 7.963C2.773 7.549 3.026 6.692 3.653 6.623L7.386 6.241L9.049 2.927Z"/>
                            </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-500">({reviews})</span>
                    </div>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 mt-2 overflow-hidden">{title}</h5>
                    <div className="absolute top-[326px] items-center justify-between mt-2">

                        <div className='flex justify-start space-x-3'>
                            <p className='font-semibold text-gray-700'><s>{oldprice + '$,-'}</s></p>
                            <div className='border-red-500 border-2 rounded-full'>
                                <span className="p-1 text-red-500 font-semibold">{'-' + discount + '%'}</span>
                            </div>
                        </div>

                        <span className="text-lg font-semibold text-red-700">{price + '$,-'}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}
