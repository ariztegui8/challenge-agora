import React, { useState, useEffect } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import axios from 'axios';

const EditCard = ({ isOpen, onClose, setArticles, articleToEdit }) => {

    const [form, setForm] = useState({
        title: '',
        description: '',
        category: '',
        image: null,
    });

    useEffect(() => {
        if (articleToEdit && isOpen) {
            setForm({
                title: articleToEdit.title,
                description: articleToEdit.description,
                category: articleToEdit.category,
                image: null,
            })
        }
    }, [articleToEdit, isOpen])

    const handleChangeForm = e => {
        if (e.target.name === 'image') {
            setForm({ ...form, image: e.target.files[0] })
        } else {
            setForm({ ...form, [e.target.name]: e.target.value })
        }
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', form.title)
        formData.append('description', form.description)
        formData.append('category', form.category)
        if (form.image) {
            formData.append('image', form.image)
        }
    
        for (let [key, value] of formData.entries()) {
            console.log(key, value)
        }
    
        try {
            const response = await axios({
                method: 'put',
                url: `http://localhost:3001/api/articles/${articleToEdit._id}`,
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' },
            })
    
            if (response.status === 200) {
                console.log("Artículo actualizado", response.data)
                setArticles(prevArticles => prevArticles.map(article => article._id === articleToEdit._id ? response.data : article))
                onClose()
            } else {
                console.log("Respuesta al actualizar", response)
            }
        } catch (error) {
            console.error('Error actualizado article', error)
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
             <div className="w-[600px] bg-white rounded-xl shadow-lg p-5 custom-scrollbar">
                <div>
                    <div className='flex justify-end mb-4'>
                        <IoMdCloseCircleOutline size={25} color="#333333" className='cursor-pointer' onClick={onClose} />
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
                                value={form.title}
                                onChange={handleChangeForm}
                            />
                             <textarea
                                type="text"
                                placeholder="Descripción"
                                className="input text-[#333333] bg-[#fff] outline-none w-full border-b border-[#333333] py-2 placeholder:text-[#333333] text-sm"
                                name='description'
                                value={form.description}
                                onChange={handleChangeForm}
                                rows={3}
                            >
                            </textarea>
                            <select
                                className="custom-scrollbar text-[#333333] bg-[#fff] outline-none w-full border-b border-[#333333] py-2 placeholder:text-[#333333] text-sm cursor-pointer"
                                name='category'
                                value={form.category}
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
                            <button type='submit' className={`bg-[#c1285d] text-white text-[15px] py-1.5 px-6 rounded-full hover:bg-[#aa2251] w-max `}>Actualizar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditCard;