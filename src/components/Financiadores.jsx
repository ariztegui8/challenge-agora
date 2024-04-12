'use client'
import arguidius from '@/assets/financiadores/Arguidius.jpg'
import athena from '@/assets/financiadores/Athena-Fundation.jpg'
import bid from '@/assets/financiadores/BID-Lab-Color_SPA.png'
import cenpromype from '@/assets/financiadores/cenpromype.jpg'
import citibanamex from '@/assets/financiadores/citibanamex.jpg'
import embajada from '@/assets/financiadores/Embajada-EEUU-en-mexico.jpg'
import eye from '@/assets/financiadores/EYElliance.jpg'
import hip from '@/assets/financiadores/HIP.png'
import holland from '@/assets/financiadores/Holland-Embassy.jpg'
import inbia from '@/assets/financiadores/INBIA.jpg'
import irex from '@/assets/financiadores/IREX.jpg'
import meda from '@/assets/financiadores/MEDA.jpg'
import venture from '@/assets/financiadores/New-Venture-Fund.png'
import palladium from '@/assets/financiadores/Palladium.jpg'
import foundation from '@/assets/financiadores/Target-Foundation.jpeg'
import tawingo from '@/assets/financiadores/Tawingo-fund.jpg'
import wef from '@/assets/financiadores/World-Economic-Forum.jpg'
import yunus from '@/assets/financiadores/Yunus.jpg'
import Slider from 'react-slick';

const Financiadores = () => {

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



    const financiadoes = [
        {
            id: '1',
            url: arguidius,
        },
        {
            id: '2',
            url: athena,
        },
        {
            id: '3',
            url: bid,
        },
        {
            id: '4',
            url: cenpromype,
        },
        {
            id: '5',
            url: citibanamex,
        },
        {
            id: '6',
            url: embajada,
        },
        {
            id: '7',
            url: eye,
        },
        {
            id: '8',
            url: hip,
        },
        {
            id: '9',
            url: holland,
        },
        {
            id: '10',
            url: inbia,
        },
        {
            id: '11',
            url: irex,
        },
        {
            id: '12',
            url: meda,
        },
        {
            id: '13',
            url: venture,
        },
        {
            id: '14',
            url: palladium,
        },
        {
            id: '15',
            url: foundation,
        },
        {
            id: '16',
            url: tawingo,
        },
        {
            id: '17',
            url: wef,
        },
        {
            id: '18',
            url: yunus,
        },
    ];

    return (
        <div className='px-4 mb-16 md:px-10 lg:px-24 lg:mb-28'>
            <div className='mb-20'>
                <div className='w-full'>
                    <p className='text-[28px] font-semibold text-[#19417f] mb-3'>Nuestros Financiadores</p>
                </div>
            </div>

            <div className='slider'>
                <Slider {...settings}>
                    {financiadoes.map(data => (
                        <div key={data.id}>
                            <img width="100%" className='object-contain h-[130px] !important' src={data.url.src} alt="" />
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    )
}

export default Financiadores