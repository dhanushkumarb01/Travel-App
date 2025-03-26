"use client";

import { useEffect, useState } from 'react';

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto sm:py-16 py-12 sm:px-0 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Loading blogs...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto sm:py-16 py-12 sm:px-0 px-4">
        <div className="text-center text-red-600">
          <h2 className="text-2xl font-semibold">Error: {error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto sm:py-16 py-12 sm:px-0 px-4">
      <div className="text-start space-y-4">
        <h2 className="text-[36px] font-bold text-[#0A0A0A]">Our Blog</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {blogPosts.map((post) => (
          <div key={post._id} className="">
            <div
              className={`rounded-xl overflow-hidden shadow-lg pl-8 pt-4 ${post.bgColor}`}
            >
              <span className="text-white text-sm pl-4">{post.date}</span>

              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[296px] object-cover pl-4 pt-4"
              />
            </div>
            <div className="max-w-sm">
              <h3 className="mt-4 text-[20px] font-semibold text-[#000929]">
                {post.title}
              </h3>

              <p className="mt-2 text-sm text-gray-700">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}