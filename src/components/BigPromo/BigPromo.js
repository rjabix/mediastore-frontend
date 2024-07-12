import React from 'react';
import './BigPromo.css';
import AppleLogo from "../apple_logo";

export default function BigPromo() {
    const promoItems = [ //Top label (small, gray, name of the product), SloganLabel (big, white), PriceLabel
        {
            "TopLabel": "IPhone 15 Pro",
            "SloganLabel": "Titanium Power",
            "PriceLabel": 'From $41,62/mo. or $999',
            'image': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844',
            'link': '/news/iphone15pro_promo',
            'theme': 'dark'
        },
    ];

    return (
        <a href={promoItems[0].link}>
            {
                promoItems[0].theme === 'dark' ?
                    //Dark theme
                    <div className='promo rounded-xl bg-transparent justify-between flex bg-black'>
                        <div className='promo-left p-12'>
                            <div className='inline-flex items-center'>
                                <AppleLogo type={"gray"} width={"25px"} height={"25px"}/>
                                <h3 className='text-gray-500 text-2xl ml-3'>{promoItems[0].TopLabel}</h3>
                            </div>
                            <h2 className='text-white text-9xl mt-5'>{promoItems[0].SloganLabel}</h2>
                            <h3 className='text-gray-500 text-3xl mt-5'>{promoItems[0].PriceLabel}</h3>
                        </div>
                        <img src={promoItems[0].image} alt="promo" className=''
                             style={{objectFit: "contain", width: "800px", height: "800px"}}/>
                    </div>

                    //White theme
                    :

                    <div className='promo rounded-s bg-transparent justify-between flex bg-gray-50'>
                        <div className='promo-left p-12'>
                            <div className='inline-flex items-center'>
                                <AppleLogo type={"black"} width={"25px"} height={"25px"}/>
                                <h3 className='text-gray-500 text-2xl ml-3'>{promoItems[0].TopLabel}</h3>
                            </div>
                            <h2 className='text-white text-9xl mt-5'>{promoItems[0].SloganLabel}</h2>
                            <h3 className='text-gray-500 text-3xl mt-5'>{promoItems[0].PriceLabel}</h3>
                        </div>
                        <img src={promoItems[0].image} alt="promo" className=''
                             style={{objectFit: "contain", width: "800px", height: "800px"}}/>
                    </div>
            }
        </a>
    );
}
