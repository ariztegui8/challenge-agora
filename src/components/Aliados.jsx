'use client'
import { BsArrowUpRightCircle } from "react-icons/bs";
import Group1 from '@/assets/aliados/Group1.png'
import Group2 from '@/assets/aliados/Group2.png'
import Group3 from '@/assets/aliados/Group3.png'
import Group4 from '@/assets/aliados/Group4.png'
import Group5 from '@/assets/aliados/Group5.png'
import Group6 from '@/assets/aliados/Group6.png'
import Group7 from '@/assets/aliados/Group7.png'
import Group8 from '@/assets/aliados/Group8.png'
import Group9 from '@/assets/aliados/Group9.png'
import Group10 from '@/assets/aliados/Group10.png'
import Group11 from '@/assets/aliados/Group11.png'
import Group12 from '@/assets/aliados/Group12.png'
import Group13 from '@/assets/aliados/Group13.png'
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
        pauseOnHover: false,
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
            url: Group1,
        },
        {
            id: '2',
            url: Group2,
        },
        {
            id: '3',
            url: Group3,
        },
        {
            id: '4',
            url: Group4,
        },
        {
            id: '5',
            url: Group5,
        },
        {
            id: '6',
            url: Group6,
        },
        {
            id: '7',
            url: Group7,
        },
        {
            id: '8',
            url: Group8,
        },
        {
            id: '9',
            url: Group9,
        },
        {
            id: '10',
            url: Group10,
        },
        {
            id: '11',
            url: Group11,
        },
        {
            id: '12',
            url: Group12,
        },
        {
            id: '13',
            url: Group13,
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
                            <img width="100%" className='object-contain h-[100px] !important' src={data.url.src} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>


        </div>
    )
}

export default Aliados