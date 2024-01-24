import React from 'react';
import SingleBlog from './SingleBlog';

const AllBlogPage = ({ blogPosts }) => {
  return (
    <div div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-red-800 mb-4 py-6 justify-center text-center">All Blog Posts</h2>
      <div className="flex flex-wrap -mx-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <SingleBlog title={post.title} content={post.content} imageUrl={post.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogPage;

