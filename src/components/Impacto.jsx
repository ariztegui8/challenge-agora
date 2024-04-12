'use client'
import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";


const Impacto = () => {

    return (
        <div className='px-4 pt-16 pb-8 mb-16 md:px-10 lg:px-24 lg:mb-28 bg-[#19417f] rounded-2xl'>
            <div className='flex flex-col gap-2 justify-between mb-20 lg:flex-row lg:gap-10'>
                <div className='w-full md:max-w-[20rem] lg:pt-11'>
                    <p className='text-[28px] font-semibold text-white mb-3'>Impacto</p>
                    <p className='text-white mb-3'>Nos comprometemos a la transparencia con los emprendedores y el ecosistema emprendedor en Latinoamérica alineándonos con los Objetivos de Desarrollo Sostenible de las Naciones Unidas.</p>
                </div>
                <div className='w-full'>
                    <div className='flex gap-2 justify-start items-start cursor-pointer mb-10 md:justify-end'>
                        <p className='text-sm font-semibold text-white'>Ver más</p>
                        <BsArrowUpRightCircle
                            color='#ffffff'
                            size={20}
                        />
                    </div>
                    <div className='flex flex-col justify-center gap-5 lg:justify-end md:flex-row'>
                        <div className='bg-white rounded-2xl mx-5 px-2 py-10 flex flex-col gap-3 justify-center items-center text-center hover:scale-110 duration-300 md:mx-0'>
                            <p className='text-[28px] font-bold text-[#19417f]'>2,300</p>
                            <p className='text-sm text-[#205AB4] font-semibold'>Emprendedores atendidos</p>
                        </div>
                        <div className='bg-white rounded-2xl mx-5 px-2 py-10 flex flex-col gap-3 justify-center items-center text-center hover:scale-110 duration-300 md:mx-0'>
                            <p className='text-[28px] font-bold text-[#19417f]'>329</p>
                            <p className='text-sm text-[#205AB4] font-semibold'>Catalizadores capacitados</p>
                        </div>
                        <div className='bg-white rounded-2xl mx-5 px-2 py-10 flex flex-col gap-3 justify-center items-center text-center hover:scale-110 duration-300 md:mx-0'>
                            <p className='text-[28px] font-bold text-[#19417f]'>23</p>
                            <p className='text-sm text-[#205AB4] font-semibold'>Países que tenemos incidencia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Impacto