import React, { useState } from 'react';
import PostList from './PostList';
import blogPosts from "../HomeBlogs/data/data";

const HomeBlogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredBlogs = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='bg-gray-200 min-h-screen py-10 dark:bg-gray-800'>
      <div className="container mx-auto px-4">
        
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Our Latest Blogs
        </h1>

     
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search blog by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <PostList blogPosts={filteredBlogs} />
      </div>
    </div>
  );
};

export default HomeBlogs;
