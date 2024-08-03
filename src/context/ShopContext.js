import React, { useState, useEffect } from "react";

export const CategoryContext = React.createContext(null);
export const NewsContext = React.createContext(null);
export const ProductContext = React.createContext(null);

export const BigPromosContext = React.createContext(null);

export const GeolocationContext = React.createContext(null);

export const API_URL = 'http://localhost:5298';

export function CategoryProvider(props) {
    const [data, setData] = useState(null);
    // Fetch categories from server and update state
    // ...
    return (
        <CategoryContext.Provider value={data}>
            {props.children}
        </CategoryContext.Provider>
    );
}

export function NewsProvider(props) {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL + '/mediastorenews')
            .then(response => response.json())
            .then(news => {
                setNews(news);
                setLoading(false);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Or return a loading spinner
    }

    return (
        <NewsContext.Provider value={news}>
            {props.children}
        </NewsContext.Provider>
    );
}
export function BigPromosProvider(props) {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL + '/mediastorepromos')
            .then(response => response.json())
            .then(news => {
                setNews(news);
                setLoading(false);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Or return a loading spinner
    }

    return (
        <BigPromosContext.Provider value={news}>
            {props.children}
        </BigPromosContext.Provider>
    );
}
export function ProductProvider(props) {
    const [data, setData] = useState(null);
    // Fetch products from server and update state
    // ...
    return (
        <ProductContext.Provider value={data}>
            {props.children}
        </ProductContext.Provider>
    );
}


export function GeolocationProvider ({ children }) { //in-dev
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        }
    }, []);

    return (
        <GeolocationContext.Provider value={location}>
            {children}
        </GeolocationContext.Provider>
    );
};