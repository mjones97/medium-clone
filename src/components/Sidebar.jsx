import React from 'react'
import StaffPick from './StaffPick'
import staffPicks from '../data/staffPicks'
import recommendedTopics from '../data/recommendedTopics'
import authors from '../data/authors'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className="flex flex-col gap-10 mt-10">
        <div>
          <h4>Staff Picks</h4>
          <div className="mt-3 mb-4">
            {staffPicks.slice(0, 3).map((article) => (
              <StaffPick key={article.id} article={article} />
            ))}
          </div>
          <a href="/" className="text-green-600">See the full list</a>
        </div>
        <div>
          <h4>Recommended Topics</h4>
          <div className="flex flex-wrap gap-2 mt-3 mb-4">
            {recommendedTopics.map((topic, index) => (
              <button
                key={index}
                className="bg-gray-200 py-2 px-4 rounded-3xl hover:bg-gray-300 transition"
                onClick={() => console.log(`Navigating to ${topic}`)}
              >
                {topic}
              </button>
            ))}
          </div>
          <a href="/" className="text-green-600">See more topics</a>
        </div>
        <div>
          <h4>Who to Follow</h4>
          <div className="flex flex-col mt-3 mb-4">
            {authors.map((author) => (
              <div key={author.id} className="flex justify-between items-center gap-5 mb-3">
                <div className="flex">
                  <img
                    src={author.image}
                    alt={`${author.name}'s profile`}
                    className="w-8 h-8 rounded-full mt-2 mr-3"
                  />
                  <div>
                    <p className="font-semibold">{author.name}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{author.bio}</p>
                  </div>
                </div>
                <button className="border px-3 py-1 rounded-2xl hover:bg-black hover:text-white transition">
                  Follow
                </button>
              </div>
            ))}
          </div>
          <a href="/" className="text-green-600">See more suggestions</a>
        </div>
        <div className='mb-10'>
          <h4 className='mb-3'>Reading list</h4>
          <p>Click the  on any story to easily add it to your reading list or a custom list that you can share.</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar