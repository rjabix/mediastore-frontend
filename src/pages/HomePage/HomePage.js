import React from 'react';
import './HomePage.css';
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel";

const HomePage = () => {
    return (
        <div className="bg-gray-50 text-white p-4">
            <NewsCarousel/>
        </div>
    );
};

export default HomePage;