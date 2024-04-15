import React, { useState } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import axios from 'axios';

const AddCard = ({ isOpen, onClose, setArticles }) => {

    const [form, setForm] = useState({
        title: '',
        description: '',
        category: ''
    })

    const { title, description, category } = form

    const [file, setFile] = useState(null)

    const handleChangeForm = e => {
        if (e.target.name === 'image') {
            setFile(e.target.files[0])
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', form.title)
        formData.append('description', form.description)
        formData.append('category', form.category);
        if (file) {
            formData.append('image', file)
        }

        try {
            const response = await axios.post('http://localhost:3001/api/articles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            console.log(response.data)
            if (response.data && response.data.articleId) {
                const newArticle = {
                    _id: response.data.articleId,
                    title: form.title,
                    description: form.description,
                    category: form.category,
                    image: response.data.imagePath || 'uploads/default.webp'
                }
                setArticles(prev => [newArticle, ...prev])
            }
            setForm({
                title: '',
                description: '',
                category: ''
            })
            setFile(null)
            onClose()
        } catch (error) {
            console.error('Error', error.response ? error.response.data : error.message)
        }
    }

    if (!isOpen) return null


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
            <div className="w-[600px] bg-white rounded-xl shadow-lg p-5 custom-scrollbar">
                <div>
                    <div className='flex justify-end mb-4'>
                        <IoMdCloseCircleOutline
                            size={25}
                            color="#333333"
                            className='cursor-pointer'
                            onClick={onClose}
                        />
                    </div>
                    <form onSubmit={handleSubmitForm}>
                        <div className='flex flex-col gap-4 mb-6'>
                            <input
                                type="file"
                                placeholder="Agregar imagen"
                                className="input text-[#333333] bg-[#fff] outline-none w-full border-b border-[#333333] py-2 placeholder:text-[#333333] text-sm"
                                name='image'
                                onChange={handleChangeForm}
                            />
                            <input
                                type="text"
                                placeholder="Título"
                                className="input text-[#333333] bg-[#fff] outline-none w-full border-b border-[#333333] py-2 placeholder:text-[#333333] text-sm"
                                name='title'
                                value={title}
                                onChange={handleChangeForm}
                            />
                            <textarea
                                type="text"
                                placeholder="Descripción"
                                className="input text-[#333333] bg-[#fff] outline-none w-full border-b border-[#333333] py-2 placeholder:text-[#333333] text-sm"
                                name='description'
                                value={description}
                                onChange={handleChangeForm}
                                rows={3}
                            >
                            </textarea>
                            <select
                                className="custom-scrollbar text-[#333333] bg-[#fff] outline-none w-full border-b border-[#333333] py-2 placeholder:text-[#333333] text-sm cursor-pointer"
                                name='category'
                                value={category}
                                onChange={handleChangeForm}
                            >
                                <option value='' disabled >Selecciona una categoría</option>
                                <option value='BLOG'>Blog</option>
                                <option value='CONVOCATORIA ABIERTA'>Convocatoria abierta</option>
                                <option value='OPORTUNIDAD LABORAL'>Oportunidad laboral</option>
                                <option value='SALA DE PRENSA'>Sala de prensa</option>
                                <option value='PROGAMA'>Programa</option>
                            </select>
                        </div>

                        <div className='flex justify-end'>
                            <button type='submit' className={`bg-[#c1285d] text-white text-[15px] py-1.5 px-6 rounded-full hover:bg-[#aa2251] w-max `}>Agregar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddCard