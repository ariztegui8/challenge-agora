'use client'
import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";


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
    const [error, setError] = useState(false)

    const { nombre, apellido, email, profesion, empresa, pais } = form

    const handleChangeForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = e => {
        e.preventDefault()
        console.log(form);

        if (recaptcha) {
            console.log('recaptcha', recaptcha)
        } else {
            console.log('No recaptcha')
        }

        if (nombre.trim() == '' || apellido.trim() == '' || email.trim() == '' || profesion.trim() == '' || email.trim() == '' || pais.trim() == '' || !recaptcha) {
            setError(true)
            return
        }

        setError(false)

        setForm({
            nombre: '',
            apellido: '',
            email: '',
            profesion: '',
            empresa: '',
            pais: '',
        })
    }

    const validForm = nombre.trim() && apellido.trim() && email.trim() && profesion.trim() && empresa.trim() && pais.trim() && recaptcha

    return (
        <div className='px-4 py-10 mb-16 md:px-10 lg:px-24 md:py-20 lg:mb-28 bg-[#333333] rounded-2xl' id='newsletter'>
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
                        sitekey='6LdLgbcpAAAAABmoi1tE-38-DQvz1KvwJ1w6NDrw'
                        onChange={setRecaptcha}
                    />
                </div>

                {error &&
                    <div className='text-right'>
                        <p className='text-white'>Por favor complete todos los campos</p>
                    </div>
                }

                <div >
                    <button disabled={!validForm} type='submit' className={`bg-[#c1285d] text-white text-[15px] py-2 px-7 rounded-full hover:bg-[#aa2251] w-max  ${!validForm ? 'bg-gray-300 hover:bg-gray-300 cursor-not-allowed' : 'cursor-pointer'}`}>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Newsletter