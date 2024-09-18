import React from 'react'
import ArticleCard from './ArticleCard'
import articles from '../data'

const ArticlesList = () => {
  return (
    <div className='flex flex-col mt-5'>
      <div className="content-filter pt-4 pb-3 border-b">
        <div className="flex space-x-5">
          <button className="flex items-center">
            +
          </button>
          <button className="text-sm font-semibold">For You</button>
          <button className="text-sm font-semibold">Following</button>
        </div>
      </div>
      <div className='mt-6'>
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default ArticlesList