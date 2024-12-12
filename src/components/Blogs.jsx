import React from "react";

const Blogs = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">Our Blogs</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {["Blog Post 1", "Blog Post 2", "Blog Post 3"].map((blog, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold text-blue-600 mb-2">{blog}</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
              ligula eros.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
