'use client'
import React, { useEffect } from 'react'
import bannerDesktop from '@/assets/banner/banner-rosa.webp'
import bannerMobile from '@/assets/banner/banner-mobile.webp'
import Slider from 'react-slick';


const Banner = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <Slider {...settings}>
            <div className='lg:mt-14 mb-10'>
                <img width="100%" src={bannerDesktop.src} alt="Banner" />
            </div>
            <div className='lg:mt-14 mb-10'>
                <img width="100%" src={bannerMobile.src} alt="Banner" />
            </div>
        </Slider>
    )
}

export default Banner