'use client'
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import blogImg from '@/assets/blog/blog-img.webp'
import CardArticle from "./CardArticle";
import AddCard from "./AddCard";
import { FaPlus } from "react-icons/fa6";
import EditCard from "./EditCard";
import SearchCard from "./SearchCard";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import DeleteCard from "./DeleteCard";



const Blog = () => {

    const [articles, setArticles] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpenEdit, setModalOpenEdit] = useState(false);
    const [isModalOpenDelete, setModalOpenDelete] = useState(false);
    const [articleToEdit, setArticleToEdit] = useState(null);
    const [articleToDelete, setArticleToDelete] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }

    const openModalEdit = (article) => {
        setArticleToEdit(article)
        setModalOpenEdit(true)
    }
    const closeModalEdit = () => {
        setModalOpenEdit(false)
        setArticleToEdit(null)
    }

    const openModalDelete = (article) => {
        setArticleToDelete(article)
        setModalOpenDelete(true)
    }
    const closeModalDelete = () => {
        setModalOpenDelete(false)
    }

    const consumirApi = async (page = 1) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/api/articles?page=${page}&limit=10`)
            setArticles(data.articles || [])
            setTotalPages(data.totalPages)
            setPage(data.page)
        } catch (error) {
            console.error('Error obteniendo artículos', error)
            setArticles([])
        }
    }

    useEffect(() => {
        consumirApi();
    }, [])

    const scroll = useRef(null)

    const nextPage = () => {
        if (page < totalPages) {
            consumirApi(page + 1)
            scroll.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    const backPage = () => {
        if (page > 1) {
            consumirApi(page - 1)
            scroll.current.scrollIntoView({ behavior: "smooth" })
        }
    }


    const handleDeleteArticle = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/articles/${id}`)
            setArticles(prevArticles => prevArticles.filter(article => article._id !== id))
            closeModalDelete()
        } catch (error) {
            console.error('Error al eliminar el artículo', error)
        }
    }



    return (
        <div ref={scroll} className='mt-12 lg:mt-28'>
            <div className='px-4 mb-12 lg:mb-12 flex flex-col gap-6 md:flex-row xl:px-24'>
                <div className="bg-[#19417f] rounded-2xl flex flex-col justify-center p-6 w-full md:p-8 lg:p-20 md:w-[55%]">
                    <p className='text-sm font-semibold text-white mb-4 md:text-xs'>NUESTRO BLOG</p>
                    <p className='text-white text-[25px] font-semibold md:text-[35px]'>Conoce nuestros últimos artículos y noticias</p>
                </div>

                <div className=' w-full cursor-pointer rounded-2xl flex flex-col lg:overflow-hidden md:w-[45%]'>
                    <img className='w-full h-52 sm:h-64 object-cover rounded-lg md:flex-1' src={blogImg.src} alt="" />
                </div>
            </div>

            <div className="px-4 md:px-36 mb-12 lg:px-60">
                <div className="rounded-xl bg-[#333333] flex gap-5 justify-center p-5 flex-wrap">
                    <p className="text-white text-xs cursor-pointer">Blog</p>
                    <p className="text-white text-xs cursor-pointer">Convocatoria abierta</p>
                    <p className="text-white text-xs cursor-pointer">Oportunidad Laboral</p>
                    <p className="text-white text-xs cursor-pointer">Programa</p>
                    <p className="text-white text-xs cursor-pointer">Programa en ejecución</p>
                    <p className="text-white text-xs cursor-pointer">Programas ejecutados</p>
                    <p className="text-white text-xs cursor-pointer">Sala de Prensa</p>
                    <p className="text-white text-xs underline cursor-pointer">Todos</p>
                </div>
            </div>

            <div ref={scroll} className="flex flex-col gap-6 justify-evenly mb-10 px-4 xl:px-24 lg:flex-row">
                <SearchCard
                    setArticles={setArticles}
                />
                <div onClick={openModal} className='bg-[#c1285d] text-white cursor-pointer py-1 px-7 rounded-full hover:bg-[#aa2251] w-max flex gap-2 items-center'>
                    <FaPlus
                        size={16}
                        color="#fff"
                    />
                    <p>Agregar artículo</p>
                </div>
                <AddCard
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    setArticles={setArticles}
                />
                <EditCard
                    isOpen={isModalOpenEdit}
                    onClose={closeModalEdit}
                    articleToEdit={articleToEdit}
                    setArticles={setArticles}
                />

                <DeleteCard
                    isOpen={isModalOpenDelete}
                    onClose={closeModalDelete}
                    articleToDelete={articleToDelete}
                    handleDeleteArticle={handleDeleteArticle}
                />
            </div>

            <div className="px-4 mb-16 md:px-10 lg:px-24 lg:mb-28">
                <div className='grid grid-cols-1 gap-10 mb-4 lg:gap-6 lg:grid-cols-3'>
                    {articles.length > 0 ?
                        articles.map(article => (
                            <CardArticle
                                key={article._id}
                                article={article}
                                openModalEdit={openModalEdit}
                                openModalDelete={openModalDelete}
                            />
                        ))
                        :
                        <p className="col-span-full text-center">No hay artículos disponibles.</p>
                    }
                </div>

                {articles.length > 0 ?
                    <div className="flex justify-center">
                        <button
                            onClick={backPage}
                            className={`text-[#19417f] rounded-l-lg px-2 ${page == 1 ? 'hidden' : ''}`}
                        >
                            <MdKeyboardArrowLeft
                                size={30}
                                color="#19417f"
                            />
                        </button>
                        <button className=" text-[#19417f] font-medium px-2">Página {page} de {totalPages}</button>
                        <button
                            onClick={nextPage}
                            className={`text-[#19417f] rounded-r-lg px-2 ${page == totalPages ? 'hidden' : ''}`}
                        >
                            <MdKeyboardArrowRight
                                size={30}
                                color="#19417f"
                            />
                        </button>
                    </div>
                    : null
                }
            </div>

        </div>
    )
}

export default Blog