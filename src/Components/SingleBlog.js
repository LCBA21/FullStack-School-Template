import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const SingleBlog = ({ title, content, imageUrl }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleReadMore = () => {
    // Use navigate to go to the "BlogPage" route with the current props
    navigate(`/blog-page/${title}`, {
      state: {
        title,
        content,
        imageUrl,
      },
    });
  };

  return (

    <div className="bg-white  shadow-md p-7 mb-4">
      <img src={imageUrl} alt={title} className="w-full h-auto mb-8" />
      <span className='text-xs uppercase'>Academics</span>
      <h3 className="text-xl font-semibold text-gray-800" >{title}</h3>
      <div class="justify-center py-2">
          <div class="border-t-2 border-grey-900 w-12"></div>
        </div>
      <p className="text-gray-600 text-sm pl-0 tracking-tighter" >{content}</p>
      <button className='text-blue-900 border border-blue-900 text-center  w-[200px] font-smaller text-xs my-6 ml-12 md:mx-0 px-5 py-2' onClick={handleReadMore}>Read More</button>
    </div>
  );
}

export default SingleBlog;
