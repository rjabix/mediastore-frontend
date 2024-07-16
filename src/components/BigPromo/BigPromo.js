import React, {useContext} from 'react';
import AppleLogo from "../apple_logo";
import {BigPromosContext} from "../../context/ShopContext";

export default function BigPromo() {
    const promoItems = useContext(BigPromosContext);

    const [scrollPosition, setScrollPosition] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 768) {
                setScrollPosition(window.scrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // parallax effect

    const style = {
        transform: window.innerWidth > 768 ? `translateY(${-scrollPosition*0.5 + 680}px)` : 'none',
        transition: 'transform 0.3s ease-out'
    };

    return (
        <a href={promoItems[0].link}>
            {
                promoItems[0].theme === 'dark' ?
                    //Dark theme
                    <div className='promo rounded-xl justify-between flex bg-black' style={style}>
                        <div className='promo-left p-12'>
                            <div className='inline-flex items-center'>
                                <AppleLogo type={"gray"} width={"25px"} height={"25px"}/>
                                <h3 className='text-gray-500 text-2xl ml-3'>{promoItems[0].topLabel}</h3>
                            </div>
                            <h2 className='text-white text-9xl mt-5'>{promoItems[0].sloganLabel}</h2>
                            <h3 className='text-gray-500 text-3xl mt-5'>{promoItems[0].priceLabel}</h3>
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
                                <h3 className='text-gray-500 text-2xl ml-3'>{promoItems[0].topLabel}</h3>
                            </div>
                            <h2 className='text-white text-9xl mt-5'>{promoItems[0].sloganLabel}</h2>
                            <h3 className='text-gray-500 text-3xl mt-5'>{promoItems[0].priceLabel}</h3>
                        </div>
                        <img src={promoItems[0].image} alt="promo" className=''
                             style={{objectFit: "contain", width: "800px", height: "800px"}}/>
                    </div>
            }
        </a>
    );
}
