'use client'
import Group14 from '@/assets/financiadores/Group14.png'
import Group15 from '@/assets/financiadores/Group15.png'
import Group16 from '@/assets/financiadores/Group16.png'
import Group17 from '@/assets/financiadores/Group17.png'
import Group18 from '@/assets/financiadores/Group18.png'
import Group19 from '@/assets/financiadores/Group19.png'
import Group20 from '@/assets/financiadores/Group20.png'
import Group21 from '@/assets/financiadores/Group21.png'
import Group22 from '@/assets/financiadores/Group22.png'
import Group23 from '@/assets/financiadores/Group23.png'
import Group24 from '@/assets/financiadores/Group24.png'
import Group25 from '@/assets/financiadores/Group25.png'
import Group26 from '@/assets/financiadores/Group26.png'
import Group27 from '@/assets/financiadores/Group27.png'
import Group28 from '@/assets/financiadores/Group28.png'
import Group29 from '@/assets/financiadores/Group29.png'
import Group30 from '@/assets/financiadores/Group30.png'
import Group31 from '@/assets/financiadores/Group31.png'
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



    const financiadoes = [
        {
            id: '1',
            url: Group14,
        },
        {
            id: '2',
            url: Group15,
        },
        {
            id: '3',
            url: Group16,
        },
        {
            id: '4',
            url: Group17,
        },
        {
            id: '5',
            url: Group18,
        },
        {
            id: '6',
            url: Group19,
        },
        {
            id: '7',
            url: Group20,
        },
        {
            id: '8',
            url: Group21,
        },
        {
            id: '9',
            url: Group22,
        },
        {
            id: '10',
            url: Group23,
        },
        {
            id: '11',
            url: Group24,
        },
        {
            id: '12',
            url: Group25,
        },
        {
            id: '13',
            url: Group26,
        },
        {
            id: '14',
            url: Group27,
        },
        {
            id: '15',
            url: Group28,
        },
        {
            id: '16',
            url: Group29,
        },
        {
            id: '17',
            url: Group30,
        },
        {
            id: '18',
            url: Group31,
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
                            <img width="100%" className='object-contain h-[100px] !important' src={data.url.src} alt="" />
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    )
}

export default Financiadores