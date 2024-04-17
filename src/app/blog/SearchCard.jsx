import React, { useEffect, useState } from 'react'
import axios from "axios";
import { IoSearch } from "react-icons/io5";

const SearchCard = ({ setArticles }) => {
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/articles?search=${search}&sort=${order}`)
            setArticles(response.data.articles || [])
        } catch (error) {
            console.error('Error buscando articles', error)
            setArticles([])
        }
    }

    useEffect(() => {
        if (search.trim() !== '' || order !== '') {
            fetchData()
        } else {
            fetchData()
        }
    }, [search, order])

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const changeOrder = (newOrder) => {
        setOrder(newOrder)
    }

    return (
        <div className="flex flex-col gap-6 items-start md:flex-row md:items-center md:gap-10">
            <div className='flex items-center gap-4'>
                <input
                    type="text"
                    value={search}
                    onChange={handleChangeSearch}
                    placeholder="Buscar artículos..."
                    className="input text-[#333333] bg-[#fff] outline-none w-full border-b border-[#333333] py-2 placeholder:text-[#333333] text-sm"
                />
                <div onClick={fetchData} className='bg-[#c1285d] text-white cursor-pointer py-1 px-2 rounded-full hover:bg-[#aa2251] w-max flex gap-2 items-center'>
                    <IoSearch size={18} color="#fff" />
                    <p>Buscar</p>
                </div>
            </div>

            <div className='flex gap-2'>
                <div onClick={() => changeOrder('ASC')} className={`text-sm font-semibold cursor-pointer py-0.5 px-3 rounded-sm ${order === 'ASC' ? 'bg-[#333333] text-white' : 'text-[#333333]'}`}>
                    <p>Ascendente</p>
                </div>
                <div onClick={() => changeOrder('DEC')} className={`text-sm font-semibold cursor-pointer py-0.5 px-3 rounded-sm ${order === 'DEC' ? 'bg-[#333333] text-white' : 'text-[#333333]'}`}>
                    <p>Descendente</p>
                </div>
            </div>
        </div>
    )
}

export default SearchCard
