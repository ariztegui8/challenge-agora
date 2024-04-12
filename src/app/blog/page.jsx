'use client'
import axios from "axios";
import diseñador from '@/assets/oportunidad-laboral/Disenador-freelance.webp'
import enginner from '@/assets/oportunidad-laboral/Data-engineer.webp'
import gerente from '@/assets/oportunidad-laboral/Gerente-de-Alianzas4.webp'
import { useEffect, useState } from "react";

const Blog = () => {



  return (
    <div className='px-4 mb-16 md:px-10 lg:px-24 lg:mb-28'>
    <div className='mb-6 lg:mb-12'>
        <div className='w-full flex flex-col items-start gap-2 lg:flex-row lg:gap-40 lg:items-center'>
            <p className='text-[28px] font-semibold text-[#19417f] mb-3'>Oportunidades laborales</p>
            <div className='bg-[#c1285d] text-white text-[15px] cursor-pointer py-2 px-6 rounded-full hover:bg-[#aa2251] w-max'>
                <p>Conoce todas nuestras vacantes</p>
            </div>
        </div>
    </div>

    <div className='grid grid-cols-1 gap-10 lg:gap-4 lg:grid-cols-3'>
        <div className='flex flex-col gap-4'>
            <div className='cursor-pointer rounded-2xl flex lg:overflow-hidden'>
                <img className='w-full h-52 sm:h-64 object-cover rounded-lg' src={diseñador.src} alt="" />
            </div>
            <div className='rounded-xl flex justify-between flex-col gap-4 flex-1'>
                <div className='flex flex-col gap-4'>
                    <p className='text-[#333333] font-bold text-lg'>Diseñador Gráfico Freelance</p>
                    <p className='text-[#333333] text-sm mb-3'>Buscamos un/a Diseñador/a Gráfico con al menos 3 años de experiencia en diseño de presentaciones, materiales educativos, brochures, y otros materiales asociados a productos educativos digitales.</p>
                </div>
                <div className='bg-[#c1285d] text-white text-sm cursor-pointer py-1 px-7 rounded-full hover:bg-[#aa2251] w-max'>
                    <p>CONOCER MÁS</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <div className='cursor-pointer rounded-2xl flex lg:overflow-hidden'>
                <img className='w-full h-52 sm:h-64 object-cover rounded-lg' src={enginner.src} alt="" />
            </div>
            <div className='rounded-xl flex justify-between flex-col gap-4 flex-1'>
                <div className='flex flex-col gap-4'>
                    <p className='text-[#333333] font-bold text-lg'>Data Engineer (Ingeniero/a de Datos)</p>
                    <p className='text-[#333333] text-sm mb-3'>Buscamos un/a Data Engineer (Ingeniero de Datos) que contribuya al desarrollo, implementación y mantenimiento de un sistema de gestión de datos eficiente, eficaz y robusto</p>
                </div>
                <div className='bg-[#c1285d] text-white text-sm cursor-pointer py-1 px-7 rounded-full hover:bg-[#aa2251] w-max'>
                    <p>CONOCER MÁS</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <div className='cursor-pointer rounded-2xl flex lg:overflow-hidden'>
                <img className='w-full h-52 sm:h-64 object-cover rounded-lg' src={gerente.src} alt="" />
            </div>
            <div className='rounded-xl flex justify-between flex-col gap-4 flex-1'>
                <div className='flex flex-col gap-4'>
                    <p className='text-[#333333] font-bold text-lg'>Gerente de Alianzas</p>
                    <p className='text-[#333333] text-sm mb-3'>Buscamos un/una profesional con experiencia y habilidades en la construcción y gestión de alianzas comerciales y estratégicas con múltiples tipos de organizaciones</p>
                </div>
                <div className='bg-[#c1285d] text-white text-sm cursor-pointer py-1 px-7 rounded-full hover:bg-[#aa2251] w-max'>
                    <p>CONOCER MÁS</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Blog