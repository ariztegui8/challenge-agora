'use client'
import React, { useEffect } from 'react'
import bannerDesktop from '@/assets/banner/banner-rosa.webp'
import bannerMobile from '@/assets/banner/banner-mobile.webp'
import Slider from 'react-slick';


const Banner = () => {

    const settings = {
        arrows: true,
        dots: true,
        fade: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className='lg:mt-14 mb-10'>
            <div className='hidden md:flex'>
                <img width="100%" className='xl:h-[520px]' src={bannerDesktop.src} alt="Banner" />
            </div>
            <div className='block md:hidden'>
                <Slider {...settings}>
                    <div>
                        <img className='w-full h-96 object-cover rounded-2xl' src={bannerDesktop.src} alt="Banner" />
                    </div>
                    <div>
                        <img className='w-full h-96 object-cover rounded-2xl' src={bannerMobile.src} alt="Banner" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Banner