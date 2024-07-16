import React from 'react';
import './HomePage.css';
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel";
import BigPromo from "../../components/BigPromo/BigPromo";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import CategoriesShortHList from "../../components/CategoriesShortHList/CategoriesShortHList";
import PopularSection from "../../components/PopularSection/PopularSection";
import {BigPromosProvider, NewsProvider} from "../../context/ShopContext";

const HomePage = () => {
    return (
        <div className="bg-gray-50 text-white p-4 mr-4">
            <StoreHeader/>
            <CategoriesShortHList/>
            <hr className="m-[15px] block border-gray-500 border-2 rounded-full"/>

            <BeforeCarouselInfo/>
            <NewsProvider>
                <NewsCarousel/>
            </NewsProvider>

            <hr className="m-[15px] block border-gray-500 border rounded-full"/>
            <BigPromosProvider>
                <BigPromo/>
            </BigPromosProvider>

            <BeforePopularInfo/>
            <PopularSection/>

        </div>
    );
};

export default HomePage;
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const maxScrollPosition = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / maxScrollPosition) * 400;
    const textElements = document.querySelectorAll('.gradient-text_big');
    textElements.forEach((textElement) => {
        textElement.style.backgroundPosition = scrollPercentage + '%';
    });
}); // text gradient effect

function BeforeCarouselInfo() {
    return (
        <div className='p-8'>
            <h1 className="text-3xl font-bold gradient-text_big">The latest.</h1>
            <p className="text-2xl text-gray-500">Take a look at what’s new right now.</p>
        </div>
    );
}

function BeforePopularInfo() {
    return (
        <div className='p-8'>
            <h1 className="text-3xl font-bold gradient-text_big">Popular right now.</h1>
            <p className="text-2xl text-gray-500">Check out the most popular products among other people.</p>
        </div>
    );
}