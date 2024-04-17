'use client'
import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";


const Newsletter = () => {

    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        email: '',
        profesion: '',
        empresa: '',
        pais: '',
    })
    const [recaptcha, setRecaptcha] = useState('')
    const [subscribed, setSubscribed] = useState(false)
    const [error, setError] = useState(false)

    const { nombre, apellido, email, profesion, empresa, pais } = form

    const handleChangeForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        if (!recaptcha || !nombre.trim() || !apellido.trim() || !email.trim() || !profesion.trim() || !empresa.trim() || !pais.trim()) {
            setError(true)
            return
        }

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subscribers`, form)
            console.log('Suscriptor agregado con exito')
            setForm({
                nombre: '',
                apellido: '',
                email: '',
                profesion: '',
                empresa: '',
                pais: ''
            })
            setError(false)
            setSubscribed(true)
            setTimeout(() => {
                setSubscribed(false)
            }, 4000)

        } catch (error) {
            console.error('Error al agregar suscriptor:', error)
        }
    }

    const validForm = nombre.trim() && apellido.trim() && email.trim() && profesion.trim() && empresa.trim() && pais.trim() && recaptcha

    return (
        <div className='bg-[#333333] rounded-2xl'>
            <div className='py-10 mb-16  md:py-20 lg:mb-28  max-w-[1200px] m-auto px-5 md:px-10'>
                <div className='mb-10'>
                    <div className='w-full'>
                        <p className='text-[32px] font-semibold text-white lg:max-w-[20rem]'>Suscríbete a nuestro newsletter</p>
                    </div>
                </div>

                <form onSubmit={handleSubmitForm}>
                    <div className='flex flex-col gap-4 mb-6 md:flex-row md:gap-10'>
                        <div className='w-full'>
                            <div className='flex flex-col gap-4'>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="input text-white bg-[#333333] outline-none w-full border-b border-white py-2 placeholder:text-white text-sm"
                                    name='nombre'
                                    value={nombre}
                                    onChange={handleChangeForm}
                                />
                                <input
                                    type="text"
                                    placeholder="Apellido"
                                    className="input text-white bg-[#333333] outline-none w-full border-b border-white py-2 placeholder:text-white text-sm"
                                    name='apellido'
                                    value={apellido}
                                    onChange={handleChangeForm}
                                />
                                <input
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    className="input text-white bg-[#333333] outline-none w-full border-b border-white py-2 placeholder:text-white text-sm"
                                    name='email'
                                    value={email}
                                    onChange={handleChangeForm}
                                />
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='flex flex-col gap-4'>
                                <input
                                    type="text"
                                    placeholder="Profesíon"
                                    className="input text-white bg-[#333333] outline-none w-full border-b border-white py-2 placeholder:text-white text-sm"
                                    name='profesion'
                                    value={profesion}
                                    onChange={handleChangeForm}
                                />
                                <input
                                    type="text"
                                    placeholder="Empresa"
                                    className="input text-white bg-[#333333] outline-none w-full border-b border-white py-2 placeholder:text-white text-sm"
                                    name='empresa'
                                    value={empresa}
                                    onChange={handleChangeForm}
                                />
                                <input
                                    type="text"
                                    placeholder="País"
                                    className="input text-white bg-[#333333] outline-none w-full border-b border-white py-2 placeholder:text-white text-sm"
                                    name='pais'
                                    value={pais}
                                    onChange={handleChangeForm}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mb-12'>
                        <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_KEY_RECAPTCHA}
                            onChange={setRecaptcha}
                        />
                    </div>

                    {error &&
                        <div className='text-right'>
                            <p className='text-white'>Por favor complete todos los campos</p>
                        </div>
                    }
                    {subscribed &&
                        <div className='flex items-center justify-end gap-3 mb-2'>
                            <FaCheck
                                color='#ffffff'
                                size={26}
                            />
                            <p className='text-white font-semibold'>Subscripción exitosa</p>
                        </div>
                    }

                    <div >
                        <button disabled={!validForm} type='submit' className={`bg-[#c1285d] text-white text-[15px] py-2 px-7 rounded-full hover:bg-[#aa2251] w-max  ${!validForm ? 'bg-gray-300 hover:bg-gray-300 cursor-not-allowed' : 'cursor-pointer'}`}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newsletter