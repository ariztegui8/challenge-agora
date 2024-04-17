'use client'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'next/navigation';
import barra from '@/assets/barra-blog.svg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link'
import { changeEditDescription } from '@/helpers';
import { ClipLoader } from 'react-spinners';
import CardsBlog from '@/components/CardsBlog';

const PageId = () => {

    const [article, setArticle] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            console.log('Article ID:', id);
            fetchArticle(id)
        }
    }, [id])

    const fetchArticle = async (id) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/articles/${id}`)
            console.log('API response:', response.data);
            setArticle(response.data)
        } catch (error) {
            console.error('Error buscando article', error)
        }
    };

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const imageUrl = article && article.image ? `${baseUrl}/${article.image.replace(/\\/g, '/')}` : `${baseUrl}/uploads/default.webp`;
    const editDescription = article ? changeEditDescription(article.description, 150) : '';


    return (
        <div className='mt-12 lg:mt-[70px]'>
            {!article ?
                <div className='flex justify-center py-10'>
                    <ClipLoader
                        color="#19417f"
                        size={40}
                    />
                </div>
                :
                <>
                    <div className='bg-[#333333] rounded-xl'>
                        <div className='py-16  mb-16 max-w-[1200px] m-auto px-5 md:px-10'>
                            <p className='text-white text-xs font-semibold mb-3'>{article && article.category}</p>
                            <div className='flex flex-col gap-8 md:flex-row'>
                                <div className='w-full md:w-1/2'>
                                    <p className='text-white text-[25px] font-bold break-words md:text-[35px] max-w-full'>{article && article.title}</p>
                                </div>

                                <div className='w-full md:w-1/2 flex flex-col items-start gap-6 mt-4 '>
                                    <img src={barra.src} alt="" />
                                    <p className='text-white text-sm break-words max-w-full'>{editDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='max-w-[1200px] m-auto px-5 md:px-10 xl:max-w-[1050px]'>
                        <div className='mb-7'>
                            <img className='w-full h-72 sm:h-96 lg:h-[600px] object-cover' src={imageUrl} alt="" />
                        </div>

                        <div className='mb-7'>
                            <p className='text-[32px] text-[#19417f] font-semibold break-words max-w-full'>{article && article.title}</p>
                        </div>

                        <div className='flex gap-5 mb-4'>
                            <span className='border-[4px] border-[#e6e9ec]'></span>
                            <p className='text-sm text-[#333333]'>Escrito por: {article && article.author}</p>
                        </div>

                        <div className='mb-10'>
                            <p className='text-sm text-[#333333] leading-relaxed break-words max-w-full'>{article && article.description}</p>
                        </div>

                        {article && article.video ?
                            <div className='w-full mb-16 flex items-center justify-center'>
                                <iframe className='w-full h-72 sm:h-96 lg:h-[500px]' src={`https://www.youtube.com/embed/${article && article.video}`} title="TREMENDO ESPECTÁCULO dan Juan Ariztegui vs. &quot;La Villerita&quot; de Toloza - El Caldén 2023 | Cristian" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
                            </div>

                            :
                            null
                        }

                        <div className='flex justify-center gap-5 mb-10 md:mb-24'>
                            <Link href="https://www.facebook.com/AgoraPartnerships" target='_blank'>
                                <FaFacebook
                                    size={16}
                                />
                            </Link>

                            <Link href="https://www.instagram.com/agora_2030/" target='_blank'>
                                <FaInstagram
                                    size={16}
                                />
                            </Link>

                            <Link href="https://medium.com/@AgoraPartnerships" target='_blank'>
                                <FaTwitter
                                    size={16}
                                />
                            </Link>

                            <Link href="https://www.linkedin.com/company/agora-partnerships/" target='_blank'>
                                <FaLinkedin
                                    size={16}
                                />
                            </Link>

                            <Link href=" https://open.spotify.com/show/2ejv4LsiSWT9GsFnnHsHZc?si=8f23d80160c54fb6&nd=1" target='_blank'>
                                <FaSpotify
                                    size={16}
                                />
                            </Link>

                            <Link href="https://www.youtube.com/channel/UCHourQ5NcP4S-jsA2fvBmEA" target='_blank'>
                                <MdEmail
                                    size={16}
                                />
                            </Link>
                        </div>

                        <div className='mb-10 md:mb-32'>
                            <CardsBlog />
                        </div>
                    </div>
                </>
            }
        </div>

    )
}

{/* {!article ?
                <p>Loading...</p>
                :
                <div>
                    <h1>{article ? article.title : 'Loading...'}</h1>
                    {article && <img src={imageUrl} alt='' />}
                    <p>{article ? article.description : 'Loading description...'}</p>
                </div>
            } */}

export default PageId