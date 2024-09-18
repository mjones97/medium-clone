import React from 'react'
import { useParams } from 'react-router-dom'
import articles from '../data';

const Article = () => {
    const { id } = useParams();
    const article = articles.find(article => article.id === parseInt(id));

    if (!article) {
      return <p>Article not found.</p>;
    }

    return (
      <div className='p-4'>
        <h1 className='text-2xl font-bold'>{article.title}</h1>
        <p className='text-sm text-gray-500'>{`By ${article.author} on ${new Date(article.date).toLocaleDateString()}`}</p>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    )
}

export default Article