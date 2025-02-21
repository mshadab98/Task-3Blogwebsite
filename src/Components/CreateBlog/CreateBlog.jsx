import { useState } from "react";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const categories = ["Travel", "Food", "Technology", "Lifestyle", "Education"];

  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, image, category, content });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 dark:bg-gray-800">
      <div className="max-w-xl items-center  bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">Create a Blog</h2>

        <form onSubmit={handleSubmit} className="space-y-4 pl-6">

         
          <div>
            <label className="block text-gray-700 font-semibold">Title:</label>
            <input
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none"
              required
            />
          </div>

         
          <div>
            <label className="block text-gray-700 font-semibold">Short Description:</label>
            <input
              type="text"
              placeholder="Enter a short description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className=" mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none"
              required
            />
          </div>

         
          <div>
            <label className="block text-gray-700 font-semibold">Upload Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-1"
            />
            {image && <img src={image} alt="Preview" className="mt-2 h-40  object-cover rounded-md" />}
          </div>

          
          <div>
            <label className="block text-gray-700 font-semibold">Select Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className=" mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none"
              required
            >
              <option value="">Choose a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

         
          <div>
            <label className="block text-gray-700 font-semibold">Content:</label>
            <textarea
              rows="5"
              placeholder="Write your blog content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-1/2 mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200 outline-none"
              required
            ></textarea>
          </div>

          
          <button
            type="submit"
            className=" px-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
