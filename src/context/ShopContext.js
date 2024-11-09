import React, {useState, useEffect} from "react";

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
    const [news, setNews] = useState(localStorage.getItem('news') ? JSON.parse(localStorage.getItem('news')) : null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(news) return;
        setLoading(true);
        fetch(API_URL + '/news')
            .then(response => response.json())
            .then(news => {
                setNews(news);
                localStorage.setItem('news', JSON.stringify(news));
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
        fetch(API_URL + '/promos')
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


export function GeolocationProvider({children}) {
    const [location, setLocation] = useState(localStorage.getItem('location'));

    useEffect(() => {
        if (navigator.geolocation && location === null) {
            const abortController = new AbortController();
            const signal = abortController.signal;

            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude} = position.coords;
                fetch(`${API_URL}/geolocation/city?lat=${latitude}&lon=${longitude}&lang=en-EN`, {signal})
                    .then(response => {
                        if (!response.ok) throw new Error("Cannot get user location");
                        return response.text();
                    })
                    .then(location => {
                        setLocation(location);
                        localStorage.setItem('location', location)
                    })
                    .catch(error => console.error('Error:', error));
            });

            return () => abortController.abort();
        }
    });

    return (
        <GeolocationContext.Provider value={location}>
            {children}
        </GeolocationContext.Provider>
    );
};