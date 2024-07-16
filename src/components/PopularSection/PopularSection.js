import SmallVerticalProductCard from "../SmallVerticalProductCard/SmallVerticalProductCard";
import React from "react";

export default function PopularSection() {
    //implement the PopularSection data from db here
    const data = [{
        'image': 'https://via.placeholder.com/100',
        'title': 'Placeholder',
        'price': '85',
        'link': '/products/placeholder',
        'rating': 2,
        'reviews': 15,
        'specialTags': ['Weekend']
    },
        {
            'image': 'https://via.placeholder.com/150',
            'title': 'Placeholderababagalamaga one two three',
            'price': '79',
            'link': '/products/placeholder',
            'rating': 4,
            'reviews': 30,
            'specialTags': ['Weekend', 'Summer sale']
        },
        {
            'image': 'https://via.placeholder.com/150',
            'title': 'Placeholder',
            'price': '150',
            'link': '/products/placeholder',
            'rating': 4,
            'reviews': 30,
            'specialTags': ['Weekend', 'Summer sale']
        },
        {
            'image': 'https://via.placeholder.com/150',
            'title': 'Placeholder',
            'price': '150',
            'link': '/products/placeholder',
            'rating': 4,
            'reviews': 30,
            'specialTags': []
        },
        {
            'image': 'https://via.placeholder.com/150',
            'title': 'Placeholder',
            'price': '150',
            'link': '/products/placeholder',
            'rating': 4,
            'reviews': 30,
            'specialTags': []
        },
        {
            'image': 'https://via.placeholder.com/150',
            'title': 'Placeholder',
            'price': '150',
            'link': '/products/placeholder',
            'rating': 4,
            'reviews': 30,
            'specialTags': []
        },
        {
            'image': 'https://via.placeholder.com/150',
            'title': 'Placeholder',
            'price': '150',
            'link': '/products/placeholder',
            'rating': 4,
            'reviews': 30,
            'specialTags': [],
            'oldprice': '200'
        },
    ]
    return (
        <div className='grid grid-cols-5 gap-4'>
            {data.map((product, index) => (
                <SmallVerticalProductCard image={product.image} link={product.link} specialTags={product.specialTags}
                                          title={product.title} rating={product.rating} reviews={product.reviews}
                                          price={product.price} oldprice={product.oldprice}/>
            ))}
        </div>
    );
}