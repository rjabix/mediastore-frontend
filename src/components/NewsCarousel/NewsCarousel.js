import React, {useContext} from "react";
import './NewsCarousel.css';
import '@mantine/carousel/styles.css';
import {Carousel} from '@mantine/carousel';
import {MantineProvider} from '@mantine/core';
import {NewsContext} from "../../context/ShopContext";

export default function NewsCarousel() {
    //Test for carousel
    const carouselItems = useContext(NewsContext);
    if(!carouselItems || carouselItems.length === 0) {
        return <div>Loading...</div>;
    }

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
        <div className="relative max-w-sm h-[500px] bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 p-5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-blue-950" style={{zIndex: 1}}></div>
            <div className="relative flex flex-col justify-between h-full p-5" style={{zIndex: 2}}>
                <a href={link}>
                    <img className="rounded-lg justify-center" src={image} alt=""/>
                </a>
                <div>
                    <a href={link}>
                        <h5 className="mb-2 text-2xl overflow-hidden font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 overflow-hidden context-text text-gray-700 dark:text-gray-400">{content}</p>
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
        </div>
    );
}