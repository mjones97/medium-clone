import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className="flex flex-col">
        <div>
          <h4>Staff Picks</h4>
          <a href="/" className="text-green-600">See the full list</a>
        </div>
        <div>
          <h4>Recommended topics</h4>
          <a href="/" className="text-green-600">See more topics</a>
        </div>
        <div>
          <h4>Who to follow</h4>
          <a href="/" className="text-green-600">See more suggestions</a>
        </div>
        <div>
          <h4>Reading list</h4>
          <p>Click the  on any story to easily add it to your reading list or a custom list that you can share.</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar