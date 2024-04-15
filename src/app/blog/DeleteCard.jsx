import React, { useState } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";

const DeleteCard = ({ isOpen, onClose, articleToDelete, handleDeleteArticle }) => {

    const handleDelete = () => {
        handleDeleteArticle(articleToDelete._id)
        onClose()
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[45]">
            <div className=" bg-white rounded-xl shadow-lg p-5">
                <div>
                    <div className='flex justify-end mb-2'>
                        <IoMdCloseCircleOutline
                            size={25}
                            color="#333333"
                            className='cursor-pointer'
                            onClick={onClose}
                        />
                    </div>

                    <div>
                        <p className='text-[#333333] text-lg font-semibold mb-2'>Eliminar artículo</p>
                        <p className='text-[#333333] text-sm'>¿Estás seguro de que deseas eliminar este artículo?</p>

                        <div className='flex justify-end gap-4 mt-6'>
                            <button onClick={onClose} className='text-white bg-[#c1285d] hover:bg-[#aa2251] font-semibold py-2 px-4 rounded'>Cancelar</button>
                            <button onClick={handleDelete} className='text-white bg-[#333333] hover:bg-[#4d4c4c] font-semibold py-2 px-4 rounded'>Eliminar</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DeleteCard