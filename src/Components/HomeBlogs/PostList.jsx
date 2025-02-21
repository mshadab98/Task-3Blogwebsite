import React, { useState } from "react";

import { motion } from "framer-motion";

const PostList = ({ blogPosts }) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreBlogs = () => {
    setVisibleCount(blogPosts.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-10 space-y-8 dark:bg-gray-800">
      {blogPosts.slice(0, visibleCount).map((post) => (
        <motion.div
          key={post.id}
          className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full md:w-1/3 object-cover h-40 md:h-auto"
          />

          
          <div className="p-5 flex flex-col justify-center md:w-2/3">
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{post.shortDescription}</p>

         

            


           
            <div className="mt-4 flex items-center space-x-3">
              <div className="text-sm text-gray-600">
                <p className="font-medium">{post.author}</p>
                <p className="text-xs">{post.date}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      
      {visibleCount < blogPosts.length && (
        <div className="text-center mt-6">
          <button
            onClick={showMoreBlogs}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Read More Blogs
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList;
