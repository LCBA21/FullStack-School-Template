import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleBlog from './SingleBlog';

const Blog = ({ blogPosts }) => {
  const [displayedPosts, setDisplayedPosts] = useState(3); // Number of posts to initially display
  const navigate = useNavigate()
  const loadMorePosts = () => {
    navigate('/all-posts'); 
  };

  return (
    <section className="bg-blue-900 p-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-white py-2 justify-center text-center">Our Blog Articles</h2>
        <div class="flex items-center justify-center py-2">
          <div class="border-t-2 border-white w-16"></div>
        </div>
        <p className='w-4/5 mx-auto text-center text-white font-smaller mt-6 mb-8'>Lorem ipsum dolor sit amet consectetur. Lorem donec interdum elit sit porttitor et consequat. 
          Urna ullamcorper suspendisse auctor lorem diam quis. Adipiscing donec ultrices at et non sed.</p>
        <div className='border-red-800 w-full rounded-md'></div>
        <div className="flex flex-wrap -mx-4 py-2">
          {blogPosts.slice(0, displayedPosts).map((post, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <SingleBlog title={post.title} content={post.content} imageUrl={post.imageUrl} />
            </div>
          ))}
        </div>
        {displayedPosts < blogPosts.length && (
          
          <button
            onClick={loadMorePosts}
            className="bg-white text-blue-900 px-4 py-2 mt-4 items-center justify-center hover:bg-blue-900 hover:text-white hover:border-white"
          >
            More Posts
          </button>
        )}
      </div>
    </section>
  );
};

export default Blog;
