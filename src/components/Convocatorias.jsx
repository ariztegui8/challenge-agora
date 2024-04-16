import React from 'react'
import juntas from '@/assets/convocatorias/Juntas-Contamos-portada-1-jpg.webp'
import historia from '@/assets/convocatorias/una-historia-de-empresarialidad-femenina-1536x1024.webp'
import francis from '@/assets/convocatorias/Francis-Castillo-1536x1203.webp'

const Convocatorias = () => {
    return (
        <div className='mb-16 lg:mb-28 max-w-[1200px] m-auto px-5 md:px-10'>
            <div className='mb-12'>
                <div className='w-full '>
                    <p className='text-[28px] font-semibold text-[#19417f] mb-3'>Convocatorias abiertas y novedades</p>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-10 lg:gap-6 lg:grid-cols-3'>
                <div className='relative flex flex-col gap-4'>
                    <div className='cursor-pointer rounded-2xl flex lg:overflow-hidden'>
                        <div className='bg-[#333333] text-white text-xs cursor-pointer py-1.5 px-4 rounded-full absolute top-0 m-5'>
                            <p>CONVOCATORIA ABIERTA</p>
                        </div>
                        <img className='w-full h-52 sm:h-64 object-cover rounded-lg' src={juntas.src} alt="" />
                    </div>
                    <div className='rounded-xl flex justify-between flex-col gap-4 flex-1'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[#333333] font-bold text-lg'>Programa Juntas Contamos</p>
                            <p className='text-[#333333] text-sm mb-3'>Oportunidad para mujeres empresarias en México, Guatemala, El Salvador y Honduras. Juntas Contamos Consta de tres programas dirigidos a 3 perfiles diferentes de empresarias.</p>
                        </div>
                        <div className='bg-[#c1285d] text-white text-sm cursor-pointer py-1 px-7 rounded-full hover:bg-[#aa2251] w-max'>
                            <p>CONOCER MÁS</p>
                        </div>
                    </div>
                </div>

                <div className='relative flex flex-col gap-4'>
                    <div className='cursor-pointer rounded-2xl flex lg:overflow-hidden'>
                        <div className='bg-[#333333] text-white text-xs cursor-pointer py-1.5 px-4 rounded-full absolute top-0 m-5'>
                            <p>BLOG</p>
                        </div>
                        <img className='w-full h-52 sm:h-64 object-cover rounded-lg' src={historia.src} alt="" />
                    </div>
                    <div className='rounded-xl flex justify-between flex-col gap-4 flex-1'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[#333333] font-bold text-lg'>La escoba y yo: una historia de empresarialidad femenina</p>
                            <p className='text-[#333333] text-sm mb-3'>Los roles de género son estructuras complejas en las que intervienen factores sociales, económicos, políticos y culturales, en los que se construyen barreras invisibles</p>
                        </div>
                        <div className='bg-[#c1285d] text-white text-sm cursor-pointer py-1 px-7 rounded-full hover:bg-[#aa2251] w-max'>
                            <p>CONOCER MÁS</p>
                        </div>
                    </div>
                </div>

                <div className='relative flex flex-col gap-4'>
                    <div className='cursor-pointer rounded-2xl flex lg:overflow-hidden'>
                        <div className='bg-[#333333] text-white text-xs cursor-pointer py-1.5 px-4 rounded-full absolute top-0 m-5'>
                            <p>BLOG</p>
                        </div>
                        <img className='w-full h-52 sm:h-64 object-cover rounded-lg' src={francis.src} alt="" />
                    </div>
                    <div className='rounded-xl flex justify-between flex-col gap-4 flex-1'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[#333333] font-bold text-lg'>“Alcanzar un equilibrio entre el trabajo y familia uno de los retos más importantes al ser empresaria”</p>
                            <p className='text-[#333333] text-sm mb-3'>Francis Castillo, fundadora de ‘The Baking Mom’es un gran ejemplo de cómo el ser mamá y emprendedora se puede lograr rompiendo paradigmas y miedos</p>
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

export default Convocatorias