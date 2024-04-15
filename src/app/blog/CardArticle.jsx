import React, { useState } from 'react'
import axios from "axios";
import { LuMoreVertical } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { changeEditDescription } from '@/helpers';
import { useRouter } from 'next/navigation';

const CardArticle = ({ article, openModalEdit, openModalDelete }) => {

    const [mostrarBtn, setMostrarBtn] = useState(false);
    const [menu, setMenu] = useState(false);

    const router = useRouter()

    const handleMenu = () => {
        setMenu(!menu)
    }

    // console.log(article);

    if (!article || !article.image) {
        return null
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const imageUrl = article.image ? `${baseUrl}/${article.image.replace(/\\/g, '/')}` : `${baseUrl}/uploads/default.webp`

    const handleEdit = () => {
        openModalEdit(article)
        setMenu(false)
    };


    const handleCloseMenuDelete = () => {
        openModalDelete(article)
        setMenu(false)
    }

    const editDescription = changeEditDescription(article.description, 150);


    const handlePageId = () => {
        router.push(`/blog/${article._id}`)
    };

    return (
        <div className='relative flex flex-col gap-4 mb-4 lg:mb-8'>
            <div
                className='cursor-pointer rounded-2xl overflow-hidden relative'
                onMouseEnter={() => setMostrarBtn(true)}
                onMouseLeave={() => setMostrarBtn(false)}
            >
                <div className='bg-[#333333] text-white text-xs  py-1.5 px-4 rounded-full absolute top-0 m-5'>
                    <p>{article.category}</p>
                </div>
                <img className='w-full h-52 sm:h-64 object-cover rounded-lg' src={imageUrl} alt="" />
                <div className='hidden lg:flex'>
                    {mostrarBtn && (
                        <div className='absolute inset-0 flex justify-center items-center space-x-4 bg-black bg-opacity-[0.6]'>
                            <button onClick={() => openModalEdit(article)} className='text-white bg-[linear-gradient(99.27deg,_#E2663A_-2.26%,_#EB9B1A_98.84%)] hover:bg-[linear-gradient(99.27deg,_#e07750_-2.26%,_#eba32f_98.84%)] font-bold py-2 px-4 rounded'>
                                Editar
                            </button>
                            <button onClick={() => openModalDelete(article)} className='text-white bg-[#333333] hover:bg-[#4d4c4c] font-bold py-2 px-4 rounded'>
                                Eliminar
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className='rounded-xl flex justify-between flex-col gap-4 flex-1'>
                <div className='flex flex-col gap-4'>
                    <p className='text-[#333333] font-bold text-lg break-words'>{article.title}</p>
                    <p className='text-[#333333] text-sm mb-3 break-words'>{editDescription}</p>
                </div>
                <div className='flex items-center gap-4'>
                    <div onClick={handlePageId} className='bg-[#c1285d] text-white text-sm cursor-pointer py-1 px-7 rounded-full hover:bg-[#aa2251] w-max'>
                        <p>CONOCER MÁS</p>
                    </div>
                    <div className='relative flex lg:hidden'>
                        <div className='bg-[#333333] text-white text-sm cursor-pointer py-1 px-2 rounded-full hover:bg-[#272727] w-max'>
                            <LuMoreVertical
                                size={22}
                                color="#ffffff"
                                className='cursor-pointer'
                                onClick={handleMenu}
                            />
                        </div>
                        {menu &&
                            <div className='absolute left-[45px] top-[-27px] bg-white shadow-xl rounded-lg p-4 flex flex-col gap-2 z-40'>
                                <div onClick={handleEdit} className='flex items-center gap-2 cursor-pointer'>
                                    <MdEdit
                                        size={20}
                                        color="#333333"
                                    />
                                    <p className='text-[#333333] text-sm'>Editar</p>
                                </div>

                                <div onClick={handleCloseMenuDelete} className='flex items-center gap-2 cursor-pointer'>
                                    <RiDeleteBin6Line
                                        size={20}
                                        color="#333333"
                                    />
                                    <p className='text-[#333333] text-sm'>Eliminar</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardArticle