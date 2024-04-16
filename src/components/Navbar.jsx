'use client'
import React, { useState } from 'react'
import logo from '@/assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { TfiWheelchair } from "react-icons/tfi";
import Link from 'next/link'
import { CgZoomIn } from "react-icons/cg";
import { CgZoomOut } from "react-icons/cg";
import { FaBarcode } from "react-icons/fa";
import { IoContrast } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { GrLink } from "react-icons/gr";
import { VscDebugRestart } from "react-icons/vsc";

const Navbar = () => {

    const [clickMenu, setClickMenu] = useState(false)
    const [language, setLanguage] = useState('ES')
    const [wheelchair, setWheelchair] = useState(false)

    const changeLanguage = (lang) => {
        setLanguage(lang)
    }

    const handleClickMenu = () => {
        setClickMenu(!clickMenu)
    }

    const handleClickWheelchair = () => {
        setWheelchair(!wheelchair)
    }

    const handleClickMenuMobile = () => {
        if (clickMenu) {
            setClickMenu(false)
        }
    };

    return (
        <>
            <div className='hidden fixed top-0 z-10 w-full bg-white justify-center items-center gap-4 xl:gap-20 py-2.5 shadow-md lg:flex px-5 md:px-10'>
                <div>
                    <Link href="/">
                        <img width={120} src={logo.src} alt="logo" />
                    </Link>
                </div>
                <div className='gap-4 hidden lg:flex'>
                    <p className='text-[#333333] text-sm cursor-pointer hover:text-[#19417f]'>Quiénes somos</p>
                    <p className='text-[#333333] text-sm cursor-pointer hover:text-[#19417f]'>Programas</p>
                    <p className='text-[#333333] text-sm cursor-pointer hover:text-[#19417f]'>Impacto</p>
                    <p className='text-[#333333] text-sm cursor-pointer hover:text-[#19417f]'>Súmate</p>
                    <Link href="/blog">
                        <p className='text-[#333333] text-sm cursor-pointer hover:text-[#19417f]'>Blog</p>
                    </Link>
                    <p className='text-[#333333] text-sm cursor-pointer hover:text-[#19417f]'>Recursos</p>
                    <p className='text-[#333333] text-sm cursor-pointer hover:text-[#19417f]'>Sedes</p>
                    <p className='text-[#19417f] text-sm font-semibold cursor-pointer hover:text-[#AA2251]'>Change Lab</p>
                </div>
                <div className='flex items-center gap-4'>

                    <Link href="https://www.paypal.com/donate/?hosted_button_id=EX8NMB3CKYPUG" target='_blank'>
                        <div className='bg-[#c1285d] text-white text-sm cursor-pointer py-0.5 px-6 rounded-full hover:bg-[#aa2251]'>
                            <p>Donar</p>
                        </div>
                    </Link>

                    <div className='flex gap-2'>
                        <div onClick={() => changeLanguage('ES')} className={`text-sm font-semibold cursor-pointer py-0.5 px-3 rounded-sm ${language === 'ES' ? 'bg-[#333333] text-white' : 'text-[#333333]'}`}>
                            <p>ES</p>
                        </div>
                        <div onClick={() => changeLanguage('EN')} className={`text-sm font-semibold cursor-pointer py-0.5 px-3 rounded-sm ${language === 'EN' ? 'bg-[#333333] text-white' : 'text-[#333333]'}`}>
                            <p>EN</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex px-4 justify-between items-center gap-4 py-2 min-w-[310px] lg:hidden'>
                <div className='flex items-center gap-2 sm:gap-10'>
                    <Link href="/">
                        <img width={140} src={logo.src} alt="logo" />
                    </Link>
                    <Link href="https://www.paypal.com/donate/?hosted_button_id=EX8NMB3CKYPUG" target='_blank'>
                        <div className='bg-[#c1285d] text-white text-sm cursor-pointer py-0.5 px-6 rounded-full hover:bg-[#aa2251]'>
                            <p>Donar</p>
                        </div>
                    </Link>

                </div>

                <div>
                    {clickMenu ?
                        <IoClose
                            size={35}
                            color='#494c4f'
                            className='cursor-pointer'
                            onClick={handleClickMenu}
                        />
                        :
                        <IoMenu
                            color='#494c4f'
                            size={35}
                            className='cursor-pointer'
                            onClick={handleClickMenu}
                        />
                    }

                </div>
            </div>

            <div className={` lg:hidden flex-col text-center shadow-md ${clickMenu ? 'flex absolute w-full z-20 bg-white' : 'hidden'}`}>
                <p className='text-[#494c4f] py-2 cursor-pointer hover:text-white hover:bg-[#55595c] duration-200'>Quiénes somos</p>
                <p className='text-[#494c4f] py-2 cursor-pointer hover:text-white hover:bg-[#55595c] duration-200'>Programas</p>
                <p className='text-[#494c4f] py-2 cursor-pointer hover:text-white hover:bg-[#55595c] duration-200'>Impacto</p>
                <p className='text-[#494c4f] py-2 cursor-pointer hover:text-white hover:bg-[#55595c] duration-200'>Súmate</p>
                <Link onClick={handleClickMenuMobile} href="/blog">
                    <p className='text-[#494c4f] py-2 cursor-pointer hover:text-white hover:bg-[#55595c] duration-200'>Blog</p>
                </Link>
                <p className='text-[#494c4f] py-2 cursor-pointer hover:text-white hover:bg-[#55595c] duration-200'>Recursos</p>
                <p className='text-[#494c4f] py-2 cursor-pointer hover:text-white hover:bg-[#55595c] duration-200'>Sedes</p>
                <p className='text-[#494c4f] py-2 cursor-pointer hover:text-white hover:bg-[#55595c] duration-200'>Change Lab</p>
            </div>

            <div className='fixed top-20 lg:top-36 z-50 flex items-start'>
                <div className={`bg-white border border-[#4054b2] p-4 flex-col gap-3.5 transition-all duration-700 ${wheelchair ? 'flex' : 'hidden'}`}>
                    <p className='text-[#333333] mb-2 font-semibold max-w-[150px]'>Herramientas de accesibilidad</p>
                    <div className='flex gap-2 cursor-pointer'>
                        <CgZoomIn />
                        <p className='text-[#333333] text-[13px]'>Aumentar texto</p>
                    </div>
                    <div className='flex gap-2 cursor-pointer'>
                        <CgZoomOut />
                        <p className='text-[#333333] text-[13px]'>Disminuir texto</p>
                    </div>
                    <div className='flex gap-2 cursor-pointer'>
                        <FaBarcode />
                        <p className='text-[#333333] text-[13px]'>Escala de grises</p>
                    </div>
                    <div className='flex gap-2 cursor-pointer'>
                        <IoContrast />
                        <p className='text-[#333333] text-[13px]'>Alto contraste</p>
                    </div>
                    <div className='flex gap-2 cursor-pointer'>
                        <FaEye />
                        <p className='text-[#333333] text-[13px]'>Contraste negativo</p>
                    </div>
                    <div className='flex gap-2 cursor-pointer'>
                        <FaRegLightbulb />
                        <p className='text-[#333333] text-[13px]'>Fondo claro</p>
                    </div>
                    <div className='flex gap-2 cursor-pointer'>
                        <GrLink />
                        <p className='text-[#333333] text-[13px]'>Subrayar enlaces</p>
                    </div>
                    <div className='flex gap-2 cursor-pointer'>
                        <VscDebugRestart />
                        <p className='text-[#333333] text-[13px]'>Restablecer</p>
                    </div>
                </div>
                <div onClick={handleClickWheelchair} className='bg-[#4054b2] p-2.5 cursor-pointer'>
                    <TfiWheelchair
                        size={33}
                        color='#ffffff'
                    />
                </div>
            </div>
        </>
    )
}

export default Navbar