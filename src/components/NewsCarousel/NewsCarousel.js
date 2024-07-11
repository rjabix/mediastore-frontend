import React from "react";
import './NewsCarousel.css';
import '@mantine/carousel/styles.css';
import {Carousel} from '@mantine/carousel';
import {MantineProvider} from '@mantine/core';

export default function NewsCarousel() {
    //Test for carousel
    const carouselItems = [
        {"title": "News 1", "content": "Content 1", "image": "https://via.placeholder.com/150", "link": "/news/1"},
        {"title": "News 2", "content": "Content 2", "image": "https://via.placeholder.com/150", 'link': '/news/2'},
        {
            "title": "News 3",
            "content": "Content 3ksdfh asffa afdf saa saaaaa dfdff",
            "image": 'https://via.placeholder.com/150',
            'link': '/news/3'
        },
    ];

    return (
        <frame className='border-2 border-gray-500 rounded-xl'>

            <link href='./NewsCarousel.css' rel="stylesheet"/>
            <MantineProvider>
                <Carousel
                    withIndicators
                    height={500}
                    width="100%"
                    slideSize="33.333333%"
                    slideGap="xl"
                    loop
                    align="start"
                    slidesToScroll={3}
                    dragFree
                    withControls={false}
                >
                    {carouselItems.map((item, index) => (
                        <Carousel.Slide key={index}>
                            {index !== 0 ? <span className="vertical-separator w-16"></span> : <></>}
                            <MyCard title={item.title} content={item.content} image={item.image} link={item.link}/>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </MantineProvider>

        </frame>
    );
};

function MyCard({title, content, image, link}) {
    return (
        <div
            className="max-w-sm h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 p-5 flex flex-col justify-between">
            <a href={link}>
                <img className="rounded-lg justify-center" src={image} alt=""/>
            </a>
            <div className="p-5">
                <a href={link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 context-text text-gray-700 dark:text-gray-400">{content}</p>
            </div>
            <a href={link}
               className="inline-flex items-center px-3 w-[125px] py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    );
}