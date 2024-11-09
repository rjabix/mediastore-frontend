import SmallVerticalProductCard from "../SmallVerticalProductCard/SmallVerticalProductCard";
import React, {useEffect, useState} from "react";
import {API_URL} from "../../context/ShopContext";

export default function PopularSection() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(API_URL + '/product/popular')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);
    return (
        <div className='grid grid-cols-5 gap-4'>
            {data.map((product, index) => (
                <SmallVerticalProductCard image={product.image} id={product.id} category={CategoryIdToString(product.category)} specialTags={product.specialTags}
                                          title={product.title} rating={product.rating} reviews={product.reviews}
                                          price={product.price} oldprice={product.oldprice}/>
            ))}
        </div>
    );
}

export function CategoryIdToString(category){
    switch(category){
        case 0: return 'smartphones';
        case 1: return 'laptops';
        case 2: return 'tablets';
        case 3: return 'tvs';
        case 4: return 'monitors';
        case 5: return 'headphones';
        case 6: return 'computers';
        case 7: return 'accessories';
        case 8: return 'vr';
        case 9: return 'watches';
        default: throw new Error('Invalid category id');
    }
}