import React from 'react';

const StaffPick = ({ article }) => (
  <div className="staff-pick mb-4">
    <div className="flex items-center mb-1">
      <img src={article.authorImg} alt={`${article.author}'s profile`} className="w-5 h-5 rounded-full mr-2" />
      <p className="text-sm text-gray-600">{article.author}</p>
    </div>
    <h6 className="text-md font-semibold">
      <a href={`/article/${article.id}`} className="hover:underline">{article.title}</a>
    </h6>
  </div>
);

export default StaffPick;