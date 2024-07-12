import React from 'react';
import './HomePage.css';
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel";
import BigPromo from "../../components/BigPromo/BigPromo";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import CategoriesShortHList from "../../components/CategoriesShortHList/CategoriesShortHList";
import ProductCard from "../../components/ProductCard/ProductCard";
import PopularSection from "../../components/PopularSection/PopularSection";

const HomePage = () => {
    return (
        <div className="bg-gray-50 text-white p-4 mr-4">
            <StoreHeader/>
            <CategoriesShortHList/>
            <hr className="m-[15px] block border-gray-500 border-2 rounded-full"/>

            <BeforeCarouselInfo/>
            <NewsCarousel/>
            <hr className="m-[15px] block border-gray-500 border-2 rounded-full"/>

            <BigPromo/>

            <PopularSection/>

        </div>
    );
};

export default HomePage;

function BeforeCarouselInfo(){
    return(
        <div className='p-8'>
            <h1 className="text-3xl font-bold text-gray-800">The latest.</h1>
            <p className="text-2xl text-gray-500">Take a look at what’s new right now.</p>
        </div>
    );
}