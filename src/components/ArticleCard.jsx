import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card mb-4 border-b">
      <Link to={`/article/${article.id}`}>
        <div className="flex-grow mt-7">
          <div className="flex items-center mb-3">
            <img src={article.authorImg} alt="Author" className="w-5 h-5 rounded-full mr-2" />
            <p className="text-sm">{article.author}</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="article-card-text flex flex-col">
              <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
              <p className="text-md text-gray-500">{article.description}</p>
              <div className="flex items-center text-sm text-gray-500 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 64 64" className='mr-4'>
                  <path fill="#FFC017" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"></path>
                </svg>
                <span className='mr-6'>{new Date(article.date).toLocaleDateString()}</span>
                <span>Views: {article.views}</span>
                <span className="ml-4">Likes: {article.likes}</span>
              </div>
            </div>
            <div className='ml-12'>
              <img src={article.image} alt={article.title} className="article-img rounded-sm" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;