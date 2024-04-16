'use client'
import React, { useState } from 'react'
import logo from '@/assets/logo.png'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link'

const Footer = () => {

    const [language, setLanguage] = useState('ES')

    const changeLanguage = (lang) => {
        setLanguage(lang)
    }

    return (
        <div className='mb-10 py-6 md:mb-0 max-w-[1200px] m-auto px-5 md:px-10'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-10'>
                <div className='flex flex-col gap-4 justify-between'>
                    <Link href="/">
                        <img width={140} src={logo.src} alt="logo" />
                    </Link>
                    <div className='pr-3'>
                        <p className='text-[10px]'><span className='font-semibold text-[#333333]'>Agora Partnerships®</span> All Rights Reserved.Reg. U.S. Pat. and TM Off <span className='text-[#c36] cursor-pointer hover:text-[#19417f]'>Política de Privacidad</span></p>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='text-[#333333] text-sm cursor-pointer'>Quiénes somos</p>
                    <p className='text-[#333333] text-sm cursor-pointer'>Programas</p>
                    <p className='text-[#333333] text-sm cursor-pointer'>Impacto</p>
                    <p className='text-[#333333] text-sm cursor-pointer'>Súmate</p>
                    <Link href="/blog">
                        <p className='text-[#333333] text-sm cursor-pointer'>Blog</p>
                    </Link>
                    <p className='text-[#333333] text-sm cursor-pointer'>Recursos</p>
                    <p className='text-[#333333] text-sm cursor-pointer'>Sedes</p>
                    <p className='text-[#333333] text-sm cursor-pointer'>Change Lab</p>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className='bg-[#c1285d] text-white text-sm cursor-pointer py-0.5 px-6 rounded-full hover:bg-[#aa2251] w-max'>
                        <Link href="https://www.paypal.com/donate/?hosted_button_id=EX8NMB3CKYPUG" target='_blank'>
                            <p>Donar</p>
                        </Link>
                    </div>
                    <div className='flex gap-2 cursor-pointer'>
                        <Link href='#newsletter'>
                            <p className='text-sm font-semibold text-[#19417f]'>Suscribirme al newsletter</p>
                        </Link>
                        <BsArrowUpRightCircle
                            color='#19417f'
                            size={20}
                        />
                    </div>
                    <div className='flex gap-2'>
                        <div onClick={() => changeLanguage('ES')} className={`text-sm font-semibold cursor-pointer py-0.5 px-3 rounded-sm ${language === 'ES' ? 'bg-[#333333] text-white' : 'text-[#333333]'}`}>
                            <p>ES</p>
                        </div>
                        <div onClick={() => changeLanguage('EN')} className={`text-sm font-semibold cursor-pointer py-0.5 px-3 rounded-sm ${language === 'EN' ? 'bg-[#333333] text-white' : 'text-[#333333]'}`}>
                            <p>EN</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-6 justify-between md:items-end'>
                    <div>
                        <div className='flex gap-7 mb-7'>
                            <Link href="https://www.facebook.com/AgoraPartnerships" target='_blank'>
                                <FaFacebook
                                    size={25}
                                />
                            </Link>

                            <Link href="https://www.instagram.com/agora_2030/" target='_blank'>
                                <FaInstagram
                                    size={25}
                                />
                            </Link>

                            <Link href="https://medium.com/@AgoraPartnerships" target='_blank'>
                                <FaMedium
                                    size={25}
                                />
                            </Link>
                        </div>

                        <div className='flex gap-7'>
                            <Link href="https://www.linkedin.com/company/agora-partnerships/" target='_blank'>
                                <FaLinkedin
                                    size={25}
                                />
                            </Link>

                            <Link href=" https://open.spotify.com/show/2ejv4LsiSWT9GsFnnHsHZc?si=8f23d80250c54fb6&nd=1" target='_blank'>
                                <FaSpotify
                                    size={25}
                                />
                            </Link>

                            <Link href="https://www.youtube.com/channel/UCHourQ5NcP4S-jsA2fvBmEA" target='_blank'>
                                <FaYoutube
                                    size={25}
                                />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm text-[#333333]'>info@agora2030.org</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer