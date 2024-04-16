import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
import emprendedora from '@/assets/que_hacemos/Mujer-emprendedora.png'
import planeacion from '@/assets/que_hacemos/planeacion.png'
import empresario from '@/assets/que_hacemos/empresario-levantando-la-mano.png'
import signal from '@/assets/signal.svg'

const QueHacemos = () => {

    return (
        <div className='mb-16 lg:mb-28 max-w-[1200px] m-auto px-5 md:px-10'>
            <div className='flex flex-col gap-6 justify-between mb-14 md:flex-row'>
                <div className='w-full max-w-[28rem]'>
                    <p className='text-[28px] font-semibold text-[#19417f] mb-3'>¿Qué hacemos?</p>
                    <p className='text-[#333333]'>Calibramos el ecosistema emprendedor de América Latina para crear prosperidad inclusiva para el individuo, la empresa, la comunidad y el medio ambiente.</p>
                </div>
                <div className='w-full'>
                    <div className='group flex gap-2 justify-end items-start cursor-pointer'>
                        <p className='text-sm font-semibold text-[#19417f]'>Conocer más sobre nuestros programas</p>
                        <div className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'>
                            <BsArrowUpRightCircle
                                color='#19417f'
                                size={20}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className=' grid grid-cols-1 gap-10 lg:gap-6 lg:grid-cols-3'>
                <div className='group relative flex flex-col gap-4'>
                    <div className=' cursor-pointer overflow-hidden rounded-2xl '>
                        <div className='z-[5] hidden cursor-pointer absolute top-[-18px] left-[35px] group-hover:block'>
                            <img width={20} src={signal.src} alt="" />
                        </div>
                        <img className='w-full h-52 sm:h-64 object-cover rounded-2xl hover:scale-110 duration-300' src={emprendedora.src} alt="" />
                    </div>
                    <div className='group p-6 rounded-xl flex flex-col gap-4 flex-1 group-hover:bg-[linear-gradient(359.74deg,_#C1285D_10.64%,_#9C2C4C_104.83%)]'>
                        <p className='text-[#333333] font-bold text-lg group-hover:text-white'>Emprendimientos y pequeñas empresas en crecimiento</p>
                        <p className='text-[#333333] text-sm group-hover:text-white'>Ofrecemos formación empresarial, vinculación a mercados y acceso a financiamiento a emprendedores y pequeñas empresas en crecimiento en su camino hacia la sostenibilidad económica, social y ambiental.</p>
                    </div>
                </div>

                <div className='group relative flex flex-col gap-4'>
                    <div className='cursor-pointer overflow-hidden rounded-2xl flex'>
                        <div className='z-[5] hidden cursor-pointer absolute top-[-18px] left-[35px] group-hover:block'>
                            <img width={20} src={signal.src} alt="" />
                        </div>
                        <img className='w-full h-52 sm:h-64 object-cover rounded-2xl hover:scale-110 duration-300' src={planeacion.src} alt="" />
                    </div>
                    <div className='group p-6 rounded-xl flex flex-col gap-4 flex-1 group-hover:bg-[linear-gradient(99.27deg,_#E2663A_-2.26%,_#EB9B1A_98.84%)]'>
                        <p className='text-[#333333] font-bold text-lg group-hover:text-white'>Ecosistema</p>
                        <p className='text-[#333333] text-sm group-hover:text-white'>Contribuimos al fortalecimiento del ecosistema de emprendedores y pequeñas empresas en crecimiento a través de eventos, tales como el programa Formando Catalizadores, y el co-liderazgo de la Red de Impacto, integrada por más de 100 organizaciones de la región.</p>
                    </div>
                </div>

                <div className='group relative flex flex-col gap-4'>
                    <div className='cursor-pointer overflow-hidden rounded-2xl flex'>
                        <div className='z-[5] hidden cursor-pointer absolute top-[-18px] left-[35px] group-hover:block'>
                            <img width={20} src={signal.src} alt="" />
                        </div>
                        <img className='w-full h-52 sm:h-64 object-cover rounded-2xl hover:scale-110 duration-300' src={empresario.src} alt="" />
                    </div>
                    <div className='group p-6 rounded-xl flex flex-col gap-4 flex-1 group-hover:bg-[linear-gradient(99deg,_#0D9A51_0%,_#02804C_100%)]'>
                        <p className='text-[#333333] font-bold text-lg group-hover:text-white'>Proyectos inclusivos</p>
                        <p className='text-[#333333] text-sm group-hover:text-white'>Ejecutamos proyectos específicos junto a aliados con los que compartimos nuestra visión por la inclusión financiera, la equidad de género, la diversificación, resiliencia y sostenibilidad en las cadenas de valor, y la adaptación al cambio climático en la región.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QueHacemos