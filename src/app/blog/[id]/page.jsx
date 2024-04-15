'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const PageId = () => {

    const [article, setArticle] = useState(null);
    const router = useRouter();

    useEffect(() => {
        console.log('Router is ready:', router.isReady);
        if (router.isReady) {
            const { id } = router.query
            console.log('Article ID:', id);
            fetchArticle(id)
        }
    }, [router.isReady, router.query])

    const fetchArticle = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/articles/${id}`)
            console.log('API response:', response.data);
            setArticle(response.data)
        } catch (error) {
            console.error('Error buscando article', error)
        }
    };


    return (
        <div className='mt-12 lg:mt-28'>
            {!article ?
                <p>Loading...</p>
                :
                <div>
                    <h1>{article ? article.title : 'Loading...'}</h1>
                    {article && <img src={article.image} alt='' />}
                    <p>{article ? article.description : 'Loading description...'}</p>
                </div>
            }

        </div>
    )
}

export default PageId