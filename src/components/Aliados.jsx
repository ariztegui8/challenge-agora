'use client'
import { BsArrowUpRightCircle } from "react-icons/bs";
import cenpromype from '@/assets/aliados/cenpromype.jpg'
import center from '@/assets/aliados/Center-for-inclusive-growth.jpg'
import citibanamex from '@/assets/aliados/citibanamex.png'
import drip from '@/assets/aliados/DRIP-capital.jpg'
import im from '@/assets/aliados/im.png'
import kueski from '@/assets/aliados/kUESKI.jpg'
import lendera from '@/assets/aliados/lendera.jpg'
import meli from '@/assets/aliados/mercado-libre.jpg'
import palladium from '@/assets/aliados/palladium.png'
import pretmex from '@/assets/aliados/pretmex.jpg'
import pricesmart from '@/assets/aliados/pricesmart.jpg'
import walmart from '@/assets/aliados/Walmartjpg.jpg'
import yunus from '@/assets/aliados/yunus.png'
import Slider from 'react-slick';

const Aliados = () => {

    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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


    const aliados = [
        {
            id: '1',
            url: cenpromype,
        },
        {
            id: '2',
            url: center,
        },
        {
            id: '3',
            url: citibanamex,
        },
        {
            id: '4',
            url: drip,
        },
        {
            id: '5',
            url: im,
        },
        {
            id: '6',
            url: kueski,
        },
        {
            id: '7',
            url: lendera,
        },
        {
            id: '8',
            url: meli,
        },
        {
            id: '9',
            url: palladium,
        },
        {
            id: '10',
            url: pretmex,
        },
        {
            id: '11',
            url: pricesmart,
        },
        {
            id: '12',
            url: walmart,
        },
        {
            id: '13',
            url: yunus,
        },
    ];

    return (
        <div className='px-4 mb-16 md:px-10 lg:px-24 lg:mb-28'>
            <div className='flex flex-col gap-6 justify-between mb-8 md:flex-row lg:mb-20'>
                <div className='w-full max-w-[28rem]'>
                    <p className='text-[28px] font-semibold text-[#19417f] mb-3'>Nuestros aliados</p>
                    <p className='text-[#333333] mb-3'>Conoce a las organizaciones que nos acompañan por una sociedad más inclusiva y en sintonía con el ambiente.</p>
                    <p className='text-[#333333]'>Contáctate para conocer más sobre cómo colaborar con Agora Partnerships.</p>
                </div>
                <div className='w-full'>
                    <div className='flex gap-2 justify-end items-start cursor-pointer'>
                        <p className='text-sm font-semibold text-[#19417f]'>Súmate como aliado</p>
                        <BsArrowUpRightCircle
                            color='#19417f'
                            size={20}
                        />
                    </div>
                </div>
            </div>

            <div className='slider'>
                <Slider {...settings}>
                    {aliados.map(data => (
                        <div key={data.id}>
                            <img width="100%" className='object-contain h-[130px] !important' src={data.url.src} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>


        </div>
    )
}

export default Aliados